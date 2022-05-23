import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from '../../services/config.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {

  postEditForm: FormGroup;
  id: number;

  constructor(private fb: FormBuilder,
    private auth: AuthenticationService,
    private config: ConfigService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router) { }

  ngOnInit() {
    this.postEditForm = this.fb.group({
      'id' : [null, Validators.required],
      'title' : [null, Validators.required],
      'author' : [null, Validators.required],
      'publishdate' : [null, Validators.required],
      'excert' : [null, Validators.required],
      'image' : [null, Validators.required],
    });
    this.id = this.route.snapshot.params['id'] || null ;
    if (this.id) {
    this.getPostById(this.id);
   }
  }

  getPostById(id: number) {
    this.config.getPostByID(id).subscribe(
      post => {
      this.postEditForm.setValue({
        id: post.id,
        title: post.title,
        author: post.author,
        publishdate: post.publishdate,
        excert: post.excert,
        image: post.image
      });
      }
    );
  }

  updatePost(formData: NgForm) {
    this.config.updatePost(formData).subscribe(
      () => this.getBack()
    );
  }

  getBack() {
    this.location.back();
  }
}

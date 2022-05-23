import { Component, OnInit , Input} from '@angular/core';
import { Post } from '../Post';

@Component({
  selector: 'app-post-block',
  templateUrl: './post-block.component.html',
  styleUrls: ['./post-block.component.css']
})
export class PostBlockComponent implements OnInit {
  @Input()  post: Post;
  constructor() { }

  ngOnInit() {
  }

}

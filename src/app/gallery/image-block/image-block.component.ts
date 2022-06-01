import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-block',
  templateUrl: './image-block.component.html',
  styleUrls: ['./image-block.component.css']
})
export class ImageBlockComponent implements OnInit {
@Input() image: {id: number, name: string};

  constructor() { }

  ngOnInit() {
  }

}

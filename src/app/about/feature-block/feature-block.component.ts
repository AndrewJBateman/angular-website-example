import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feature-block',
  templateUrl: './feature-block.component.html',
  styleUrls: ['./feature-block.component.css']
})
export class FeatureBlockComponent implements OnInit {

  @Input() feature: {
    id: number,
    icon: string,
    title: string,
    description: string};

  constructor() { }

  ngOnInit() {
  }

}

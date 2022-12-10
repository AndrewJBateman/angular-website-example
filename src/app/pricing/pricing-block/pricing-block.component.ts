import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-pricing-block",
  templateUrl: "./pricing-block.component.html"
})
export class PricingBlockComponent implements OnInit {
  @Input() plan: {
    id: 1;
    title: string;
    subtitle: string;
    description: string;
    price: string;
    currency: string;
    downloads: string;
    extensions: string;
    tutorials: string;
    support: string;
    updates: string;
    buttontext: string;
    buttonlink: string;
    featured: false;
  };
  constructor() {}

  ngOnInit() {}
}

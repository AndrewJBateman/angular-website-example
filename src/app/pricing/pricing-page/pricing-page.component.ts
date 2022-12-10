import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { ConfigService } from "src/app/shared/services/config.service";

@Component({
  selector: "app-pricing-page",
  templateUrl: "./pricing-page.component.html"
})
export class PricingPageComponent implements OnInit {
  // pricing: {
  //   id: number;
  //   name: string;
  //   tagline: string;
  //   title: string;
  //   description: string;
  // }[];

  // plans: {
  //   id: 1;
  //   title: string;
  //   subtitle: string;
  //   description: string;
  //   price: string;
  //   currency: string;
  //   downloads: string;
  //   extensions: string;
  //   tutorials: string;
  //   support: string;
  //   updates: string;
  //   buttontext: string;
  //   buttonlink: string;
  //   featured: false;
  // }[];
  pricing$: Observable<any> = new Observable();
  plans$: Observable<any> = new Observable();

  constructor(private config: ConfigService) {}

  ngOnInit() {
    this.getPageData("pages", 5);
    this.getBlockData("plans");
  }

  getPageData(database: string, id?: number) {
    this.pricing$ = this.config.getSettings(database, id);
  }

  getBlockData(database: string) {
    this.plans$ = this.config.getSettings(database);
  }
}

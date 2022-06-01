import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../../shared/services/config.service";

@Component({
  selector: "app-testimonial-page",
  templateUrl: "./testimonial-page.component.html",
  styleUrls: ["./testimonial-page.component.css"],
})
export class TestimonialPageComponent implements OnInit {
  // testimonials: {
  //   id: number;
  //   name: string;
  //   tagline: string;
  //   title: string;
  //   description: string;
  // }[];

  // feedbacks: {
  //   id: number;
  //   name: string;
  //   userimage: string;
  //   comments: string;
  //   company: string;
  // }[];
  testimonials$: Observable<any> = new Observable();
  feedback$: Observable<any> = new Observable();

  constructor(private config: ConfigService) {}

  ngOnInit() {
    this.getPageData("pages", 4);
    this.getBlockData("feedbacks");
  }

  getPageData(database: string, id?: number) {
    this.testimonials$ = this.config.getSettings(database, id);
  }

  getBlockData(database: string) {
    this.feedback$ = this.config.getSettings(database);
  }
}

import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ConfigService } from "../../shared/services/config.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"],
})
export class HomePageComponent implements OnInit {
  // header: {
  //   id: number;
  //   name: string;
  //   tagline: string;
  //   title: string;
  //   description: string;
  // }[];
  header$: Observable<any>;

  constructor(private config: ConfigService) {}

  ngOnInit() {
    this.getPageData("pages", 7);
  }

  getPageData(database: string, id?: number): void {
    this.header$ = this.config.getSettings(database, id);
  }
}

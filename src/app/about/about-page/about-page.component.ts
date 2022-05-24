import { Component, OnInit } from "@angular/core";
import { ConfigService } from "src/app/services/config.service";

@Component({
  selector: "app-about-page",
  templateUrl: "./about-page.component.html",
  styleUrls: ["./about-page.component.css"],
})
export class AboutPageComponent implements OnInit {
  intro: {
    id: number;
    name: string;
    tagline: string;
    title: string;
    description: string;
  }[];

  features: {
    id: number;
    icon: string;
    title: string;
    description: string;
  }[];

  constructor(private config: ConfigService) {}

  ngOnInit(): void {
    this.getPageData("pages", 1);
    this.getBlockData("features");
  }

  getPageData(database: string, id?: number) {
    this.config.getSettings(database, id).subscribe((data) => {
      this.intro = data;
      // console.log(this.intro);
    });
  }

  getBlockData(database: string) {
    this.config.getSettings(database).subscribe((data) => {
      this.features = data;
      // console.log(this.features);
    });
  }
}

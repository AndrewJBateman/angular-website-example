import { Observable } from 'rxjs';
import { Component, OnInit } from "@angular/core";
import { ConfigService } from "src/app/shared/services/config.service";

@Component({
  selector: "app-about-page",
  templateUrl: "./about-page.component.html",
  styleUrls: ["./about-page.component.css"],
})
export class AboutPageComponent implements OnInit {
  // intro: {
  //   id: number;
  //   name: string;
  //   tagline: string;
  //   title: string;
  //   description: string;
  // }[];
  intro$: Observable<any> = new Observable();

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

  getPageData(database: string, id?: number): void {
    this.intro$ = this.config.getSettings(database, id);
  }

  getBlockData(database: string) {
    this.config.getSettings(database).subscribe((data) => {
      this.features = data;
      console.log("features: ", this.features);
    });
  }
}

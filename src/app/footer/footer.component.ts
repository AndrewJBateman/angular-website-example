import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../services/config.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent implements OnInit {
  footer: {
    id: number;
    name: string;
    tagline: string;
    title: string;
    description: string;
  }[];

  constructor(private config: ConfigService) {}

  ngOnInit() {
    this.getPageData("pages", 7);
  }

  getPageData(database: string, id?: number) {
    this.config.getSettings(database, id).subscribe((data) => {
      this.footer = data;
      console.log(this.footer);
    });
  }
}

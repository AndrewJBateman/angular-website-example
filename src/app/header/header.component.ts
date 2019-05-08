import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../config.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent {
  header = {
    heading: String,
    headingtext: String,
    buttontext: String,
    buttonlink: String
  };

  constructor(private config: ConfigService) {}

  /*ngOnInit() {
    this.header = this.getHeader();
  }*/

  getHeader() {
    return this.config.getConfig().header;
  }
}

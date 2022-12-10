import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ConfigService } from "src/app/shared/services/config.service";

@Component({
  selector: "app-clients-page",
  templateUrl: "./clients-page.component.html"
})
export class ClientsPageComponent implements OnInit {
  // clients: {
  //   id: number;
  //   name: string;
  //   tagline: string;
  //   title: string;
  //   description: string;
  // }[];
  clients$: Observable<any> = new Observable();

  // companies: { id: number; name: string; weblink: string; logo: string }[];
  companies$: Observable<any> = new Observable();
  constructor(private config: ConfigService) {}

  ngOnInit() {
    this.getPageData("pages", 2);
    this.getBlockData("companies");
  }

  getPageData(database: string, id?: number) {
    this.clients$ = this.config.getSettings(database, id);
  }

  getBlockData(database: string) {
    this.companies$ = this.config.getSettings(database);
  }
}

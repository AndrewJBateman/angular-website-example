import { Observable } from 'rxjs';
import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../../shared/services/config.service";

@Component({
  selector: "app-gallery-page",
  templateUrl: "./gallery-page.component.html"
})
export class GalleryPageComponent implements OnInit {
  images$: Observable<any> = new Observable();

  // images: {
  //   id: number;
  //   name: string;
  // }[];

  constructor(private config: ConfigService) {}

  ngOnInit() {
    this.getBlockData("images");
  }

  getBlockData(database: string) {
    this.images$ = this.config.getSettings(database);
  }
}

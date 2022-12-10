import { Observable } from 'rxjs';
import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../shared/services/config.service";

@Component({
  selector: "app-social",
  templateUrl: "./social.component.html"
})
export class SocialComponent implements OnInit {
  // socialsites: {
  //   id: number;
  //   link: string;
  //   title: string;
  //   target: string;
  //   username: string;
  //   icon: string;
  // }[];
  socialsites$: Observable<any> = new Observable();

  constructor(private config: ConfigService) {}

  ngOnInit() {
    this.getSocialsites();
  }

  getSocialsites(): void {
    // return this.config
    //   .getSettings("websites")
    //   .subscribe((data) => (this.socialsites = data));
    this.socialsites$ = this.config.getSettings("websites");
  }
}

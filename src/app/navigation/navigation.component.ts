import { Component, OnInit, AfterContentChecked } from "@angular/core";
import { Location } from "@angular/common";
import { Observable, of } from "rxjs";
import { RouterLinkActive } from "@angular/router";
import { AuthenticationService } from "../services/authentication.service";
import * as $ from "jquery";
import { ConfigService } from "../services/config.service";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"],
})
export class NavigationComponent implements OnInit, AfterContentChecked {
  menu: { id: number; title: string; link: string; outlet: string }[];

  isLoggedIn: boolean;
  menuOpen: boolean;
  database = "menu";
  profileImage: string;
  user: any;

  constructor(
    private location: Location,
    private auth: AuthenticationService,
    private config: ConfigService
  ) {}

  ngOnInit() {
    this.menuOpen = false;
    this.getMenu();
    this.isLoggedIn = this.auth.isloggedIn();
    this.getUser();
  }
  ngAfterContentChecked() {
    of(this.auth.isloggedIn()).subscribe(() => {
      this.getUser();
    });
  }

  logout() {
    this.auth.logout();
  }

  toggleMenu(status: boolean) {
    this.menuOpen = status;
  }

  getMenu() {
    this.config.getSettings(this.database).subscribe((setting) => {
      this.menu = setting;
      console.log(setting);
    });
  }

  getUser() {
    this.user = JSON.parse(localStorage.getItem("currentUser"));

    if (this.user) {
      this.profileImage = this.user.image;
    } else {
      this.profileImage = "default-user.jpg";
    }
  }
}

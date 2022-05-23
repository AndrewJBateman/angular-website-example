import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-user-profile-icon",
  templateUrl: "./user-profile-icon.component.html",
  styleUrls: ["./user-profile-icon.component.css"],
})
export class UserProfileIconComponent implements OnInit {
  @Input() profileImage: string;

  constructor() {}

  ngOnInit() {}
}

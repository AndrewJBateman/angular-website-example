import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-companies-block",
  templateUrl: "./companies-block.component.html"
})
export class CompaniesBlockComponent implements OnInit {
  @Input() company: { id: number; name: string; weblink: string; logo: string };

  constructor() {}

  ngOnInit() {}
}

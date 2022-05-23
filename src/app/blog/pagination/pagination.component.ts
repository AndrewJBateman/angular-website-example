import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.css"],
})
export class PaginationComponent implements OnInit {
  @Input() pager;
  @Output() setPage: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  setCurrentPage(pageNumber: number) {
    this.setPage.emit(pageNumber);
  }
}

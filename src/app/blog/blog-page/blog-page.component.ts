import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../../services/config.service";
import { Post } from "../post";
import { PagerService } from "../services/pager.service";

@Component({
  selector: "app-blog-page",
  templateUrl: "./blog-page.component.html",
  styleUrls: ["./blog-page.component.css"],
})
export class BlogPageComponent implements OnInit {
  blog: {
    id: number;
    name: string;
    tagline: string;
    title: string;
    description: string;
  }[];

  allItems: any[];
  pages: any[];
  pageSize = 3;
  pager: any = {};
  posts: Post[];

  constructor(
    private config: ConfigService,
    private pagerService: PagerService
  ) {}

  ngOnInit() {
    this.getPageData("pages", 8);
    this.getBlockData("posts");
  }

  getPageData(database: string, id?: number) {
    this.config.getSettings(database, id).subscribe((data) => {
      this.blog = data;
      console.log(this.blog);
    });
  }

  getBlockData(database: string) {
    this.config.getSettings(database).subscribe((data) => {
      this.posts = data;
      this.allItems = this.posts;
      this.setPage(1);
      console.log(this.posts);
    });
  }

  setPage(pageNumber: number) {
    // create a pager using paging service
    this.pager = this.pagerService.getPager(
      this.allItems.length,
      pageNumber,
      this.pageSize
    );

    // current page posts
    this.pages = this.allItems.slice(
      this.pager.startIndex,
      this.pager.endIndex + 1
    );

    console.log(this.pager);
  }
}

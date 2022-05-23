import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ArticleCreateComponent } from "./article-create/article-create.component";
import { ArticleEditComponent } from "./article-edit/article-edit.component";
import { ArticleComponent } from "./article/article.component";
import { BlogPageComponent } from "./blog-page/blog-page.component";

const routes: Routes = [
  { path: "", component: BlogPageComponent },
  { path: "article/:id", component: ArticleComponent },
  { path: "article-edit/:id", component: ArticleEditComponent },
  { path: "article-create", component: ArticleCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}

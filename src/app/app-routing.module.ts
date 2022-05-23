import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { GalleryComponent } from "./gallery/gallery.component";
import { ContentComponent } from "./content/content.component";
import { TestimonialsComponent } from "./testimonials/testimonials.component";
import { ClientsComponent } from "./clients/clients.component";
import { PricingComponent } from "./pricing/pricing.component";

const routes: Routes = [
  { path: "", redirectTo: "/Home", pathMatch: "full" },
  {
    path: "Home",
    loadChildren: () =>
      import("./home/home.module").then((mod) => mod.HomeModule),
  },
  {
    path: "About",
    loadChildren: () =>
      import("./about/about.module").then((mod) => mod.AboutModule),
  },
  { path: "Services", component: ContentComponent },
  { path: "Testimonials", component: TestimonialsComponent },
  { path: "Gallery", component: GalleryComponent },
  { path: "Clients", component: ClientsComponent },
  { path: "Pricing", component: PricingComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}

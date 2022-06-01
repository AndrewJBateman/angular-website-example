import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((mod) => mod.HomeModule),
  },
  {
    path: "about",
    loadChildren: () =>
      import("./about/about.module").then((mod) => mod.AboutModule),
  },
  {
    path: "services",
    loadChildren: () =>
      import("./services/services.module").then((mod) => mod.ServicesModule),
  },
  {
    path: "testimonials",
    loadChildren: () =>
      import("./testimonial/testimonial.module").then(
        (mod) => mod.TestimonialModule
      ),
  },
  {
    path: "gallery",
    loadChildren: () =>
      import("./gallery/gallery.module").then((mod) => mod.GalleryModule),
  },
  {
    path: "clients",
    loadChildren: () =>
      import("./clients/clients.module").then((mod) => mod.ClientsModule),
  },
  {
    path: "pricing",
    loadChildren: () =>
      import("./pricing/pricing.module").then((mod) => mod.PricingModule),
  },
  {
    path: "404",
    loadChildren: () =>
      import("./notfound/notfound.module").then((mod) => mod.NotfoundModule),
  },
  { path: "**", redirectTo: "/404" },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}

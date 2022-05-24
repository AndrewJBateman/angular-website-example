import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { ContactComponent } from "./contact/contact.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { SubscribeComponent } from "./subscribe/subscribe.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((mod) => mod.HomeModule),
  },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "contact", component: ContactComponent, outlet: "popup" },
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
  { path: "subscribe", component: SubscribeComponent, outlet: "popup" },
  {
    path: "dashboard",
    loadChildren: () =>
      import("./user-dashboard/user-dashboard.module").then(
        (mod) => mod.UserDashboardModule
      ),
  },
  {
    path: "blog",
    loadChildren: () =>
      import("./blog/blog.module").then((mod) => mod.BlogModule),
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

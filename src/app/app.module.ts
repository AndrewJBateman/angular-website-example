import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { ReactiveFormsModule } from "@angular/forms";
import { MarkdownModule, MarkedOptions } from "ngx-markdown";

// Components
import { AppComponent } from "./app.component";
import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from "./footer/footer.component";
import { LoginComponent } from "./login/login.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { NavmenuComponent } from "./navmenu/navmenu.component";
import { SignupComponent } from "./signup/signup.component";
import { SocialComponent } from "./social/social.component";
import { SubscribeComponent } from "./subscribe/subscribe.component";
import { WebsiteBlockComponent } from "./website-block/website-block.component";

// Modules
import { AboutModule } from "./about/about.module";
import { AppRoutingModule } from "./app-routing.module";
import { BlogModule } from "./blog/blog.module";
import { ClientsModule } from "./clients/clients.module";
import { GalleryModule } from "./gallery/gallery.module";
import { HomeModule } from "./home/home.module";
import { NotfoundModule } from "./notfound/notfound.module";
import { PricingModule } from "./pricing/pricing.module";
import { ServicesModule } from "./services/services.module";
import { TestimonialModule } from "./testimonial/testimonial.module";
import { UserDashboardModule } from "./user-dashboard/user-dashboard.module";

// Services
import { ConfigService } from "./services/config.service";
import { InMemoryDataService } from "./services/in-memory-data.service";

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    FooterComponent,
    LoginComponent,
    NavigationComponent,
    NavmenuComponent,
    SignupComponent,
    SocialComponent,
    SubscribeComponent,
    WebsiteBlockComponent
  ],
  imports: [
    AboutModule,
    AppRoutingModule,
    BlogModule,
    BrowserModule,
    ClientsModule,
    GalleryModule,
    HomeModule,
    HttpClientModule,
    NotfoundModule,
    PricingModule,
    ReactiveFormsModule,
    ServicesModule,
    TestimonialModule,
    UserDashboardModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      passThruUnknownUrl: true,
    }),
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent],
})
export class AppModule {}

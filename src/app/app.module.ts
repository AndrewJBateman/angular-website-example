import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { ReactiveFormsModule } from "@angular/forms";

// Components
import { AppComponent } from "./app.component";
import { FooterComponent } from "./footer/footer.component";
import { NavmenuComponent } from "./navmenu/navmenu.component";
import { NavigationComponent } from './navigation/navigation.component';
import { SocialComponent } from './social/social.component';
import { WebsiteBlockComponent } from "./website-block/website-block.component";

// Modules
import { AppRoutingModule } from "./app-routing.module";
import { AboutModule } from "./about/about.module";
import { ClientsModule } from "./clients/clients.module";
import { GalleryModule } from "./gallery/gallery.module";
import { HomeModule } from "./home/home.module";
import { NotfoundModule } from "./notfound/notfound.module";
import { PricingModule } from "./pricing/pricing.module";
import { ServicesModule } from "./services/services.module";
import { TestimonialModule } from "./testimonial/testimonial.module";

// Services
import { ConfigService } from "./shared/services/config.service";
import { InMemoryDataService } from "./shared/services/in-memory-data.service";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
    NavmenuComponent,
    SocialComponent,
    WebsiteBlockComponent,
  ],
  imports: [
    AboutModule,
    AppRoutingModule,
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

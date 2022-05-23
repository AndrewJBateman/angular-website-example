import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SocialComponent } from './social/social.component';

import { FooterComponent } from './footer/footer.component';

import { GalleryComponent } from './gallery/gallery.component';
import { ContentComponent } from './content/content.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

import { ClientsComponent } from './clients/clients.component';
import { PricingComponent } from './pricing/pricing.component';


import { AppRoutingModule } from './app-routing.module';
import { ConfigService } from './services/config.service';
import { NavmenuComponent } from './navmenu/navmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ContentComponent,
    TestimonialsComponent,
    FooterComponent,
    ClientsComponent,
    PricingComponent,
    SocialComponent,
    NavigationComponent,
    NavmenuComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule {}

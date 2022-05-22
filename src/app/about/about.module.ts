import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutPageComponent } from './about-page/about-page.component';
import { FeatureBlockComponent } from './feature-block/feature-block.component';


@NgModule({
  declarations: [
    AboutPageComponent,
    FeatureBlockComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestimonialRoutingModule } from './testimonial-routing.module';
import { FeedbackBlockComponent } from './feedback-block/feedback-block.component';
import { TestimonialPageComponent } from './testimonial-page/testimonial-page.component';


@NgModule({
  declarations: [
    FeedbackBlockComponent,
    TestimonialPageComponent
  ],
  imports: [
    CommonModule,
    TestimonialRoutingModule
  ]
})
export class TestimonialModule { }

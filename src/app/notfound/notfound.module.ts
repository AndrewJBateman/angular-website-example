import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotfoundRoutingModule } from './notfound-routing.module';
import { NotfoundPageComponent } from './notfound-page/notfound-page.component';


@NgModule({
  declarations: [
    NotfoundPageComponent
  ],
  imports: [
    CommonModule,
    NotfoundRoutingModule
  ]
})
export class NotfoundModule { }

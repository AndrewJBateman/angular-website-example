import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesPageComponent } from './services-page/services-page.component';

@NgModule({
	imports: [CommonModule, ServicesRoutingModule, ServicesPageComponent],
})
export class ServicesModule {}

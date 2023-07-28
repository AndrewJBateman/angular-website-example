import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricingRoutingModule } from './pricing-routing.module';
import { PricingBlockComponent } from './pricing-block/pricing-block.component';
import { PricingPageComponent } from './pricing-page/pricing-page.component';

@NgModule({
	declarations: [PricingBlockComponent, PricingPageComponent],
	imports: [CommonModule, PricingRoutingModule],
})
export class PricingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricingRoutingModule } from './pricing-routing.module';
import { PricingBlockComponent } from './pricing-block/pricing-block.component';
import { PricingPageComponent } from './pricing-page/pricing-page.component';

@NgModule({
    imports: [CommonModule, PricingRoutingModule, PricingBlockComponent, PricingPageComponent],
})
export class PricingModule {}

import { Component, Input } from '@angular/core';
import { Plan } from '../models/plan.model';

@Component({
    selector: 'app-pricing-block',
    templateUrl: './pricing-block.component.html',
    standalone: true,
})
export class PricingBlockComponent {
	@Input() plan: Plan;
}

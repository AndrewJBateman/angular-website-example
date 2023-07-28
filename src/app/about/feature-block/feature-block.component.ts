import { Component, Input } from '@angular/core';
import { Feature } from '../models/feature.model';

@Component({
	selector: 'app-feature-block',
	templateUrl: './feature-block.component.html',
})
export class FeatureBlockComponent {
	@Input() feature: Feature;
}

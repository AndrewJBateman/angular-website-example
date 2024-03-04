import { Observable, throwError, catchError } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { Pricing } from '../models/pricing.model';
import { Plan } from '../models/plan.model';
import { AsyncPipe } from '@angular/common';
import { PricingBlockComponent } from '../pricing-block/pricing-block.component';

@Component({
	selector: 'app-pricing-page',
	templateUrl: './pricing-page.component.html',
	standalone: true,
	imports: [PricingBlockComponent, AsyncPipe],
})
export class PricingPageComponent implements OnInit {
	pricing$: Observable<Pricing> = new Observable();
	plans$: Observable<Plan[]> = new Observable();

	constructor(private config: ConfigService) {}

	ngOnInit() {
		this.getPageData('pages', 5);
		this.getBlockData('plans');
	}

	getPageData(database: string, id?: number) {
		this.pricing$ = this.config.getSettings(database, id).pipe(
			catchError(error => {
				console.error('Error fetching feature data:', error);
				return throwError(error);
			})
		);
	}

	getBlockData(database: string) {
		this.plans$ = this.config.getSettings(database).pipe(
			catchError(error => {
				console.error('Error fetching feature data:', error);
				return throwError(error);
			})
		);
	}
}

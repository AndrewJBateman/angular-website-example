import { Observable, throwError, catchError } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { Intro } from '../models/intro.model';
import { Feature } from '../models/feature.model';
import { AsyncPipe } from '@angular/common';
import { FeatureBlockComponent } from '../feature-block/feature-block.component';

@Component({
	selector: 'app-about-page',
	templateUrl: './about-page.component.html',
	standalone: true,
	imports: [FeatureBlockComponent, AsyncPipe],
})
export class AboutPageComponent implements OnInit {
	intro$: Observable<Intro>;
	features$: Observable<Feature[]>;

	constructor(private config: ConfigService) {}

	ngOnInit(): void {
		this.getPageData('pages', 1);
		this.getBlockData('features');
	}

	getPageData(database: string, id?: number): void {
		this.intro$ = this.config.getSettings(database, id).pipe(
			catchError(error => {
				console.error('Error fetching intro data:', error);
				return throwError(error);
			})
		);
	}

	getBlockData(database: string) {
		this.features$ = this.config.getSettings(database).pipe(
			catchError(error => {
				console.error('Error fetching feature data:', error);
				return throwError(error);
			})
		);
	}
}

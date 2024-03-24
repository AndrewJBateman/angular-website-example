/* eslint-disable @typescript-eslint/no-explicit-any */
import { Observable, throwError, catchError } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { Service } from '../models/service.model';
import { AsyncPipe } from '@angular/common';

@Component({
	selector: 'app-services-page',
	templateUrl: './services-page.component.html',
	standalone: true,
	imports: [AsyncPipe],
})
export class ServicesPageComponent implements OnInit {
	services$: Observable<Service> = new Observable();

	constructor(private config: ConfigService) {}

	ngOnInit() {
		this.getPageData('pages', 3);
	}

	getPageData(database: string, id?: number) {
		this.services$ = this.config.getSettings(database, id).pipe(
			catchError(error => {
				console.error('Error fetching feature data:', error);
				return throwError(error);
			})
		);
	}
}

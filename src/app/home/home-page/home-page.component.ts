import { Component, OnInit } from '@angular/core';
import { Observable, throwError, catchError } from 'rxjs';
import { ConfigService } from '../../shared/services/config.service';
import { Header } from '../models/header.model';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	standalone: true,
	imports: [RouterLink, AsyncPipe],
})
export class HomePageComponent implements OnInit {
	header$: Observable<Header>;

	constructor(private config: ConfigService) {}

	ngOnInit() {
		this.getPageData('pages', 7);
	}

	getPageData(database: string, id?: number): void {
		this.header$ = this.config.getSettings(database, id).pipe(
			catchError(error => {
				console.error('Error fetching feature data:', error);
				return throwError(error);
			})
		);
	}
}

import { Component, OnInit } from '@angular/core';
import { Observable, throwError, catchError } from 'rxjs';
import { ConfigService } from 'src/app/shared/services/config.service';
import { Client } from '../models/client.model';
import { Company } from '../models/company.model';
import { AsyncPipe } from '@angular/common';
import { CompaniesBlockComponent } from '../companies-block/companies-block.component';

@Component({
	selector: 'app-clients-page',
	templateUrl: './clients-page.component.html',
	standalone: true,
	imports: [CompaniesBlockComponent, AsyncPipe],
})
export class ClientsPageComponent implements OnInit {
	clients$: Observable<Client[]> = new Observable();
	companies$: Observable<Company[]> = new Observable();
	constructor(private config: ConfigService) {}

	ngOnInit() {
		this.getPageData('pages', 2);
		this.getBlockData('companies');
	}

	getPageData(database: string, id?: number) {
		this.clients$ = this.config.getSettings(database, id).pipe(
			catchError(error => {
				console.error('Error fetching feature data:', error);
				return throwError(error);
			})
		);
	}

	getBlockData(database: string) {
		this.companies$ = this.config.getSettings(database).pipe(
			catchError(error => {
				console.error('Error fetching feature data:', error);
				return throwError(error);
			})
		);
	}
}

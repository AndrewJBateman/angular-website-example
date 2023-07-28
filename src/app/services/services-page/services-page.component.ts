import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { Service } from '../models/service.model';

@Component({
	selector: 'app-services-page',
	templateUrl: './services-page.component.html',
})
export class ServicesPageComponent implements OnInit {
	services$: Observable<Service> = new Observable();

	constructor(private config: ConfigService) {}

	ngOnInit() {
		this.getPageData('pages', 3);
	}

	getPageData(database: string, id?: number) {
		this.services$ = this.config.getSettings(database, id);
	}
}

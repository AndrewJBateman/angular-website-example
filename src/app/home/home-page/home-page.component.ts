import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from '../../shared/services/config.service';
import { Header } from '../models/header.model';

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
	header$: Observable<Header>;

	constructor(private config: ConfigService) {}

	ngOnInit() {
		this.getPageData('pages', 7);
	}

	getPageData(database: string, id?: number): void {
		this.header$ = this.config.getSettings(database, id);
	}
}

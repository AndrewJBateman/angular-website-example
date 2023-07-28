import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { Intro } from '../models/intro.model';
import { Feature } from '../models/feature.model';

@Component({
	selector: 'app-about-page',
	templateUrl: './about-page.component.html',
})
export class AboutPageComponent implements OnInit {
	intro$: Observable<Intro> = new Observable();
	features$: Observable<Feature[]> = new Observable();

	constructor(private config: ConfigService) {}

	ngOnInit(): void {
		this.getPageData('pages', 1);
		this.getBlockData('features');
	}

	getPageData(database: string, id?: number): void {
		this.intro$ = this.config.getSettings(database, id);
	}

	getBlockData(database: string) {
		this.features$ = this.config.getSettings(database);
	}
}

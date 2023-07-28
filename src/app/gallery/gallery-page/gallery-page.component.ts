import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { Image } from '../models/image.model';

@Component({
	selector: 'app-gallery-page',
	templateUrl: './gallery-page.component.html',
})
export class GalleryPageComponent implements OnInit {
	images$: Observable<Image[]> = new Observable();

	constructor(private config: ConfigService) {}

	ngOnInit() {
		this.getBlockData('images');
	}

	getBlockData(database: string) {
		this.images$ = this.config.getSettings(database);
	}
}

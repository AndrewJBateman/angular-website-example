import { Observable, throwError, catchError } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { Image } from '../models/image.model';
import { AsyncPipe } from '@angular/common';
import { ImageBlockComponent } from '../image-block/image-block.component';

@Component({
	selector: 'app-gallery-page',
	templateUrl: './gallery-page.component.html',
	standalone: true,
	imports: [ImageBlockComponent, AsyncPipe],
})
export class GalleryPageComponent implements OnInit {
	images$: Observable<Image[]> = new Observable();

	constructor(private config: ConfigService) {}

	ngOnInit() {
		this.getBlockData('images');
	}

	getBlockData(database: string) {
		this.images$ = this.config.getSettings(database).pipe(
			catchError(error => {
				console.error('Error fetching feature data:', error);
				return throwError(error);
			})
		);
	}
}

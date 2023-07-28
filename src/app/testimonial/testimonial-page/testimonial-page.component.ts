import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { Feedback } from '../models/feedback.model';
import { Testimonial } from '../models/testimonial.model';

@Component({
	selector: 'app-testimonial-page',
	templateUrl: './testimonial-page.component.html',
})
export class TestimonialPageComponent implements OnInit {
	testimonials$: Observable<Testimonial[]> = new Observable();
	feedback$: Observable<Feedback[]> = new Observable();

	constructor(private config: ConfigService) {}

	ngOnInit() {
		this.getPageData('pages', 4);
		this.getBlockData('feedback');
	}

	getPageData(database: string, id?: number) {
		this.testimonials$ = this.config.getSettings(database, id);
	}

	getBlockData(database: string) {
		this.feedback$ = this.config.getSettings(database);
	}
}

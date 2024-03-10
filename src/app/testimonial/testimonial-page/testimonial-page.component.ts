/**
 * TestimonialPageComponent class.
 *
 * This component is responsible for displaying testimonials and feedback on a page.
 * It fetches data from the ConfigService and handles any errors that occur.
 *
 * Properties:
 * - testimonials$: An Observable of Testimonial[] that holds the testimonials data.
 * - feedback$: An Observable of Feedback[] that holds the feedback data.
 *
 * Constructor:
 * - Accepts an instance of the ConfigService as a dependency.
 *
 * Methods:
 * - ngOnInit(): Lifecycle hook that is called after the component is initialized. It calls the getData() method to fetch the data.
 * - handleError(error: any): Handles any errors that occur during data fetching. It logs the error and throws it as an Observable.
 * - getData(database: string, id?: number): Fetches the data from the ConfigService based on the provided database and optional id. It assigns the fetched data to the respective properties.
 */
import { Observable, throwError, catchError } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { Feedback } from '../models/feedback.model';
import { Testimonial } from '../models/testimonial.model';
import { AsyncPipe } from '@angular/common';
import { FeedbackBlockComponent } from '../feedback-block/feedback-block.component';

@Component({
	selector: 'app-testimonial-page',
	templateUrl: './testimonial-page.component.html',
	standalone: true,
	imports: [FeedbackBlockComponent, AsyncPipe],
})
export class TestimonialPageComponent implements OnInit {
	testimonials$: Observable<Testimonial[]>;
	feedback$: Observable<Feedback[]>;

	constructor(private config: ConfigService) {}

	ngOnInit() {
		this.getData('pages', 4);
		this.getData('feedback');
	}

	handleError(error: any): Observable<never> {
		console.error('Error fetching feature data:', error);
		return throwError(error);
	}
	getData(database: string, id?: number) {
		if (id) {
			this.testimonials$ = this.config
				.getSettings(database, id)
				.pipe(catchError(this.handleError));
		} else {
			this.feedback$ = this.config
				.getSettings(database)
				.pipe(catchError(this.handleError));
		}
	}
}

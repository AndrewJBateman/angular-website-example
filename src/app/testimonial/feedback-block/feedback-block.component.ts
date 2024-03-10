import { Component, Input } from '@angular/core';
import { Feedback } from '../models/feedback.model';

@Component({
	selector: 'app-feedback-block',
	templateUrl: './feedback-block.component.html',
	standalone: true,
})
export class FeedbackBlockComponent {
	@Input() feedback: Feedback;
}

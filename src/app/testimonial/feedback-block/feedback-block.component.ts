import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-feedback-block',
	templateUrl: './feedback-block.component.html',
})
export class FeedbackBlockComponent {
	@Input() feedback: {
		id: number;
		name: string;
		userimage: string;
		comments: string;
		company: string;
	};
}

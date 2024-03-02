import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-website-block',
    templateUrl: './website-block.component.html',
    standalone: true,
})
export class WebsiteBlockComponent {
	@Input() website: {
		id: number;
		link: string;
		title: string;
		target: string;
		username: string;
		icon: string;
	};
}

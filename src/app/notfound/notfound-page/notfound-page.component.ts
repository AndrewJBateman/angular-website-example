import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-notfound-page',
	templateUrl: './notfound-page.component.html',
	styleUrls: ['./notfound-page.component.css'],
	standalone: true,
	imports: [RouterLink],
})
export class NotfoundPageComponent {}

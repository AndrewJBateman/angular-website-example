import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../shared/services/config.service';
import { Site } from './models/site.model';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-social',
    templateUrl: './social.component.html',
    standalone: true,
    imports: [AsyncPipe],
})
export class SocialComponent implements OnInit {
	socialsites$: Observable<Site[]> = new Observable();

	constructor(private config: ConfigService) {}

	ngOnInit() {
		this.getSocialsites();
	}

	getSocialsites(): void {
		this.socialsites$ = this.config.getSettings('websites');
	}
}

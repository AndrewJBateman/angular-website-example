import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { ConfigService } from '../shared/services/config.service';
import { Footer } from './footer.model';
import { AsyncPipe } from '@angular/common';
import { SocialComponent } from '../social/social.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
    standalone: true,
    imports: [
        RouterLink,
        SocialComponent,
        AsyncPipe,
    ],
})
export class FooterComponent implements OnInit {
	// footer$: Observable<IFooter> = new Observable<IFooter>();
	footer$: Observable<Footer> = new Observable();
	constructor(private config: ConfigService) {}

	ngOnInit() {
		this.getPageData('pages', 6);
	}

	getPageData(database: string, id?: number): void {
		this.footer$ = this.config.getSettings(database, id);
	}
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLinkActive, RouterLink } from '@angular/router';

@Component({
    selector: 'app-navmenu',
    templateUrl: './navmenu.component.html',
    standalone: true,
    imports: [RouterLinkActive, RouterLink],
})
export class NavmenuComponent {
	@Input() menu: any;
	@Input() menuOpen: boolean;
	@Output() menuStatus: EventEmitter<any> = new EventEmitter<any>();

	toggleMenu() {
		this.menuStatus.emit(!this.menuOpen);
	}
}

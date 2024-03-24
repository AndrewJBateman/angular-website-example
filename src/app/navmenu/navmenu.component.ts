import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLinkActive, RouterLink } from '@angular/router';

interface MenuItem {}

@Component({
	selector: 'app-navmenu',
	templateUrl: './navmenu.component.html',
	standalone: true,
	imports: [RouterLinkActive, RouterLink],
})
export class NavmenuComponent {
	@Input() menu: MenuItem[];
	@Input() menuOpen: boolean;
	@Output() menuStatus: EventEmitter<boolean>;

	toggleMenu(): void {
		this.menuStatus.emit(!this.menuOpen);
	}
}

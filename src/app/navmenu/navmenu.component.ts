import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html'
})
export class NavmenuComponent {

@Input() menu: any;
@Input() menuOpen: boolean;
@Output() menuStatus: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  toggleMenu() {
    this.menuStatus.emit(!this.menuOpen);
  }

}

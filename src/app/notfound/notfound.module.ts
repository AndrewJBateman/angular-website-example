import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotfoundRoutingModule } from './notfound-routing.module';
import { NotfoundPageComponent } from './notfound-page/notfound-page.component';

@NgModule({
    imports: [CommonModule, NotfoundRoutingModule, NotfoundPageComponent],
})
export class NotfoundModule {}

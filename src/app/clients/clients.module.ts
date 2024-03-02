import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsPageComponent } from './clients-page/clients-page.component';
import { CompaniesBlockComponent } from './companies-block/companies-block.component';

@NgModule({
	imports: [
		CommonModule,
		ClientsRoutingModule,
		ClientsPageComponent,
		CompaniesBlockComponent,
	],
})
export class ClientsModule {}

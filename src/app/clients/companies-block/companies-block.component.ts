import { Component, Input } from '@angular/core';
import { Company } from '../models/company.model';

@Component({
    selector: 'app-companies-block',
    templateUrl: './companies-block.component.html',
    standalone: true,
})
export class CompaniesBlockComponent {
	@Input() company: Company;
}

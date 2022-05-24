import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesBlockComponent } from './companies-block.component';

describe('CompaniesBlockComponent', () => {
  let component: CompaniesBlockComponent;
  let fixture: ComponentFixture<CompaniesBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompaniesBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompaniesBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

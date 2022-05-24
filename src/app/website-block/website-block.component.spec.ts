import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteBlockComponent } from './website-block.component';

describe('WebsiteBlockComponent', () => {
  let component: WebsiteBlockComponent;
  let fixture: ComponentFixture<WebsiteBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsiteBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsiteBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

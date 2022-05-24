import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeComponent } from './subscribe.component';

describe('SubscribeComponent', () => {
  let component: SubscribeComponent;
  let fixture: ComponentFixture<SubscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

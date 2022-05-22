import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureBlockComponent } from './feature-block.component';

describe('FeatureBlockComponent', () => {
  let component: FeatureBlockComponent;
  let fixture: ComponentFixture<FeatureBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

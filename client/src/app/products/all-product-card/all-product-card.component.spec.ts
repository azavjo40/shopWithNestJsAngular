import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProductCardComponent } from './all-product-card.component';

describe('AllProductCardComponent', () => {
  let component: AllProductCardComponent;
  let fixture: ComponentFixture<AllProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllProductCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

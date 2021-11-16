import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketProductsCardComponent } from './basket-products-card.component';

describe('BasketProductsCardComponent', () => {
  let component: BasketProductsCardComponent;
  let fixture: ComponentFixture<BasketProductsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketProductsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketProductsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

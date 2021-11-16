import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketProductsComponent } from './basket-products.component';

describe('BasketProductsComponent', () => {
  let component: BasketProductsComponent;
  let fixture: ComponentFixture<BasketProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit } from '@angular/core';
import { AllProductServiceService } from './all-product-service.service';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.scss'],
})
export class AllProductComponent implements OnInit {
  constructor(private allProductServiceService: AllProductServiceService) {}
  products: any = [];
  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct() {
    this.allProductServiceService
      .getAllProduct()
      .subscribe((items) => (this.products = items));
  }
}

import { Component, OnInit } from '@angular/core';
import { CreateProductService } from './create-product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent implements OnInit {
  constructor(private createProductService: CreateProductService) {}
  form: any = {
    name: '',
    type: '',
    cost: '',
    paragraph: '',
    userId: '',
    image: null,
  };
  uploadFile(e: any) {
    this.form.image = e.target.files[0];
  }
  changeHandler() {}
  ngOnInit(): void {}
  create(): void {
    this.createProductService.create(this.form);
    setTimeout(() => {
      this.form = {
        name: '',
        type: '',
        cost: '',
        paragraph: '',
        userId: '',
        image: null,
      };
    }, 3000);
  }
}

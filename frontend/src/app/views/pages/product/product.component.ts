import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  term: string
  productsList = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.productService.getAllProduct()
      .subscribe(
        (res: any)=>{
          this.productsList = res;
        },
        e=>{
          console.log(e);
        }
      );
  }

}

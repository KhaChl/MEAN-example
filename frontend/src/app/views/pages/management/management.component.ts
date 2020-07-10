import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';
import { ManagementService } from '../../../shared/services/management.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {

  term: string;
  productsList = [];

  constructor(
    private productService: ProductService,
    private managamentService: ManagementService
  ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAllProduct()
      .subscribe(
        (res: any) => {
          this.productsList = res;
        },
        e => {
          console.log(e);
        }
      );
  }

  deleteProduct(id: string) {
    this.managamentService.deleteProduct(id)
      .subscribe(
        res => {
          this.getAllProducts();
        },
        e => {
          console.log(e);
        }
      );
  }

}

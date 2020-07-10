import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../shared/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ManagementService } from '../../../../shared/services/management.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  private id;
  product = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    imagePath: new FormControl('', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]),
    price: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')],),
    stock: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]) 
  });

  constructor(
    private productService: ProductService,
    private managementService: ManagementService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params.id;
      this.getProduct(id);
    });
  }

  getProduct(id: string) {
    this.productService.getProduct(id)
      .subscribe(
        res => {
          this.id = res['_id']
          this.product.setValue(
            {
              name: res['name'],
              description: res['description'],
              imagePath: res['imagePath'],
              price: res['price'],
              stock: res['stock']
            }
          );
        },
        e => {
          console.log(e);
        }
      );
  }

  editProduct() {
    this.managementService.editProduct(this.product.value, this.id)
      .subscribe(
        res => {
          this.router.navigate(['manangement']);
        },
        e => {
          console.log(e);
        }
      );
  }

}

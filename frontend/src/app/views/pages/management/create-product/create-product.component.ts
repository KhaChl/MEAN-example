import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ManagementService } from '../../../../shared/services/management.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    imagePath: new FormControl('', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]),
    price: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    stock: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')])
  });

  constructor(
    private manangementService: ManagementService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createProduct() {
    this.manangementService.createProduct(this.product.value)
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

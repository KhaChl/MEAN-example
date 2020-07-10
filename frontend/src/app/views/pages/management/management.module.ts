import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
/* rutas */
import { ManagementRoutes } from './management.routing';
/* Componentes */
import { ManagementComponent } from './management.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

@NgModule({
  declarations: [
    ManagementComponent, 
    CreateProductComponent, 
    EditProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ManagementRoutes),
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class ManagementModule { }

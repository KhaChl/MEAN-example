import { Routes } from '@angular/router';
import { ManagementComponent } from './management.component';
import { IsAdminGuard } from '../../../shared/guards/is-admin.guard';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';


export const ManagementRoutes: Routes = [
    {
        path: '',
        component: ManagementComponent,
        canActivate: [IsAdminGuard]
    },
    {
        path: 'create-product',
        component: CreateProductComponent,
        canActivate: [IsAdminGuard]
    },
    {
        path: 'edit-product/:id',
        component: EditProductComponent,
        canActivate: [IsAdminGuard]
    }
];
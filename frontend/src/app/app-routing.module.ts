import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './views/pages/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('./views/base/index/index.module').then(m => m.IndexModule)
      },
      {
        path: 'product',
        loadChildren: () => import('./views/pages/product/product.module').then(m => m.ProductModule)
      },
      {
        path: 'manangement',
        loadChildren: () => import('./views/pages/management/management.module').then(m => m.ManagementModule)
      },
      {
        path: 'user',
        loadChildren: () => import('./views/pages/user/user.module').then(m => m.UserModule)
      }
    ]
  },
  {
    path: '**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

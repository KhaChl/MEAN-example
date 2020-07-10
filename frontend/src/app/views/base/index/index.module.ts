import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
/* Rutas */
import { IndexRoutes } from './index.routing';
/* componentes */
import { IndexComponent } from './index.component';
import { SigninComponent } from './signin/signin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    IndexComponent,
    SigninComponent,
    SignupComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(IndexRoutes),
    ReactiveFormsModule
  ],
  exports: [NavbarComponent, FooterComponent]
})
export class IndexModule { }

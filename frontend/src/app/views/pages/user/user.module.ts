import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
/* rutas */
import { UserRoutes } from './user.routing';
/* componentes */
import { UserComponent } from './user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';

@NgModule({
  declarations: [
    UserComponent,
    ChangePasswordComponent,
    PersonalDataComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes),
    ReactiveFormsModule
  ],
})
export class UserModule { }

import { Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { AuthGuard } from '../../../shared/guards/auth.guard';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


export const UserRoutes: Routes = [
    {
        path: '',
        component: UserComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                component: PersonalDataComponent
            },
            {
                path: 'personal-data',
                component: PersonalDataComponent
            },
            {
                path: 'change-password',
                component: ChangePasswordComponent
            }
        ]
    }
]
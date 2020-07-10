import { Routes } from '@angular/router';
import { IndexComponent } from './index.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';


export const IndexRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: IndexComponent
            },
            {
                path: 'signin',
                component: SigninComponent
            },
            {
                path: 'signup',
                component: SignupComponent 
            }
        ]
    }
];
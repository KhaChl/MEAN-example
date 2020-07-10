import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard implements CanActivate {

  constructor(private authService :AuthService,
    private router : Router){}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['signin']);
    }
    if(!this.authService.isAdmin()){
      this.router.navigate(['**']);
    } 
    return true;
  }

}

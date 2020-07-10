import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req, next) {
    const token = this.authService.getToken();
    const tokenReq = req.clone(
      {
        headers: req.headers.set('Authorization', 'Bearer ' + token)
      }
    );
    return next.handle(tokenReq);
  }

}

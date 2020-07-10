import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = environment.urlApi;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  signUp(user) {
    return this.http.post(this.url + 'signup', user);
  }

  signIn(user) {
    return this.http.post(this.url + 'signin', user);
  }

  isAuthenticated(): boolean {
    return !localStorage.getItem('token');
  }

  isAdmin(): boolean{
    const decode = jwt_decode(localStorage.getItem('token'));
    if(decode.role == 'Admin') return true
  }

  getId(){
    const decode = jwt_decode(localStorage.getItem('token')); 
    return decode._id;
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

}

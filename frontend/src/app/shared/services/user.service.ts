import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlApi = environment.urlApi;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }
  
  getUser(){
    return this.http.get(this.urlApi + 'user/' + this.authService.getId());
  }

  updatePassword(data){
    return this.http.put(this.urlApi + 'user/updatepassword/' + this.authService.getId(), data);
  }
  
  updateEmail(email) {
    return this.http.put(this.urlApi + 'user/updateuser/' + this.authService.getId(), email);
  }

  deleteUser() {
    return this.http.delete(this.urlApi + '/delete/' + this.authService.getId());
  }

}

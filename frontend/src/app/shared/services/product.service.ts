import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) { }

  getProduct(id) {
    return this.http.get(this.urlApi + 'product/' + id);
  }

  getAllProduct() {
    return this.http.get(this.urlApi + 'product');
  }

}

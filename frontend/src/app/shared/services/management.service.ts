import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManagementService {

  private urlApi = environment.urlApi;

  constructor(
    private http: HttpClient
  ) { }

  createProduct(product) {
    return this.http.post(this.urlApi + 'product/create', product);
  }

  editProduct(product, id) {
    return this.http.put(this.urlApi + 'product/updateproduct/' + id, product);
  }

  deleteProduct(id) {
    return this.http.delete(this.urlApi  + 'product/delete/' + id);
  }

}

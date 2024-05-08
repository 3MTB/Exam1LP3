import { Injectable } from '@angular/core';
import { EmptyError, catchError, map } from 'rxjs';
import { Produt } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private urlBase = 'http://localhost:3000/products';
  constructor() { }

  async getAllProducts() {
    const data = await fetch(this.urlBase);
    return await data.json() ?? {};
  }
  async PutProduct(product: Produt) {
    const data = await fetch(this.urlBase, {
      method: 'POST',
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(data);
  }
}

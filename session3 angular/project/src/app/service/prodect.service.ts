import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProdectService {

  constructor(public api:HttpClient) { }
  getProdect(){
    return this.api.get("https://fakestoreapi.com/products")
  }
}

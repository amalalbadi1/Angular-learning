import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class GithupService {

  
  constructor(public api:HttpClient) { }
  getGithup(){
    return this.api.get("https://api.github.com/users/devmohamedamr")
  }
}


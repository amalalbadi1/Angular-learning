import { Component } from '@angular/core';
import{ProdectService} from '../service/prodect.service'
@Component({
  selector: 'app-prodect',
  templateUrl: './prodect.component.html',
  styleUrls: ['./prodect.component.css']
})
export class ProdectComponent {
  data:any;
  constructor(public prodect:ProdectService){
    this.prodect.getProdect().subscribe((res)=>{
      this.data=res
      console.log(res)
    })
  }}

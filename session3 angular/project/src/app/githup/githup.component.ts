import { Component } from '@angular/core';
import {GithupService} from '../service/githup.service'

@Component({
  selector: 'app-githup',
  templateUrl: './githup.component.html',
  styleUrls: ['./githup.component.css']
})
export class GithupComponent {
  data:any;
  constructor(public githup:GithupService){
    this.githup.getGithup().subscribe((res)=>{
      this.data=res
      console.log(res)
    })
  }}


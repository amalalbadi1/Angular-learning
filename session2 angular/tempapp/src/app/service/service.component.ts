import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  servise:Array<string> =[
    "Photoshop",
    "Web Design",
    "App Design",
    "SEO"
  ]
}
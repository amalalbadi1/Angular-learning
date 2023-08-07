import { Component } from '@angular/core';
import { LoggerService } from '../service/logger.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
constructor(x:LoggerService){
  x.calc(1,45)
  x.sayhi()
}

}

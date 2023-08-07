import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'
@Component({
  selector: 'app-regster',
  templateUrl: './regster.component.html',
  styleUrls: ['./regster.component.css']
})
export class RegsterComponent {
  regster = new FormGroup({
    firstName: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {
    console.log(this.regster.value);
  }
}


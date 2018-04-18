import { Component } from '@angular/core';
import {ThinaerService} from "./thinaer.service";
import {APP_CONSTANT} from "./constants";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private thinaerService:ThinaerService){

  }
}

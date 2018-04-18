import { Component, OnInit } from '@angular/core';
import {environment} from "../../environments/environment";
import {ThinaerService} from "../thinaer.service";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  appId=environment.appId;
  places=[];
  devices=[];
  httpResolved1='pending';
  httpResolved2='pending';

  constructor(private thinaerService:ThinaerService) { }

  ngOnInit() {
    this.getPlaces();
    this.getThings();
  }


  appIdChange(){
    this.thinaerService.setAppId(this.appId);
    this.getPlaces();
    this.getThings();
  }

  async getThings(){
    this.httpResolved1='pending';

    try{
      const data:any = await this.thinaerService.getThingsById();
      this.devices=data.docs;
      this.httpResolved1='resolved';
      console.log('things are')
      console.log(this.devices)

    }
    catch (err){
      this.httpResolved1='resolved';

    }

  }


  async getPlaces(){
    this.httpResolved2='pending';

    try{
      const data:any = await this.thinaerService.getPlaceByiD();
      this.places=data.docs;
      console.log('places are')
      console.log(this.places)
      this.httpResolved2='resolved';

    }
    catch (err){
      this.httpResolved2='resolved';

    }

  }

}

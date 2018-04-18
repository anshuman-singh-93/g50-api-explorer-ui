import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ThinaerService} from "../thinaer.service";

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  currentId;
  device={details:{},movements:[],perepherals:[]};
  constructor(private thinaerService:ThinaerService,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((param)=>{
      console.log(param)
      this.currentId=param.id;
      this.getDeviceDetailById();
      this.getDeviceMovements();
      this.getDevicePeripheral();
    });



  }



  async getDeviceDetailById(){

    try{
      const data:any = await this.thinaerService.getDeviceDetailById(this.currentId);
      this.device.details=data||{}
      console.log(this.device)

    }
    catch (err){

    }

  }
  async getDevicePeripheral(){

    try{
      const data:any = await this.thinaerService.getDevicePerephral(this.currentId);
      this.device.perepherals=data||{}

    }
    catch (err){

    }

  }

  async getDeviceMovements(){

    try{
      const data:any = await this.thinaerService.getDeviceMovements(this.currentId);
      this.device.movements=data||{}

    }
    catch (err){

    }

  }


}

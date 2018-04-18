import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import 'rxjs/add/operator/concatMap';
import {APP_CONSTANT} from "./constants";
import 'rxjs/add/operator/retry';
import {environment} from "../environments/environment";
@Injectable()
export class ThinaerService {
  appId=environment.appId;
  constructor(private http:HttpClient) {

  }


  setAppId(id:string){
    this.appId=id;
  }

  async getPlaceByiD(){
    return this.http.get(`${environment.apiURL}/${this.appId}/places`)
      .toPromise()
  }

  async getThingsById(){

    return this.http.get(`${environment.apiURL}/${this.appId}/things`)
      .toPromise()
  }
  async getDevicePerephral(id:string){

    return this.http.get(`${environment.apiURL}/${this.appId}/things/${id}/peripherals`)
      .toPromise()
  }


  async getDeviceDetailById(id:string){

    return this.http.get(`${environment.apiURL}/${this.appId}/things/${id}`)
      .toPromise()
  }


  async getDeviceMovements(id:string){

    return this.http.get(`${environment.apiURL}/${this.appId}/things/${id}/movements`)
      .toPromise()
  }



}

import { Component, OnInit } from '@angular/core';
import {DeviceService} from "../services/device.service";
import {Subscription} from "rxjs";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-device-view',
  templateUrl: './device-view.component.html',
  styleUrls: ['./device-view.component.scss']
})
export class DeviceViewComponent implements OnInit {

  isAuth = false;
  lastNamePValue ='Usman Monkey';
  agePValue = 400;
  deviceSubscription: Subscription|any;

  lastUpdate = new  Promise(
    (resolve, reject)=> {
      const date = new Date();
      setTimeout(()=>{
          resolve(date);
        }, 4000
      );
    } )

  devices : any=[];

  constructor(private deviceService : DeviceService,
              private toastrService: ToastrService) {
    if (this.isAuth == false){
      setTimeout(
        ()=>{
          this.isAuth = true;
        },4000
      );
    }
  }

  switchOnAll(){
    this.deviceService.switchOnAll();
    console.log('Switch on all device!');
  }

  switchOffAll(){
    this.deviceService.switchOffAll();
    console.log('Switch off all device!');
  }

  getDateColor(){
    return  'green';
  }

  getIndex(i: number){
    console.log(i);
  }
  ngOnInit(): void {
    //this.devices = this.deviceService.devices;
    this.deviceSubscription =this.deviceService.deviceSubject.subscribe(
      (devices:any[]) =>{
        this.devices=devices;
      }
    );
    this.deviceService.emitDeviceSubject();
  }

  onSave(){
    this.deviceService.saveDeviceToServer();
    this.toastrService.success('Device added successfully','Register a device');
  }

  OnFetch(){
    this.deviceService.getDevicesFromServer();
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {DeviceService} from "../services/device.service";

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

 @Input() deviceName = '';
 @Input() deviceStatus = '';
 @Input() indexOfDevice = 0;
 @Input() id = 0;

  constructor(private deviceService : DeviceService) { }

    ngOnInit(): void {
  }

  getColor(){
    if (this.deviceStatus === 'On'){
      return 'green';
    } else if (this.deviceStatus === 'Off'){
      return 'red';
    }
  }

  switchOnOne(){
    this.deviceService.switchOnOne(this.indexOfDevice);
  }

  switchOffOne(){
    this.deviceService.switchOffOne(this.indexOfDevice);
  }
}

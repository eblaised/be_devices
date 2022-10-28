import { Component, OnInit } from '@angular/core';
import {DeviceService} from "../services/device.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-device',
  templateUrl: './single-device.component.html',
  styleUrls: ['./single-device.component.scss']
})
export class SingleDeviceComponent implements OnInit {
  name = 'device';
  status = 'status';

  constructor(private deviceService: DeviceService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    // @ts-ignore
    this.name = this.deviceService.getDeviceById(+id).name;
    // @ts-ignore
    this.status = this.deviceService.getDeviceById(+id).status;
  }

}

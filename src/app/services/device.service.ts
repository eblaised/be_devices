import {Subject} from 'rxjs'
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable()
export class DeviceService {
  deviceSubject = new Subject<any[]>();
  //private baseUrl ='https://bedevice-c7f4c-default-rtdb.firebaseio.com';

 private devices = [
              {id:1, name : 'Washing machine', status : 'On'},
             {id: 2, name : 'Printer', status : 'Off'},
              {id: 3, name : 'Television', status : 'On'},
             {id:4, name : 'Computer', status : 'Off'}
  ];

 constructor(private http: HttpClient) {
 }
  /**
   * The slice() method to emit a copy of this array
   */
 emitDeviceSubject(){
   this.deviceSubject.next(this.devices.slice());
 }

  /**
   * Search device by id
   * @param id
   */
  getDeviceById(id: number){
    const deviceById = this.devices.find(
      (deviceObject) =>{
        return deviceObject.id === id;
      }
    );
  return deviceById;
  }

  /**
   * Switch On all devices
   */
  switchOnAll(){
    for (let device of this.devices) {
      device.status='On';
    }
    this.emitDeviceSubject();
  }

  /**
   * Switch Off All devices
   */
  switchOffAll(){
    for (let device of this.devices) {
      device.status='Off';
    }
    this.emitDeviceSubject();
  }

  /**
   * Switch on one device
   * @param index
   */
  switchOnOne(index : number){
    this.devices[index].status = 'On';
    this.emitDeviceSubject();
  }

  /**
   * Switch Off on device
   * @param index
   */
  switchOffOne(index : number){
    this.devices[index].status = 'Off';
    this.emitDeviceSubject();
  }

  /**
   * Add device
   * @param name
   * @param status
   */
  addDevice(name: string, status: string){
   const  deviceObject = { id:0, name: '', status: '' };
   deviceObject.name = name;
   deviceObject.status = status;
   deviceObject.id = this.devices[(this.devices.length-1)].id + 1;

   this.devices.push(deviceObject);
   this.emitDeviceSubject();
  }

  saveDeviceToServer(){
    this.http.put(environment.baseUrl+'/devices.json', this.devices)
      //.subscribe((data)=>console.log(data))
      .subscribe({
          next:     (v) => console.log(v),
          error:    (e) => console.log('Backup error from the server '+ e),
          complete: () => console.info('complete')
        }
      );
  }
/*
  getDevicesFromServer(){
    this.http.get(this.baseUrl+'/devices')
      .subscribe({
        next: (data) =>{console.log(data)},
        error: (e) =>{console.log(e)},
        complete: ()=>{console.info('Complete')}
      });
  }*/

  getDevicesFromServer(){
    this.http.get<any>(environment.baseUrl)
      .subscribe({
        next: (response) =>{
          this.devices=response;
          this.emitDeviceSubject();
        },
       error: (error)=> console.log('Loading data from server '+ error)
        }
      );
  }

}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, interval, Subscription} from "rxjs";
import {ToastrService} from "ngx-toastr";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  seconds : number | undefined  ;
  counterSubscription: Subscription | undefined;

constructor(private toastr: ToastrService) {
}

  ngOnInit(): void {
  const counter = interval(1000);
   this.counterSubscription = counter.subscribe(
     (value: number)=>{
       this.seconds = value;
     }
   );
  }

ngOnDestroy(){
this.counterSubscription?.unsubscribe();
}


}

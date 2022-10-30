import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeviceComponent } from './device/device.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DeviceService} from "./services/device.service";
import { AuthComponent } from './auth/auth.component';
import { DeviceViewComponent } from './device-view/device-view.component';
import {AuthService} from "./services/auth.service";
import { SingleDeviceComponent } from './single-device/single-device.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AuthGuard} from "./services/auth-guard.service";
import { EditDeviceComponent } from './edit-device/edit-device.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import { UserListComponent } from './user-list/user-list.component';
import {UserService} from "./services/user.service";
import { NewUserComponent } from './new-user/new-user.component';
import {HttpClientModule} from "@angular/common/http";
import { AboutComponent } from './about/about.component';
import { OfferComponent } from './offer/offer.component';
import {OfferService} from "./services/offer.service";
import { OfferListComponent } from './offer-list/offer-list.component';
import { NewOfferComponent } from './new-offer/new-offer.component';


@NgModule({
  declarations: [
    AppComponent,
    DeviceComponent,
    AuthComponent,
    DeviceViewComponent,
    SingleDeviceComponent,
    PageNotFoundComponent,
    EditDeviceComponent,
    UserListComponent,
    NewUserComponent,
    AboutComponent,
    OfferComponent,
    OfferListComponent,
    NewOfferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,

    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      closeButton: true,
      progressBar: true
    })
  ],
  providers: [
    DeviceService,
    AuthService,
    AuthGuard,
    UserService,
    OfferService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DeviceViewComponent} from "./device-view/device-view.component";
import {AuthComponent} from "./auth/auth.component";
import {SingleDeviceComponent} from "./single-device/single-device.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {AuthGuard} from "./services/auth-guard.service";
import {EditDeviceComponent} from "./edit-device/edit-device.component";
import {UserListComponent} from "./user-list/user-list.component";
import {NewUserComponent} from "./new-user/new-user.component";

const routes: Routes = [
  {path: 'devices', canActivate: [AuthGuard], component: DeviceViewComponent},
  {path: 'devices/:id', canActivate: [AuthGuard], component: SingleDeviceComponent},
  {path: 'edit', canActivate: [AuthGuard], component: EditDeviceComponent},
  {path: 'users', component: UserListComponent},
  {path: 'new-user', component: NewUserComponent},
  {path: 'auth', component: AuthComponent},
  {path: '', component: DeviceViewComponent},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

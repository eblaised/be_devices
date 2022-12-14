import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from "../models/User.model";
import {Subscription} from "rxjs";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

  users: User[] ;
  userSubscription: Subscription;
  constructor(private userService: UserService) { }

    /**
     * As soon as this component is created, it will
     * subscribe to the subject of the service and make it emit
   */
  ngOnInit() {
    this.userSubscription = this.userService.userSubject.subscribe(
      (users: User[]) =>{
        this.users = users;
      }
    );
    this.userService.emitUsers();
  }

  /**
   * Destruction of the subscription during
   * destruction of the component
   */
  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}

import {User} from "../models/User.model";
import {Subject} from "rxjs";

export class UserService{

  userSubject = new Subject<User[]>();
  private users: User[] = [
    {
      firstName: 'Alphonse Audry',
      lastName: 'Mark Armel',
      email: 'test123@gmail.com',
      drinkPreference: 'Swifty',
      hobbies: [
        'Coding', 'Footing', 'Swimming'
      ]
    }
  ];

  /**
   * emit array copy of users
   */
  emitUsers(){
    this.userSubject.next(this.users.slice());
  }

  /**
   * Add User
   * @param user
   */
  addUser(user: User){
    this.users.push(user);
    this.emitUsers();
  }
}

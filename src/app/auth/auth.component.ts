import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authStatus = false;
  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.authStatus = this.authService.isAuth;
  }

// .then() poue réagir une fois que le callback est appelé
  OnSignIn(){
    this.authService.signIn().then(
      ()=>{
        console.log('User Logged !!!')
        this.authStatus = this.authService.isAuth;
        this.router.navigate(['devices']);
      }
    );
  }

  OnSignOut(){
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
    console.log('User disconnected')
  }
}

import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";
import {User} from "../models/User.model";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  /**
   * FormGroup is the form object that will correspond to the template form
   * FormBuilder creates form easily
    */
  userForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private toastrService: ToastrService,
              private router: Router) { }

  ngOnInit() {
    this.InitForm();
  }

  /**
   * Initialize form
   * Add Validators import to validate fields form
   * @constructor
   */
  InitForm(){
    this.userForm = this.formBuilder.group({
      firstName      : ['', Validators.required],
      lastName       : ['', Validators.required,],
      email          : ['', [Validators.required, Validators.email]],
      drinkPreference: ['', Validators.required],
      hobbies        : this.formBuilder.array([])

    });
  }

  /**
   * OnSubmitForm will create a new user
   * from the form information (initForm())
   */
  onSubmitForm(){
    const formValue = this.userForm.value;
    const newUser = new User(
      formValue['firstName'],
      formValue['lastName'],
      formValue['email'],
      formValue['drinkPreference'],
      //if hobbies is null or not null
      formValue['hobbies'] ? formValue['hobbies'] : []
    );
    this.userService.addUser(newUser);
    this.router.navigate(['/users']);
    this.toastrService.success('Device added successfully','Register a device');
  }

  /**
   * get FormArray hobbies
   * from the template
   */
  getHobbies(){
    return this.userForm.get('hobbies') as FormArray;
  }

  /**
   * Add a new hobby
   */
  onAddHobby(){
    const newHobbyControl = this.formBuilder.control('', Validators.required);
    this.getHobbies().push(newHobbyControl);
  }
}

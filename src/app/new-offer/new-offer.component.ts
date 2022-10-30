import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {Offer} from "../models/Offer.model";
import {OfferService} from "../services/offer.service";

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.component.html',
  styleUrls: ['./new-offer.component.scss']
})
export class NewOfferComponent implements OnInit {
  offerForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private offerService: OfferService,
              private toastrService: ToastrService,
              private router: Router) { }

  ngOnInit(): void {
    this.initForm()
  }

  /**
   * Initialize Form
   * @constructor
   */
  initForm(){
    this.offerForm = this.formBuilder.group({
      title       : ['', Validators.required],
      description : ['', Validators.required,]
     // available   : ['', Validators.required]
    });
  }

  /**
   * Submit form
   */
  onSubmitForm(){
    const formValue = this.offerForm.value;
    const newOffer = new Offer(
      formValue['title'],
      formValue['description']
      //formValue['available']
    );
    this.offerService.addOffer(newOffer);
    this.router.navigate(['/offers']);
    this.toastrService.success('Offer added successfully','Register an Offer');
  }
}

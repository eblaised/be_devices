import { Component, OnInit } from '@angular/core';
import {OfferService} from "../services/offer.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {Offer} from "../models/Offer.model";

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  offers : Offer[];

  constructor(private offerService: OfferService,
              private toastrService: ToastrService,
              private router: Router) { }

  ngOnInit() {
    this.offers = this.offerService.offers;
  }

  /**
   * Save offer or service to server
   */
  onSaveOffer(){
    this.offerService.saveOffer();
    this.toastrService.success('Device added successfully','Register a device');
    this.router.navigate(['/offers']);
  }

  /**
   * List of the Offers or services
   * @constructor
   */
  OnGetOffers() {
      this.offerService.getOffers();
  }

}

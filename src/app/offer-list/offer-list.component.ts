import { Component, OnInit } from '@angular/core';
import {OfferService} from "../services/offer.service";
import {ToastrService} from "ngx-toastr";
import {Offer} from "../models/Offer.model";

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.scss']
})
export class OfferListComponent implements OnInit {

  offers : Offer[] ;
  constructor(private offerService: OfferService,
              private toastrService: ToastrService) { }

  ngOnInit() {
    this.offers = this.offerService.offers;
  }


}

import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Offer} from "../models/Offer.model";

@Injectable()
export class OfferService{

  offers: Offer[] = [{
    //'id': 1,
    'title': 'Title Website 1',
    'description': 'With supporting text below as a natural lead-in to additional content.'
  },
    {
      //'id': 2,
      'title': 'Title Website 2',
      'description': 'With supporting text below as a natural lead-in to additional content. 2'
    },
    {
      //'id': 3,
      'title': 'Title Website 3',
      'description': 'With supporting text below as a natural lead-in to additional content. website 3'
    },
    {
     // 'id': 1,
      'title': 'Title Website 1',
      'description': 'With supporting text below as a natural lead-in to additional content.'
    }
  ];

  constructor(private http: HttpClient) {
  }

  /**
   * Save or register an offer or service
   */
  saveOffer(){
    this.http.put(environment.baseUrl+ '/offers.json', this.offers)
      .subscribe({
        next: (data) => console.log(data),
        error: (err) => console.log('Backup error '+ err),
        complete: () => console.info('Complete')
      })
  }

  /**
   * List of the offers or services
   */
  getOffers(){
    this.http.get<any>(environment.baseUrl)
      .subscribe({
        next: (response) => {
          this.offers = response;
        },
        error: (err) => console.log('Loading error '+ err)
        }

      )

  }

  /**
   * Add offer
   * @param offer
   */
  addOffer(offer: Offer) {
    this.offers.push(offer);
  }
}

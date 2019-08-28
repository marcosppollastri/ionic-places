import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[] = [
    // tslint:disable-next-line: max-line-length
    new Place('p1', 'Campfire at Chumbicha', 'This is a really nice place', 'https://greatplainsconservation.com/wp-content/uploads/2019/02/2019-great-plains-sapi-explorers-camp-12.jpg', 500),
    // tslint:disable-next-line: max-line-length
    new Place('p2', 'Talampaya adventure', 'Talampaya is great', 'https://www.welcomeargentina.com/paseos/visita-pn-talampaya/parque-nacional-talampaya-1.jpg', 500),
  ];

  getPlaces() {
    return [...this._places];
  }

  constructor() { }
}

import { Injectable } from '@angular/core';
import { Place } from './place.model';
import { DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of New York City.',
      '../assets/imgs/nyc.jpg',
      149.99,
      new Date('2024-01-01'),
      new Date('2030-12-31'),
      'u1'
    ),
    new Place(
      'p2',
      'L\'Amour Toujours',
      'A romantic place in Paris!',
      '../assets/imgs/paris.jpg',
      189.99,
      new Date('2024-01-01'),
      new Date('2030-12-31'),
      'u1'
    ),
    new Place(
      'p3',
      'The Foggy Palace',
      'Not your average city trip!',
      '../assets/imgs/sanf.jpg',
      99.99,
      new Date('2024-01-01'),
      new Date('2030-12-31'),
      'u1'
    ),
  ];
  get places() {
    return [...this._places];
  }
  getPlace(id: string) {
    return {...this._places.find(p => p.id === id)};
  }
  
  addPlace(title:string, description: string, price: number, dateFrom: Date, dateTo: Date) {
    const newPlace = new Place(
      Math.random().toString(),
      title,
      description,
      '../assets/imgs/nyc.jpg',
      price,
      dateFrom,
      dateTo,
      'u1',
    );
    this._places.push(newPlace);
    console.log(this._places);
  }
  updateOffer(placeId: string, title: string, description: string, price: number, dateFrom: Date, dateTo: Date) {
    const updatedPlaceIndex = this._places.findIndex(p1 => p1.id === placeId);
    console.log(updatedPlaceIndex);
    const oldPlace = this._places[updatedPlaceIndex];
    console.log(oldPlace);
    this._places[updatedPlaceIndex] = new Place(
      oldPlace.id,
      title,
      description,
      oldPlace.image,
      price,
      dateFrom,
      dateTo,
      oldPlace.userId
    )
    console.log(this._places[updatedPlaceIndex]);
  }
  RemoveOffer(id:string) {
    const position = this._places.findIndex(p => p.id === id);
    this._places.splice(position,1);
  }
constructor() { }
}
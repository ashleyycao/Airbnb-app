import { Injectable } from '@angular/core';
import { Booking } from './booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private _booking: Booking[] = [];

  get booking() {
    return [...this._booking];
  }

  addBooking(
    placeId: string,
    placeTitle: string,
    placeImage: string,
    firstName: string,
    lastName: string,
    guestNumber: number,
    dateFrom: Date,
    dateTo: Date
  ) { const newBooking = new Booking(
      Math.random().toString(),
      placeId,
      'u1',
      placeTitle,
      placeImage,
      firstName,
      lastName,
      guestNumber,
      dateFrom,
      dateTo
      );
    this._booking.push(newBooking);
    console.log(this._booking);
  }

  removeBooking(bookingId: string) {
    const position = this._booking.findIndex(
      p => p.bookingId === bookingId);
    this._booking.splice(position,1);
  }
  
  constructor() { }
}

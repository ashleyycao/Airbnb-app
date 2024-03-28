export class Booking {
    constructor(
        public bookingId: string,
        public placeId: string,
        public userId: string,
        public placeTitle: string,
        public placeImage: string,
        public firstName: string,
        public lastName: string,
        public guestNumer: number,
        public bookedFrom: Date,
        public bookedTo: Date
    ) {}
}
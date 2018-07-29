export class TripModel {
    name: string;
    city: string;
    country: string;
    fromDate: string;
    toDate: string;

    constructor(name, city, country, fromDate, toDate) {
        this.name = name;
        this.city = city;
        this.country = country;
        this.fromDate = fromDate;
        this.toDate = toDate;
    }
}

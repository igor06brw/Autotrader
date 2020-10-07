import { CarInterface } from './car.model';

export class Car implements CarInterface {
    manufacture?: String;
    model?: String;
    description?: String;
    price?: Number;
    year?: Number;
    mileage?: Number;

    constructor(manufacture?: String, model?: String, description?: String, price?: Number, year?: Number, mileage?: Number ) {
        this.manufacture = manufacture;
        this.model = model;
        this.description = description;
        this.price = price;
        this.year = year;
        this.mileage = mileage;
    }
}
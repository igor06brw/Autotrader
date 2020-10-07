import { CarInterface } from './car.model';

export class Car implements CarInterface {
    manufacture?: String;
    model?: String;
    description?: String;
    price?: Number;
    year?: Number;
    mileage?: Number;
    imageMain?: String;
    imageFront?: String;
    imageBack?: String; 

    constructor(manufacture?: String, model?: String, description?: String, price?: Number, year?: Number, mileage?: Number, imageMain?: String) {
        this.manufacture = manufacture;
        this.model = model;
        this.description = description;
        this.price = price;
        this.year = year;
        this.mileage = mileage;
        this.imageMain = imageMain;
    }
}
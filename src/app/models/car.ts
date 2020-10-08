import { CarInterface } from './car.model';

export class Car implements CarInterface {
    manufacture?: String;
    model?: String;
    price?: Number;
    year?: Number;
    mileage?: Number;
    description?: String;
    imageMain?: String;
    imageFront?: String;
    imageBack?: String; 
    imageThumbnail?: String;
}
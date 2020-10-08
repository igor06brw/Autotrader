import { Car } from './car';

const car1: Car = {
    manufacture: 'bmw', 
    model: 'series5', 
    price: 32999, 
    year: 2017, 
    mileage: 12345,
    description: 'bmw',
    imageMain: 'bmw',
    imageFront: 'bmw',
    imageBack: 'bmw', 
    imageThumbnail: '../../assets/bmw/thumbnails/bmw_thumbnail_1.jpg'
};
const car2: Car = {
    manufacture: 'bmw', 
    model: 'series5', 
    price: 36000, 
    year: 2018, 
    mileage: 999,
    description: 'bmw',
    imageMain: 'bmw',
    imageFront: 'bmw',
    imageBack: 'bmw', 
    imageThumbnail: '../../assets/bmw/thumbnails/bmw_thumbnail_2.jpg'
};
const car3: Car = {
    manufacture: 'bmw', 
    model: 'series5', 
    price: 45039, 
    year: 2016, 
    mileage: 78594,
    description: 'bmw',
    imageMain: 'bmw',
    imageFront: 'bmw',
    imageBack: 'bmw', 
    imageThumbnail: '../../assets/bmw/thumbnails/bmw_thumbnail_3.jpg'
};


export let CAR_COLLECTION = [car1, car2, car3]; 
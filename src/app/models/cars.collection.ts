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
const car4: Car = {
    manufacture: 'landrover', 
    model: 'evoque', 
    price: 34086, 
    year: 2019, 
    mileage: 9876,
    description: 'bmw',
    imageMain: 'bmw',
    imageFront: 'bmw',
    imageBack: 'bmw', 
    imageThumbnail: '../../assets/landrover/thumbnails/landrover_thumbnail_1.jpg'
};
const car5: Car = {
    manufacture: 'mercedesbenz', 
    model: 'eclass', 
    price: 51980, 
    year: 2015, 
    mileage: 4567,
    description: 'bmw',
    imageMain: 'bmw',
    imageFront: 'bmw',
    imageBack: 'bmw', 
    imageThumbnail: '../../assets/mercedes/thumbnails/mercedes_e_thumbnail_1.jpg'
};
const car6: Car = {
    manufacture: 'mercedesbenz', 
    model: 'eclass', 
    price: 3400, 
    year: 2020, 
    mileage: 111,
    description: 'bmw',
    imageMain: 'bmw',
    imageFront: 'bmw',
    imageBack: 'bmw', 
    imageThumbnail: '../../assets/mercedes/thumbnails/mercedes_e_thumbnail_2.jpg'
};

export let CAR_COLLECTION = [car1, car2, car3, car4, car5, car6]; 
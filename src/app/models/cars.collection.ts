import { Car } from './car';

const car1 = new Car('bmw', 'series3', 30000, 2015, 10000);
const car2 = new Car('bmw', 'series5', 10000, 2019, 5000);
const car3 = new Car('audi', 'q3', 20000, 2017, 15009);
const car4 = new Car('audi', 'q3', 20000, 2017, 15009);
const car5 = new Car('audi', 'q3', 20000, 2017, 15009);
const car6 = new Car('audi', 'q3', 20000, 2017, 15009);

export let CAR_COLLECTION = [car1, car2, car3, car4, car5, car6]; 
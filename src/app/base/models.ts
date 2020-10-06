interface Model {
    id: number,
    name: string;
}



const audi: Model[] = [
    { id: 0, name: "A1" },
    { id: 1, name: "A3" },
    { id: 2, name: "A4" },
    { id: 3, name: "A5" },
    { id: 4, name: "A6" },
    { id: 5, name: "A7" },
    { id: 6, name: "A8" },
]

const bmw: Model[] = [
    { id: 0, name: "Series 1" },
    { id: 1, name: "Series 2" },
    { id: 2, name: "Series 3" },
    { id: 3, name: "Series 4" },
    { id: 4, name: "Series 5" },
    { id: 5, name: "Series 6" },
    { id: 6, name: "Series 7" },
]

export const allModelsOfCars = [audi, bmw]
// Array<String> = ['A1', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8'];

// bmw: Array<String> = ['Series 1', 'Series 2','Series 3' ,'Series 4' ,'Series 5' ,'Series 6' ,'Series 7'];
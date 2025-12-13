const car1 = {
    brand: "Nissan",
    model: "Rogue",
    year: 2015
};
const car2 = {
    brand: "Mazda",
    model: "6",
    owner: 2010
};
const car3 = {
    ...car1,
    ...car2
};
console.log(car3);
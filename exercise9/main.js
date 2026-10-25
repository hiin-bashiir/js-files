let car = {
    make: "Toyota",
    model: "Landcruiser",
    year: 2015,
    start: function() {
        console.log("The car has started " + this.year);
    }
}
console.log(car.start());

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
const Car1 = new Car("Ford", 2014);
const Car2 = new Car("Audi", 2019);
console.log(
  Car2.name,
  "is",
  Car2.year - Car1.year,
  "years older than",
  Car1.name
);
var cars = [{
  make: "civic",
  price_per_day: 60
},{
  make: "BMW",
  price_per_day: 100
},{
  make: "BENZ",
  price_per_day: 80
},{
  make: "toyota",
  price_per_day: 50
}]

var affordableCars = [];

for (var i = 0; i < cars.length; i++){
  if (cars[i].price_per_day <= 75)
    affordableCars.push(cars[i])
}

console.log(JSON.stringify(affordableCars));
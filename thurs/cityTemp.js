function findCityTemp(arr) {
  temperaturesBelow70 = arr.filter(function(city) {
    if (city.temperature < 70)
      return city
  })
  console.dir(temperaturesBelow70)
  return temperaturesBelow70
}


var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];

findCityTemp(cities)

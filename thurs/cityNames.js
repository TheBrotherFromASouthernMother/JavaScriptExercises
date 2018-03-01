var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];


function getCityNames(arr) {
  cityNames = []
  arr.forEach(function(city) {
    cityNames.push(city.name)
  })
  console.dir(cityNames)
  return cityNames
}

getCityNames(cities)

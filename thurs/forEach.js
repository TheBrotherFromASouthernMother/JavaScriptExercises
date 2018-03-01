function foreach (arr, func) {
  for (var i = 0; i < arr.length; i ++) {
    func(arr[i])
  }
}

var arr = [
  { name: 'Bob' },
  { name:'Alice' },
  { name:'Joe' }
];

function greeting(name) {
  console.log("Hello " + name.name + "!")
}

foreach(arr, greeting)

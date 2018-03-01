function print(str) {
  return function() {
    console.log(str, "world!")
  }
}

var fun = print('hello');

function CallNTimes(num, func) {
  for (var i = 0; i < num; i ++) {
    func()
  }
}


CallNTimes(10, fun)

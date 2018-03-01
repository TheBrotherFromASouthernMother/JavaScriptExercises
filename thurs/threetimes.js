function print(str) {
  return function() {
    console.log(str)
  }
}

var fun = print("Hello World");

function Call3Times(func) {
  func();
  func();
  func();
}


Call3Times(fun)

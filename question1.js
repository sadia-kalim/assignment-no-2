// write a programme to covert temparature celsius to fahrenheit
//here we use formula (celsius*9/5)+32
function celsiustofahrenheit(celsius) { return (celsius * 9 / 5) + 32; }
;
var celsius = 25;
var fohrenheit = celsiustofahrenheit(celsius);
console.log("".concat(celsius, "degree celsius is equal to").concat(fohrenheit, "degree fahrenheit."));
//write a programme to convert temparature fahrenheit into celsius
//here we use fomula of convertance temparature into fahrenheit to celsius
// formula is (fahrenheit-32)*5/9
function fahrenheitintocelsius(fahrenheit) { return (fahrenheit - 32) * 5 / 9; }
;
var fahrenheit = 75;
var Celsius = fahrenheitintocelsius(fahrenheit);
console.log("".concat(fahrenheit, "fahrenheit is equale to ").concat(celsius, "degree centigrade."));

// write a programme to covert temparature celsius to fahrenheit
//here we use formula (celsius*9/5)+32
function celsiustofahrenheit (celsius:number){return (celsius*9/5)+32};
let celsius=25;
let fohrenheit=celsiustofahrenheit(celsius);
console.log(`${celsius}degree celsius is equal to${fohrenheit}degree fahrenheit.`);



//write a programme to convert temparature fahrenheit into celsius
//here we use fomula of convertance temparature into fahrenheit to celsius
// formula is (fahrenheit-32)*5/9
function fahrenheitintocelsius(fahrenheit:number){return (fahrenheit-32)*5/9};
let fahrenheit=75;
let Celsius=fahrenheitintocelsius(fahrenheit);
console.log(`${fahrenheit}fahrenheit is equale to ${celsius}degree centigrade.`);

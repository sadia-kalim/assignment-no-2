//a programme that converts given number into weeks and days
var A = 27; //total number of days
var B = 7; //days in one week
var quotent = (A / B >> 0); //quotent shows number of weeks
var remainder = (A % B); //remainder shows remaining days
console.log("27 days= ".concat(quotent, "weeks and").concat(remainder, "days."));

//write a programme that calculates the percentage
function percentage(attainmarks) { return (attainmarks / 1000) * 100; }
;
var attainmarks = 750;
var studentpercentage = percentage(attainmarks);
console.log("student has a percentage".concat(studentpercentage, "% at the marks").concat(attainmarks));

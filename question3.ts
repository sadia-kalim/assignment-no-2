//a programme that converts given number into weeks and days
let A:number=27;//total number of days
let B:number=7;//days in one week
let quotent=(A/B>>0);//quotent shows number of weeks
let remainder=(A%B);//remainder shows remaining days
console.log(`27 days= ${quotent}weeks and ${remainder}days.`);

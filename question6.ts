//write a programme that take a temparature and check it.
//if it is cold then suggest user to wear warm clothes.and so on.
let temparature:number=11;
let warm :any=(temparature>17&&temparature<40);
let cold:any=(temparature<17&&temparature>-50);
if(temparature=cold){console.log("it is cold, wear warm clothes." );}
if(temparature=warm){console.log("its warm, wear light clothes.");}

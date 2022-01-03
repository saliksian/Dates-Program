
let myMonth = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
function month_name(dt) {
  
  return myMonth[dt.getMonth()]
}
console.log(month_name(new Date("5/11/2022")));
console.log(month_name(new Date("2/11/2022")));
console.log(month_name(new Date("9/11/2022")));
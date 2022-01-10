function daysOfYear(yr) {
  let days = 365;
  if (yr%4==0) {
    days++;
    return days;
  }
  else{
    return days;
  }
}
console.log(daysOfYear(2015));
console.log(daysOfYear(2016));
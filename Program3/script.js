function getDaysInMonth(month,year) {
  return (new Date(year,month,0).getDate())
  
}
console.log(getDaysInMonth(2,2022));
console.log(getDaysInMonth(6,2022));
console.log(getDaysInMonth(12,2022));
function lastday(year, month) {
  return new Date(year, month, 0).getDate();
}
console.log(lastday(2022, 12));
console.log(lastday(2022, 11));
console.log(lastday(2022, 2));

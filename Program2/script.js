function curDay(a){
  let now = new Date();
  let month = now.getMonth();
  let year = now.getFullYear();
  let date = now.getUTCDate();

  console.log(`${month}${a}${date}${a}${year}`);
}

curDay('/');
curDay('-');
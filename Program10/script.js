let yesterday = (date)=>{
  let dt = new Date(date);
  return new Date(dt.setDate(dt.getDate()-1)).toString();
}

console.log(yesterday('Jan 6, 2022'));

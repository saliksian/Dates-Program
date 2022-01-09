function timeConvert(dt) {
  let hour =0;
  let mint =0;
  if (dt>=60) {
    mint = dt%60;
    hour = parseInt(dt/60);
    
  }
  else if (dt<60) {
    mint = dt;
  }
  else if (dt<0) {
    console.log("Enter valid input!!");
  }


  console.log(`${hour}hours and ${mint}mintues`);
}
timeConvert(200);
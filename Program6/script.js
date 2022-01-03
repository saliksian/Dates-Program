
function add_minutes(dt,mint) {
    return new Date(dt.getTime()+mint*60000);

}
console.log(add_minutes(new Date(2014,10,2), 60).toString());
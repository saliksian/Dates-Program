// Write a JavaScript function to test whether a date is a weekend.   

// Note : Use standard Saturday/Sunday definition of a weekend.
// Test Data :
// console.log(is_weekend('Nov 15, 2014'));
// console.log(is_weekend('Nov 16, 2014'));
// Output :
// "weekend"
// "weekend"


// let dt = new Date()
// console.log(dt.getDay());

function is_weekend(dt) {
    let date = new Date(dt);
    if (date.getDay() == 6 ||date.getDay() == 0) {
        return "Weekend"
        
    }
    else{
        return "Not Weekend"
    }

    
}

console.log(is_weekend('Nov 15, 2014'));
console.log(is_weekend('Nov 16, 2014'));
console.log(is_weekend('Nov 17, 2014'));
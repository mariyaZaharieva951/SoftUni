function division (num) {
let devision = 0;


    if (num % 10 === 0) {
        devision = 10;
    } else if (num % 7 === 0) {
        devision = 7;
    } else if (num % 6 === 0) {
        devision = 6;
    } else if (num % 3 === 0) {
        devision = 3;
    } else if (num % 2 === 0) {
        devision = 2;
    } 
    
    if (devision !== 0) {
console.log(`The number is divisible by ${devision}`);
    } else {console.log ("Not divisible")}  
}

division (1643)
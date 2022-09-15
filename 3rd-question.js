//Program to find the sum of multiples of 3 and 5 under 1000.

function upToNumber(number){
    let sum = 0 ;
    for(let i=0; i < number; i++){
        if((i % 3 === 0) || (i % 5 === 0)){
            sum = sum + i;
        }    
    }
    return sum;
}

let value = upToNumber(1000)
console.log(value);
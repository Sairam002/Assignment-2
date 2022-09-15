//Program to find the factorial of a prime number when given a range of numbers.

function primeNumberInGivenRange(startingNumber, endingNumber){
    let primeNumbersArray = [];
    let factorialValuesarray = [];

    for(let i = (startingNumber > 2 ? startingNumber : 2) ; i < endingNumber; i++){
        let primeOrNot = false;
        for(let j = 2; j < i; j++){
            if(i % j === 0){
                primeOrNot = true;
            }
        }

        if(primeOrNot !== true){
            primeNumbersArray.push(i);
        }
    }
    console.log("Prime Numbers in the range are");
    console.log(primeNumbersArray);

    for(let i = 0; i < primeNumbersArray.length; i++){
        let value = primeNumbersArray[i];
        let output = 1;
        for(let j = value; j > 0; j--){
            output = output * j;
        }
        factorialValuesarray.push(output);
    }

    console.log()
    console.log("Factorial numbers are above prime numbers are");
    console.log(factorialValuesarray);
}

primeNumberInGivenRange(1,10);

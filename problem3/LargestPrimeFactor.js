function largestPrimeFactor(number){
    var arrayFirst = [];
    var arraySecond = [];
    for(var i = 1; i<Number(number**0.5); i++){
        if(number % i == 0){
            arrayFirst.push(i);
            arraySecond.unshift(Number(number/i));
        }
    }
    var ourArray = arrayFirst.concat(arraySecond);
    for(var i = ourArray.length; i >= 0; i--){
        if(isPrime(ourArray[i])){
            console.log("Largest Prime Factor:",ourArray[i]);
            break;
        }
    }
}
function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}

largestPrimeFactor(600851475143);
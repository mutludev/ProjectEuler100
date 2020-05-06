let smallest_multiple = 0;
let test_cases = true;
while(test_cases){
    smallest_multiple += 20;
    test_cases = false;
    for(let i = 1; i<=20; i++){
        if(smallest_multiple%i != 0){
            test_cases = true;
        }
    }

}
console.log(smallest_multiple);

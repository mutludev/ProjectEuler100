let palindrome_checker = (number) => {
    return number.toString() == number.toString().split('').reverse().join('');
}


main_loop:
for(let first_number = 999; first_number >= 100; first_number--){
    for(let second_number = first_number; second_number >= 100; second_number--){
        if(palindrome_checker(first_number*second_number)){
            console.log("Numbers:"+first_number+"*"+second_number);
            console.log("Palindrome:"+first_number*second_number);
            break main_loop;
        }
    }
}

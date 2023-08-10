//* to compare among two string we should convert them into lowerCase.

let userName = 'blackPink';
let userInput = 'blackPinK';

if(userInput.toLowerCase() === userName.toLowerCase()){
    console.log('valid user')
}
else{
    console.log('invalid user')
}
let first = 5;
let second = 7;

// //* wrong approach
// first = second;
// second = first;

//* first approach
let temp = first;
first = second;
second = temp;

// //* second approach
// [first, second] = [second, first]

console.log(first, second);
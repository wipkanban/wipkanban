// @flow
let value = 42;

(value: 42);     // Works!
(value: number); // Works!

let newValue = (value: number);

console.log(newValue);

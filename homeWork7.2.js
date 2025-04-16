
const words = 'Happiness, Time, Task, Wonderful, Happiness, Joyful, Apple';
// const pattern = /[B-Z][b-z]{5,}/g;
const pattern = /\b[B-Zb-z]{6,}\b/g;

let matches = words.match(pattern); 

console.log(matches); 


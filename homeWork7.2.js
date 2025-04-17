
const words = 'Happiness, Time, Task, Wonderful, Happiness, Joyful, Apple';
const pattern = /\b[B-Zb-z]{6,}\b/g;

let matches = words.match(pattern); 

console.log(matches); 



const words = 'Happiness, Time, Task, Wonderful, Joyful Apple';
const pattern = /^[b-zB-Z]{6,}$/g; // Matches words with 6 or more characters, excluding 'a' and 'A'

let matches = words.match(pattern); 

console.log(matches); 


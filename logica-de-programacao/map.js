// map
const vetorString = ["10", "20", "30"];
const stringToInt = (x) => parseInt(x);

const vetorInt = vetorString.map(stringToInt);

console.log(vetorInt);

const vetor3 = vetorInt.map(x => x * x);
console.log(vetor3);

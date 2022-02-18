// exemplo 1
let vetor = [10, 20, 30, 40, 50, 60, 70, 80, 90];
vetor[2] = 60;
console.log(vetor[2]);

// exemplo 2
let vetor2 = [];
for(let i = 0; i < 10; i++){
    vetor2.push(i);
}
console.log(vetor2);

// exemplo 3
let vetor3 = [10, 20, 30, 40, 50, 60, 70, 80, 90];

for(let i = 0; i <= vetor3.length; i++){
    console.log(vetor3[i])
}

// for of
let vetor4 = [10, 20, 30, 40, 50, 60, 70, 80, 90];

for (let numero of vetor4){
    console.log(numero);
}

// for in
let vetor5 = [10, 20, 30, 40, 50, 60, 70, 80, 90];

for (let indice in vetor5){
    console.log(vetor5[indice]);
}

// matriz
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

for (let linha of matriz) {
    for (let elemento of linha){
        console.log(elemento);
    }
}

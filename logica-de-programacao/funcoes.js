// estrutura basica de uma funcao em javascript
function escreva(texto){
    console.log(texto);
}

escreva('hello world!');

escreva('outro exemplo de parametro');

// funcao com retorno
function somar(a, b){
    return a + b;
}

let resultado = somar(1, 3);
console.log(resultado);

// atribuindo uma funcao a uma variavel
const somar2 = function(a, b) {return a + b}
console.log(somar2(1, 3));

// arrow function
const somar3 = (a, b) => a + b;
console.log(somar3(1, 3));

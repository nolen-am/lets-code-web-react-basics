// exemplo 01
let estaSol = true;

if(estaSol) {
    console.log('vou pra praia');
}

else{
    console.log('vou pro campo');
}

// exemplo 02
let numero = 1;

if(numero > 0){
    console.log('Numero positivo');
}

else if(numero == 0){
    console.log('Numero 0');
}

else{
    console.log('Numero negativo');
}

// operador ternario
let numero = 3;
let paridade = numero % 2 == 0 ? 'par' : 'impar';
console.log('paridade');

// switch
let sinal = 'vermelho';

switch(sinal){
    case 'verde':
        console.log('pode passar');
        break;
    case 'amarelo':
        console.log('prestes a fechar, cuidado..');
        break;
    case 'vermelho':
        console.log('fechado, nao passe');
        break;
    default:
        console.log('sinal invalido');
}
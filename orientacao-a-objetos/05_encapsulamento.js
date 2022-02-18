// propriedades privadas da classe
class Quadrado {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
        let cor = 'blue';
    }
};

const quadrado = new Quadrado(3, 4);
quadrado.cor = 'red';
console.log(quadrado.cor);

// factory function
function criaQuadrado(base, altura) {
    let cor = 'blue';

    return {
        base,
        altura,
        getCor: function(){return cor;}
    };
}

const quadrado2 = criaQuadrado(3, 4);
quadrado2.cor = 'red';
console.log(quadrado2.getCor());

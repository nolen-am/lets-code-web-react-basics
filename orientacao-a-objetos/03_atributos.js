// restringindo tipo de atributos
class Quadrado {
    constructor(base, altura) {
        if(isNan(base) || isNan(altura)) throw "parâmetro não é um número";
        this.base = base;
        this.altura = altura;
        // atributo opcional:
        this.cor = undefined;
    }
};

const quadrado = new Quadrado('11', 'doze');
quadrado.cor = 'blue';
console.log(quadrado);

const quadradoValido = new Quadrado(11, 12)
console.log(quadradoValido);

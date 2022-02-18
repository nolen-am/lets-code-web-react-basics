class Quadrado {
    constructor(base, altura) {
        if(isNan(base) || isNan(altura)) throw "parâmetro não é um número";
        this.base = base;
        this.altura = altura;
        this.cor = undefined;
    }
    calculaArea(){
        return this.base * this.altura;
    }

    duplicaBase(){
        this.base = 2* this.base;
    }
};

const quadrado = new Quadrado(11, 12);
console.log(quadrado.calculaArea());
quadrado.duplicaBase();
console.log(quadrado.calculaArea());

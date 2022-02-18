class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

class Cidadao extends Pessoa {
    constructor(nome, idade, rg, cpf) {
        super(nome, idade);
        this.rg = rg;
        this.cpf = cpf;
    }
}

const cidadao1 = new Cidadao('Joao', 10, '0000', '11111');
console.log(cidadao1 instanceof Cidadao);

// definindo uma classe
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

// criando uma instância da classe
const pessoa1 = new Pessoa('lenon', 180)
pessoa1.idade = 360;
console.log(pessoa1.nome);
console.log(pessoa1.idade);

const pessoa2 = new Pessoa('nolen', 180);
console.log(pessoa2.nome)

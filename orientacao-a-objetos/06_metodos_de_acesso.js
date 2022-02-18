// class Quadrado{
  
//     constructor(lado, altura){
//       let cor = 'blue';
//       this.lado = lado;
//       this.altura = altura;
//       this.getCor = () => { return cor; }; // lendo atributo privado
//       this.setCor = (c) => cor = c; // alterando atributo privado
//     }
//   }

//   const quadrado = new Quadrado(3, 4);
//   console.log(quadrado.getCor());

//   quadrado.setCor('red');
//   console.log(quadrado.getCor());

class Quadrado  {
    constructor(lado,altura) {
        this._cor = 'blue';
        this.lado = lado;
        this.altura = altura;
    }

    get cor() { return this._cor; }
    set cor(cor) { this._cor = cor; }
}

const quadrado = new Quadrado(3, 4);
quadrado.cor = 'red';
console.log(quadrado.cor);

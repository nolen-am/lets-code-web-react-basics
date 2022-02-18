import React from "react";

class App4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nome: undefined, txtNome: "" };
    // this.changeName = this.changeName.bind(this);
  }

  // primeira solucao
  // changeName = function(event) {
  //     this.setState({nome: event.target.value})
  // }

  // segunda solucao
  changetxtName = (event) => {
    this.setState({ txtNome: event.target.value });
  };

  persistName = () => {
    this.setState({ nome: this.state.txtNome });
  };

  render() {
    const renderForm = () => {
      return (
        <div>
          Nome:
          <input
            type="text"
            value={this.state.nome}
            onChange={this.changetxtName}
          />
          <button onClick={this.persistName}>Salvar</button>
        </div>
      );
    };
    const renderText = () => {
      return (
        <div>
          <p>Olá, {this.state.nome}.</p>
        </div>
      );
    };
    return !this.state.nome ? renderForm() : renderText();
  }
}

export default App4;

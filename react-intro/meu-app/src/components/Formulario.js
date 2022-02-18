import React from 'react';

class Formulario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {nome: '', linguagem: 'JavaScript', tipo: 'programador', dedico: true, bio: ''};

        this.handleSubmit = (event) => {
            event.preventDefault();
            console.log(this.state);
        }
        
        this.changeName = (event) => {
            this.setState({nome: event.target.value});
        }

        this.changeSelect = (event) => {
            this.setState({linguagem: event.target.value});
        }

        this.changeRadio = (event) => {
            this.setState({tipo: event.target.value});
        }

        this.changeCheckbox = (event) => {
            this.setState({dedico: event.target.checked});
        }

        this.changeBio = (event) => {
            this.setState({bio: event.target.value});
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Nome: <input type="text" value={this.state.nome} onChange={this.changeName} />
                    </label>
                    <br />
                    <label >
                        Linguagem favotira
                        <select value={this.state.linguagem} onChange={this.changeSelect}>
                            <option>JavaScript</option>
                            <option>C</option>
                            <option>C++</option>
                        </select>
                    </label>
                    <br />
                    <label>
                       Sou:
                       <input type="radio" checked={this.state.tipo == 'programador'} onChange={this.changeRadio} value="programador" /> Programador
                       <input type="radio" checked={this.state.tipo == 'estudante'} onChange={this.changeRadio} value="estudante" /> Estudante
                    </label>
                    <br />
                    <label>
                        <input type="checkbox" checked={this.state.dedico} onChange={this.changeCheckbox} value="dedico"/>Dedico 8h semanais aos estudos.
                    </label>
                    <br />
                    <label>
                        Bio:
                        <textarea cols="50" value={this.state.bio} onChange={this.changeBio} ></textarea>
                    </label>
                    <input type="submit" value="Salvar" />
                </form>
            </div>
        );
    }
}

export default Formulario;
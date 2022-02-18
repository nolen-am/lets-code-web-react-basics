import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import App2 from './components/App2';
import App3 from './components/App3';
import App4 from './components/App4';
import App5 from './components/App5';
import {Lista, Item} from './components/Lista';
import Formulario from './components/Formulario';
import Hello from './components/Hello';
import AppHook from './components/AppHook';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <App2 title="Título" >
        Conteudo
    </App2>

    <App2 title="Título 2" >
        Conteudo 2
    </App2> */}

    {/* <Lista>
        Texto1
        <Item key={999} id="999" completo={false}>
            Teste1
        </Item>
        <Item key={998} id="998" completo={true}>
            Teste2
        </Item>
    </Lista> */}

    {
        <AppHook>
        </AppHook>
    }
    
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

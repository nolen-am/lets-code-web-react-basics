import React from 'react';

class App extends React.Component{
    render(){
        return (
            <div>
                <p>E ai rapeize</p>
                <p>E ai rapeize</p>
                <p>
                    {new Date().toLocaleDateString('pt-BR')}
                </p>
            </div>
        );
    }
}

export default App;

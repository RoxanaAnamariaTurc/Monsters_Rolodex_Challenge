import { Component } from 'react';


import logo from './logo.svg';
import './App.css';

class App extends Component
{
  constructor()
  {
    super();
    this.state = {
      name: 'Roxi'
    }
  }

  render()
  {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name}
          </p>
          <button onClick={() =>
          {
            this.setState(this.state.name === 'Roxi' ? { name: 'Andrei' } : { name: 'Roxi' });


            // if (this.state.name === 'Roxi')
            // {
            //   this.setState({ name: 'Andrei' })
            // } else
            // {
            //   this.setState({ name: 'Roxi' })
            // }

          }}>
            Change name
          </button>
        </header>
      </div>
    );

  }

}

export default App;

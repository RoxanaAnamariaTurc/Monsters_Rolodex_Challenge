import { Component } from 'react';


import logo from './logo.svg';
import './App.css';

class App extends Component
{
  constructor()
  {
    super();
    this.state = {
      monsters: [],
      searchField: ''

    }
  }

  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) =>
        response.json())
      .then((users) => this.setState(() =>
      {
        return { monsters: users }
      },
        () =>
        {
          console.log(this.state)
        }))
  }

  render()
  {
    const filteredMonsters = this.state.monsters.filter((monster) =>
    {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);

    });
    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search monsters' onChange={(event) =>
        {
          const searchField = event.target.value.toLocaleLowerCase();

          this.setState(() =>
          {
            return { searchField };
          })

        }} />
        {

          filteredMonsters.map((monster) =>
          {
            return (
              <div key={monster.id}>
                <h1> {monster.name}</h1>
              </div>
            )

          })
        }
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name.firstname} {this.state.name.lastname}, I work at {this.state.company}

          </p>
          <button onClick={() =>
          {
            this.setState(() =>
            {
              return {
                name: { firstname: 'Andrei', lastname: 'Neagoie' },
              }
              // }, () =>
              // {
              //   console.log(this.state)
            });
            // this.setState(this.state.name.firstname === 'Roxi' ? { name: { firstname: 'Andrei', lastname: 'Neagoie' } } : { name: { firstname: 'Roxi', lastname: 'Turc' } });


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
        </header> */}
      </div>
    );

  }

}

export default App;

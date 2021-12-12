import { Component } from 'react';
import CardList from './components/card-list/CardList.jsx'

import './App.css';

class App extends Component
{
  constructor()
  {
    super();
    this.state = {
      Monsters: [],
      searchField: ''
    };
  }

  //fetching list of monsters from placeholder API
  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(res => this.setState({ Monsters: res}))
  }

  render()
  {
    return (
      <div className="App">
        
        <CardList Monsters={this.state.Monsters}/>


      </div>
    );
  }
}

export default App;

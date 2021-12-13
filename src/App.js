import { Component } from 'react';
import CardList from './components/card-list/CardList.jsx'
import SearchBox from './components/search-box/search-box'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
    // this.handleChange = this.handleChange.bind(this);
    //BIND METHOD IS USED WHEN NOT USING ARROW FUNCTIOM
    // E.G handleChange(){
    // this.setState({ searchField: e.target.value });
    // }
  }

  //fetching list of monsters from placeholder API
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((res) => this.setState({ monsters: res }));
  }
// search filter event
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1 className="page-title">Monster Roledex</h1>
        <SearchBox
          placeholder="Search Monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;

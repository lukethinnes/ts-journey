import { Component } from 'react';
import './App.css';
import { ICharacter } from './types'
import CharacterCard from './CharacterCard'

interface IAppState {
  name: string;
  characters: ICharacter[];
}

class App extends Component <{}, IAppState> {

  constructor(props: {}) {
    super(props) 
    this.state = {
      name: 'Stacey',
      characters: []
    }
  } 

componentDidMount() {
  fetch('https://rickandmortyapi.com/character/api')
    .then(response => response.json())
    .then(({ results }) => this.setState({ characters: results as ICharacter[] }))
}

showCharacters = () => {
  return this.state.characters.map(character => {
    return <CharacterCard character={character} />
  })
}
  render() {
    return (
      <div className="App">
        <h1>Welcome {this.state.name}</h1>
      </div>
    );
  }
}

export default App;

import { Component } from 'react';
import './App.css';

interface IAppState {
  name: string;
  characters: {}[];
}

class App extends Component <{}, IAppState> {

  constructor(props: {}) {
    super(props) 
    this.state = {
      name: 'Stacey',
      characters: ["Joe"]
    }
  } 

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;

import { Component } from 'react';
import './App.css';

interface IAppState {
  name: string
  characters: {}[]
}

class App extends Component<{}, IAppState> {

  constructor(props: {}) {
    super(props)
    this.state = {
      name: 'Stacey',
      characters: [{name: 'yes'}, {age: 3}]
    }
  }

  render() {
    return (
      <div className='app'>
      </div>
    );
  }
}

export default App;

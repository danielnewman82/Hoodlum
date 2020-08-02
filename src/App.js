import React, {Component} from 'react';
import './App.css';
import Main from './components/Main';
import store from './redux/store';

class App extends Component {
  render() {
    return (
        <Main location={store.getState().location} />
      )
  }
}

export default App;

import React, {Component} from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Main from './components/Main';
import store from './redux/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main location={store.getState().location} />
      </Provider>
      )
  }
}

export default App;

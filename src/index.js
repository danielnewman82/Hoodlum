import React from 'react';
import App from './App';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

const initialState = {
  name: "Derp",
  sex: "Dude",
  level: 1,
  curHitPoints: 20,
  maxHitPoints: 20,
  cashInHand: 0,
  cashInBank: 0,
  weapon: " Fists",
  atkPower: 1,
  armor: " None",
  defPower: 1,
  outfit: "Shabby Urchin Gear",
  reputation: "Anonymous Nobody",
  repScore: 0, 
  location: "landing"
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ABOUT':
      return {
        location: state.location = "about"
      };
    case 'LANDING':
      return {
        location: state.location = "landing"
      };
    case 'STREET':
      return {
        location: state.location = "Out On The Street",
        level: state.level,
        cashInHand: state.cashInHand,
        curHitPoints: state.curHitPoints,
        maxHitPoints: state.maxHitPoints
      }
    default:
      return state;
  }
}

const store = createStore(reducer);

const Index = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

render(<Index />, document.getElementById('root'));

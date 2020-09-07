import React from 'react';
import App from './App';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
  name: "Derp",
  sex: "Dude",
  level: 3,
  xp: 0,
  curHitPoints: 20,
  maxHitPoints: 20,
  cashInHand: 0,
  cashInStash: 0,
  cashInBank: 0,
  weapon: " Fists",
  atkPower: 4,
  armor: " None",
  defPower: 2,
  outfit: "Shabby Urchin Gear",
  reputation: "Anonymous Nobody",
  repScore: 0, 
  location: "",
  pveFights: 15,
  pvpFights: 3,
  lockedOut: false
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'CHANGE_LOCATION':
      return {
        ...state, location: state.location = action.payload
    };
      
    case 'CHANGE_HP' :
      return {
      ...state, curHitPoints: state.curHitPoints + action.payload
    }

    case 'CHANGE_CASHINHAND' :
      return {
      ...state, cashInHand: state.cashInHand + action.payload
    }

    case 'CHANGE_CASHINBANK' :
      return {
      ...state, cashInBank : state.cashInBank + action.payload
    }

    case 'GAIN_XP' :
      return {
      ...state, xp: state.xp + action.payload
    }

    case 'CHANGE_LOCKOUT' :
      return {
        ...state, lockedOut: state.lockedOut = action.payload
    }

    case 'CHANGE_PVEFIGHTS' :
      return {
        ...state, pveFights: state.pveFights + action.payload
      }
    default:
      return state;
  }
}

const store = createStore(reducer);

// maybe someday I'll figure out how to make Auth0 redirect dispatch a Redux action...

const Index = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

render(<Index />, document.getElementById('root'));

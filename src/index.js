import React from 'react';
import App from './App';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

const initialState = {
  name: "Derp",
  sex: "Dude",
  level: 1,
  xp: 0,
  curHitPoints: 15,
  maxHitPoints: 20,
  cashInHand: 15,
  cashInStash: 0,
  cashInBank: 0,
  weapon: " Fists",
  atkPower: 4,
  armor: " None",
  defPower: 2,
  outfit: "Shabby Urchin Gear",
  reputation: "Anonymous Nobody",
  repScore: 0, 
  location: "landing"
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'CHANGE_LOCATION':
      return {
        location: state.location = action.payload,
        name: state.name,
        sex: state.sex,
        level: state.level,
        xp: state.xp,
        curHitPoints: state.curHitPoints,
        maxHitPoints: state.maxHitPoints,
        cashInHand: state.cashInHand,
        cashInStash: state.cashInStash,
        cashInBank: state.cashInBank,
        weapon: state.weapon,
        atkPower: state.atkPower,
        armor: state.armor,
        defPower: state.defPower,
        outfit: state.outfit,
        reputation: state.reputation,
        repScore: state.repScore
      };
    case 'CHANGE_HP' :
      return {
        location: state.location,
        name: state.name,
        sex: state.sex,
        level: state.level,
        xp: state.xp,
        curHitPoints: state.curHitPoints + action.payload,
        maxHitPoints: state.maxHitPoints,
        cashInHand: state.cashInHand,
        cashInStash: state.cashInStash,
        cashInBank: state.cashInBank,
        weapon: state.weapon,
        atkPower: state.atkPower,
        armor: state.armor,
        defPower: state.defPower,
        outfit: state.outfit,
        reputation: state.reputation,
        repScore: state.repScore
    }
    case 'CHANGE_CASHINHAND' :
      return {
        location: state.location,
        name: state.name,
        sex: state.sex,
        level: state.level,
        xp: state.xp,
        curHitPoints: state.curHitPoints,
        maxHitPoints: state.maxHitPoints,
        cashInHand: state.cashInHand + action.payload,
        cashInStash: state.cashInStash,
        cashInBank: state.cashInBank,
        weapon: state.weapon,
        atkPower: state.atkPower,
        armor: state.armor,
        defPower: state.defPower,
        outfit: state.outfit,
        reputation: state.reputation,
        repScore: state.repScore
    }
    case 'CHANGE_CASHINBANK' :
      return {
        ...state, cashInBank : state.cashInBank + action.payload
      }
    case 'GAIN_XP' :
      return {
        location: state.location,
        name: state.name,
        sex: state.sex,
        level: state.level,
        xp: state.xp + action.payload,
        curHitPoints: state.curHitPoints,
        maxHitPoints: state.maxHitPoints,
        cashInHand: state.cashInHand,
        cashInStash: state.cashInStash,
        cashInBank: state.cashInBank,
        weapon: state.weapon,
        atkPower: state.atkPower,
        armor: state.armor,
        defPower: state.defPower,
        outfit: state.outfit,
        reputation: state.reputation,
        repScore: state.repScore
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

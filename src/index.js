import React from 'react';
import App from './App';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';

const initialState = {
  /*
  fists : { buyPrice : 0, sellprice : 0, atkPower : 4 },
  pocketKnife : { buyPrice : 40, sellPrice : 10, atkPower : 7},
  baseballBat : { buyPrice : 60, sellPrice : 15, atkPower : 10},
  slingshot : { buyPrice : 80, sellPrice : 20, atkPower : 13},
  pelletRifle : { buyPrice : 100, sellPrice : 25, atkPower : 16},
  deuceDeuce : { buyPrice : 200, sellPrice : 50, atkPower: 20},
  clock17 : { buyPrice : 500, sellPrice : 200, atkPower: 25},
  bolt45 : { buyPrice : 800, sellPrice : 300, atkPower : 30},
  magnum : { buyPrice : 1200, sellPrice : 400, atkPower : 40},
  shotgun : { buyPrice : 1500, sellPrice : 500, atkPower : 50},
  uzi : { buyPrice : 2000, sellPrice : 750, atkPower : 60},
  boltRifle : { buyPrice : 3000, sellPrice : 1000, atkPower : 70},
  sks : { buyPrice : 4000, sellPrice : 1300, atkPower : 80},
  ar15 : { buyPrice: 5000, sellPrice : 1800, atkPower : 100},
  g3 : { buyPrice : 6000, sellPrice : 2500, atkPower : 120},
  aug : { buyPrice : 8000, sellPrice : 3000, atkPower : 150},
  minimi : { buyPrice : 10000, sellPrice : 4000, atkPower : 180},
 */

}

function reducer(state = initialState, action) {
  switch(action.type) {      
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
    
    case 'CHANGE_WEAPON' :
      return {
        ...state, weapon: state.weapon = action.payload
      }

    case 'CHANGE_TAGSTODAY' :
      return {
        ...state, tagsToday: state.tagsToday + action.payload
      }

    case 'CHANGE_EMAIL' :
      return {
        ...state, email: state.email = action.payload
      }

    case 'CHANGE_PASSWORD' :
      return {
        ...state, password: state.password = action.payload
      }
    
    case 'CHANGE_NAME' :
      return {
        ...state, name: state.name = action.payload
      }
      
    case 'GET_CHARDATA' :
      return action.payload;
    
    case 'LOGOUT' :
      return state = initialState;

    default:
      return state;
  }
}

const store = createStore(reducer);

const Index = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

render(<Index />, document.getElementById('root'));

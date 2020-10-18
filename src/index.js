import React from 'react';
import App from './App';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import Auth0ProviderWithHistory from './auth0-provider-with-history';

const initialState = {
  name: "Trap God",
  sex: "Dude",
  level: 1,
  xp: 0,
  curHitPoints: 20,
  maxHitPoints: 20,
  cashInHand: 0,
  cashInStash: 0,
  cashInBank: 0,
  weapon: { name: " fists", sellPrice : 0, atkPower : 4},
  armor: { name: " none", sellPrice : 0, defPower : 2},
  outfit: "Shabby Urchin Gear",
  reputation: "Anonymous Nobody",
  repScore: 0, 
  location: "",
  pveFights: 15,
  pvpFights: 3,
  lockedOut: false,
  tagsToday: 3,

/*   fists : { buyPrice : 0, sellprice : 0, atkPower : 4 },
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
  bazooka : { buyPrice : 15000, sellPrice : 6000, atkPower : 200}, */

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
    
    case 'CHANGE_WEAPON' :
      return {
        ...state, weapon: state.weapon = action.payload
      }
    case 'CHANGE_TAGSTODAY' :
      return {
        ...state, tagsToday: state.tagsToday + action.payload
      }

    default:
      return state;
  }
}

const store = createStore(reducer);

const Index = () => (
  <BrowserRouter>
    <Auth0ProviderWithHistory>
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0ProviderWithHistory>
  </BrowserRouter>
);

render(<Index />, document.getElementById('root'));

import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {}

const persistConfig = {
  key: 'root',
  storage,
/*   transforms: [
    encryptTransform({
      secretKey: key,
      onError: function (error) {
        // Handle the error.
      },
    }),
  ], */
}

const persistedReducer = persistReducer(persistConfig, reducer);

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

export let store = createStore(persistedReducer);
export let persistor = persistStore(store);
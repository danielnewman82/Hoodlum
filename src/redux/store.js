import { createStore } from 'redux';
import reducer from '../redux/reducer'

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
};

const store = createStore(reducer, initialState);

export default store
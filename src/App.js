import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Landing from './components/Landing';
import About from './components/About';
import Street from './components/Street';
import TheTrack from './components/TheTrack';
import CharSheet from './components/CharSheet';
import WeaponShop from './components/WeaponShop/WeaponShop';
import ArmorShop from './components/ArmorShop';
import Hospital from './components/Hospital';
import Bank from './components/Bank';
import GraffitiWall from './components/GraffitiWall';
import Gym from './components/Gym/Gym';
import Club from './components/Club';
import PassedOut from './components/PassedOut';
import SignUp from "./components/SignUp";

function mapStateToProps(state) {
  return {state};
}

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/street">
        <Street />
      </Route>
      <Route path="/theTrack">
        <TheTrack />
      </Route>
      <Route path="/charSheet">
        <CharSheet />
      </Route>
      <Route path="/weaponShop">
        <WeaponShop />
      </Route>
      <Route path="/armorShop">
        <ArmorShop />
      </Route>
      <Route path="/hospital">
        <Hospital />
      </Route>
      <Route path="/bank">
        <Bank />
      </Route>
      <Route path="/graffitiWall">
        <GraffitiWall />
      </Route>
      <Route path="/gym">
        <Gym />
      </Route>
      <Route path="/club">
        <Club />
      </Route>
      <Route path="/passedOut">
        <PassedOut />
      </Route>
    </Switch>
    )
}

export default connect(mapStateToProps)(App)
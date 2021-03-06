import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Landing from './components/Landing';
import About from './components/About';
import Street from './components/Street';
import TheTrack from './components/TheTrack/TheTrack';
import CharSheet from './components/CharSheet';
import WeaponShop from './components/WeaponShop/WeaponShop';
import ArmorShop from './components/ArmorShop';
import Hospital from './components/Hospital/Hospital';
import Bank from './components/Bank';
import GraffitiWall from './components/GraffitiWall';
import Gym from './components/Gym/Gym';
import Club from './components/Club';
import PassedOut from './components/PassedOut';
import SignUp from "./components/SignUp";
import withAuth from './withAuth';
import Lockout from './components/Lockout';

function mapStateToProps(state) {
  return {state};
}

function App() {
  
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/about" component={About} />
      <Route path="/signup" component={SignUp} />
      <Route path="/lockout" component={withAuth(Lockout)} />
      <Route path="/street" component={withAuth(Street)} />
      <Route path="/theTrack" component={withAuth(TheTrack)} />
      <Route path="/charSheet" component={withAuth(CharSheet)} />
      <Route path="/weaponShop" component={withAuth(WeaponShop)} />
      <Route path="/armorShop" component={withAuth(ArmorShop)} />
      <Route path="/hospital" component={withAuth(Hospital)} />
      <Route path="/bank" component={withAuth(Bank)} />
      <Route path="/graffitiWall" component={withAuth(GraffitiWall)} />
      <Route path="/gym" component={withAuth(Gym)} />
      <Route path="/club" component={withAuth(Club)} />
      <Route path="/passedOut" component={withAuth(PassedOut)} />
    </Switch>
    )
}

export default connect(mapStateToProps)(App)
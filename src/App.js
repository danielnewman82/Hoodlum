import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Landing from './components/Landing';
import About from './components/About';
import Header from './components/Header';
import Street from './components/Street';
import TheTrack from './components/TheTrack';
import CharSheet from './components/CharSheet';
import WeaponShop from './components/WeaponShop/WeaponShop';
import ArmorShop from './components/ArmorShop';
import Hospital from './components/Hospital';
import Bank from './components/Bank';
import GraffitiWall from './components/GraffitiWall';
import Gym from './Gym/Gym';
import Club from './components/Club';
import PassedOut from './components/PassedOut';

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
      <Route path="/street">
        <Header />
        <Street />
      </Route>
      <Route path="/theTrack">
        <Header />
        <TheTrack />
      </Route>
      <Route path="/charSheet">
        <Header />
        <CharSheet />
      </Route>
      <Route path="/weaponShop">
        <Header />
        <WeaponShop />
      </Route>
      <Route path="/armorShop">
        <Header />
        <ArmorShop />
      </Route>
      <Route path="/hospital">
        <Header />
        <Hospital />
      </Route>
      <Route path="/bank">
        <Header />
        <Bank />
      </Route>
      <Route path="/graffitiWall">
        <Header />
        <GraffitiWall />
      </Route>
      <Route path="/gym">
        <Header />
        <Gym />
      </Route>
      <Route path="/club">
        <Header />
        <Club />
      </Route>
      <Route path="/passedOut">
        <PassedOut />
      </Route>
    </Switch>
    )
}

export default connect(mapStateToProps)(App)
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Landing from './components/Landing';
import About from './components/About';
import Header from './components/Header';
import Street from './components/Street';
import CharSheet from './components/CharSheet';
import WeaponShop from './components/WeaponShop';
import Bar from './components/Bar';
import TheTrack from './components/TheTrack';
import Hospital from './components/Hospital';
import Bank from './components/Bank';
import Level1Encounters from './components/Level1Encounters';
import GraffitiWall from './components/GraffitiWall';

function mapStateToProps(state) {
  return {state};
}

class App extends Component {
  render() {
    if (this.props.state.location === "landing") {
      return <Landing />
    }
    if (this.props.state.location === "about") {
      return <About />
    }
    if (this.props.state.location === "Out On The Street") {
      return (
        <Fragment>
        <Header />
        <Street />
        </Fragment>
      )
    }
    if (this.props.state.location === "Spider's Gun Shop") {
      return (
        <Fragment>
        <Header />
          <WeaponShop />
        </Fragment>
      )
    }
    if (this.props.state.location === "Your Stats") {
      return (
        <Fragment>
        <Header />
          <CharSheet  />
        </Fragment>
      )
    }
    if (this.props.state.location === "At The Bar") {
      return (
        <Fragment>
        <Header />
        <Bar />
        </Fragment>
      )
    }
    if (this.props.state.location === "Looking For Trouble") {
      return (
        <Fragment>
        <Header />
          <TheTrack />
        </Fragment>
      )
    }
    if (this.props.state.location === "At The Hospital") {
      return (
        <Fragment>
          <Header />
          <Hospital />
        </Fragment>
      )
    }
    if (this.props.state.location === "In A Street Fight" && this.props.state.level === 1) {
      return (
        <Fragment>
          <Header />
          <Level1Encounters />
        </Fragment>
      )
    }
    if (this.props.state.location === "The Credit Union") {
      return (
        <Fragment>
          <Header />
          <Bank />
        </Fragment>
      )
    }
    if (this.props.state.location === "The Graffiti Wall") {
      return (
        <Fragment>
          <Header />
          <GraffitiWall />
        </Fragment>
      )
    }
  }
}

export default connect(mapStateToProps)(App)
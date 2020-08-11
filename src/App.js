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

function mapStateToProps(state) {
  return {
    location: state.location
  };
}

class App extends Component {
  render() {
    if (this.props.location === "landing") {
      return <Landing />
    }
    if (this.props.location === "about") {
      return <About />
    }
    if (this.props.location === "Out On The Street") {
      return (
        <Fragment>
        <Header state/>
        <Street />
        </Fragment>
      )
    }
  }
}

export default connect(mapStateToProps)(App)
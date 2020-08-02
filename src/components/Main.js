import React, { Component, Fragment } from 'react';
import Landing from './Landing';
import About from './About';
import Header from './Header';
import Street from './Street';
/* import CharSheet from './CharSheet';
import WeaponShop from './WeaponShop';
import Bar from './Bar';
import TheTrack from './TheTrack'; */

class Main extends Component {
    render() {
        if (this.props.location === "landing") {
            return <Landing />
        }
        if (this.props.location === "about") {
            return <About />
        }
        if (this.props.location === "street") {
            return (
                <Fragment>
                <Header />
                <Street />
                </Fragment>
            )
        }
    }
}

export default Main;
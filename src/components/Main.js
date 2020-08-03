import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Landing from './Landing';
import About from './About';
import Header from './Header';
import Street from './Street';
import store from '../redux/store';
import { changeLocation } from '../redux/ActionCreators'
/* import CharSheet from './CharSheet';
import WeaponShop from './WeaponShop';
import Bar from './Bar';
import TheTrack from './TheTrack'; */

function mapStateToProps(state) {
    return store    
}

const mapDispatchToProps = {
        changeLocation
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Main);
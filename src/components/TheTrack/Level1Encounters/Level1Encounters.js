import React, { Component } from 'react';
import { connect } from 'react-redux';
import Mob from './Mob'

function mapStateToProps(state) {
    return {state};
  }

class Level1Encounters extends Component {
    render() {
/*         var encounterNum = (Math.floor(Math.random() * 50)); */
            return <Mob />
/*         if (encounterNum < 50 && yourTurnResults === false) {
            return <SmallerKid />
        } */
    }
}

export default connect(mapStateToProps)(Level1Encounters);
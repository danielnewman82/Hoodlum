import React, { Component } from 'react';
import { connect } from 'react-redux';
import Crackhead from './Level1Encounters/Crackhead'

function mapStateToProps(state) {
    return {state};
  }

class Level1Encounters extends Component {
    render() {
/*         var encounterNum = (Math.floor(Math.random() * 50)); */
            return <Crackhead flee={this.props.flee}/>
/*         if (encounterNum < 50 && yourTurnResults === false) {
            return <SmallerKid />
        } */
    }
}

export default connect(mapStateToProps)(Level1Encounters);
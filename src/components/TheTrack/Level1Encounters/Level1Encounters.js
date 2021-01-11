import React, { Component } from 'react';
import { connect } from 'react-redux';
import SmallerKid from './SmallerKid';
import Crackhead from './Crackhead';
import LittleDog from './LittleDog';
import Assault0 from './Assault0';

function mapStateToProps(state) {
    return {state};
  }

class Level1Encounters extends Component {
    constructor(props) {
        super(props);
        this.state = {yourTurnResults : false}
    }
    render() {
        if (this.props.state.xp > 100 && this.state.yourTurnResults === false && this.props.state.assault0 != true) {
            return <Assault0 />
        } else if (this.props.state.cashInHand > 20 && this.state.yourTurnResults === false && this.props.state.beggar0 === false) {
            return <Beggar0 />
        } else if (this.props.encounterNum < 33 && this.state.yourTurnResults === false) {
            return <SmallerKid />
        } else if (this.props.encounterNum >= 33 && this.props.encounterNum < 67 && this.state.yourTurnResults === false) {
            return <Crackhead />
        } else if (this.props.encounterNum >= 67 && this.state.yourTurnResults === false) {
            return <LittleDog />
        }
    }
}

export default connect(mapStateToProps)(Level1Encounters);
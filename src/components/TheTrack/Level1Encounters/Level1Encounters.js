import React, { Component } from 'react';
import { connect } from 'react-redux';
import SmallerKid from './SmallerKid';
import Crackhead from './Crackhead';
import LittleDog from './LittleDog';
import Assault0 from './Assault0';
import MutantRat from './MutantRat';

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
        } else if (this.props.state.cashInHand >= 5 && this.state.yourTurnResults === false && this.props.state.beggar0 === false) {
            return <Beggar0 />
        } else if (this.props.encounterNum < 25 && this.state.yourTurnResults === false) {
            return <SmallerKid combat={this.props.combat} />
        } else if (this.props.encounterNum >= 25 && this.props.encounterNum < 50 && this.state.yourTurnResults === false) {
            return <Crackhead combat={this.props.combat} />
        } else if (this.props.encounterNum >= 50 && this.props.encounterNum < 75 && this.state.yourTurnResults === false) {
            return <LittleDog combat={this.props.combat} />
        } else if (this.props.encounterNum >= 75 && this.state.yourTurnResults === false) {
            return <MutantRat combat={this.props.combat} />
        }
    }
}

export default connect(mapStateToProps)(Level1Encounters);
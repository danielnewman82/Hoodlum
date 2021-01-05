import React, { Component } from 'react';
import { connect } from 'react-redux';
import SmallerKid from './SmallerKid';
import Crackhead from './Crackhead';

function mapStateToProps(state) {
    return {state};
  }

class Level1Encounters extends Component {
    constructor(props) {
        super(props);
        this.state = {yourTurnResults : false}
    }
    render() {
        if (this.props.encounterNum < 50 && this.state.yourTurnResults === false) {
            return <SmallerKid />
        } else if (this.props.encounterNum >= 50 && this.state.yourTurnResults === false) {
            return <Crackhead />
        }
    }
}

export default connect(mapStateToProps)(Level1Encounters);
import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {state};
  }

class Mob extends Component {
    constructor(props) {
        super(props);
        this.state = { turnResults : false, mobHP : 12, 
                        damageDealt : 0, 
                        damageTaken : 0,
                        fightWon : false,
                        fightLost: false,
                        cashGained: 0,
                        xpGained: 0,
                        flipFlop: false }
        this.fight = this.fight.bind(this)
        this.resolution = this.resolution.bind(this)
    }
    
    walkTheTrack = () => {
        this.props.dispatch({ type: 'CHANGE_LOCATION', payload: "Looking For Trouble" })
    }
    
    fight() {
        this.setState({ turnResults : true,
                        damageDealt : (Math.ceil(this.props.state.atkPower / 2)) + (Math.ceil(Math.random() * (this.props.state.atkPower / 2))),
                        damageTaken : (Math.max(0, (Math.ceil(Math.random() * 4) - this.props.state.defPower))),
                    })
        this.setState({ mobHP : this.state.mobHP - this.state.damageDealt })
        this.props.dispatch({ type: 'CHANGE_HP', payload: -this.state.damageTaken})
        if (this.state.mobHP - this.state.damageDealt <= 0) {
            this.setState({ turnResults : false, fightWon : true, cashGained : Math.ceil(Math.random() * 16) + 16,
                            xpGained : Math.ceil((Math.random() * 6) + 4) })
            this.props.dispatch({ type: 'CHANGE_CASHINHAND', payload: this.state.cashGained})
            this.props.dispatch({ type: 'GAIN_XP', payload: this.state.xpGained})
        }
        if (this.props.state.curHitPoints - this.state.damageTaken <= 0) {
            this.setState({ turnResults : false, fightLost : true, cashGained : -(this.props.state.cashInHand * 0.5) })
            this.props.dispatch({ type: 'CHANGE_CASHINHAND', payload: this.state.cashGained})
        }
        this.setState({ flipFlop : !this.state.flipFlop })
    }

    resolution() {
        if (this.state.fightWon === true) {
            this.setState({ cashGained : Math.ceil(Math.random() * 4),
                            xpGained : Math.ceil((Math.random() * 5) * 2) })
            this.props.dispatch({ type: 'CHANGE_CASHINHAND', payload: this.state.cashGained})
            this.props.dispatch({ type: 'GAIN_XP', payload: this.state.xpGained})
            this.props.dispatch({ type: 'CHANGE_LOCATION', payload: "Looking For Trouble"})
        }
        if (this.state.fightLost === true) {
            this.setState({ turnResults : false, fightLost : true, cashGained : -(this.props.state.cashInHand * 0.5) })
            this.props.dispatch({ type: 'CHANGE_CASHINHAND', payload: this.state.cashGained})
            this.props.dispatch({ type: 'CHANGE_LOCATION', payload: "Looking For Trouble"})
        }
    }

    render() {
    if (this.state.turnResults === true) {
        return (
            <Container>
                <Row>
                    <Col>
                        Your HP: <span id="hitPoints">{this.props.state.curHitPoints - this.state.damageTaken}</span>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        mob's HP: {this.state.mobHP - this.state.damageDealt}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        You hit the mob for {this.state.damageDealt}! He hits you back for {this.state.damageTaken}!
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <button onClick={this.fight}>Attack!</button>
                    </Col>
                    <Col>
                        <button onClick={this.walkTheTrack}>Punk Out And Run</button>
                    </Col>
                </Row>
            </Container>
        )
    } 
    if (this.state.turnResults === false && this.state.fightWon === true) {
        return (
            <Container>
                <Row>
                    <Col>
                        You won! You roll your victim for <span id="cash">${this.state.cashGained}</span>, and
                        gain {this.state.xpGained} experience points for mercilessly beating their ass in the street.
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <button onClick={this.resolution}>Back To The Track</button>
                    </Col>
                </Row>
            </Container>
        )
    }
    if (this.state.turnResults === false && this.state.fightLost === true) {
        return (
        <Container>
            <Row>
                <Col>
                    You just got your ass kicked by a mob. They roll your pockets for <span id="cash">
                    ${this.props.state.cashInHand * 0.5}</span> before you can crawl away, battered and bloody.
                </Col>
            </Row>
            <Row>
                <Col>
                    <button onClick={this.resolution}>Back To The Track</button>
                </Col>
            </Row>
        </Container>
        )
    }
    return (
        <Container>
            <Row>
                <Col>
                    Your HP: <span id="hitPoints">{this.props.state.curHitPoints}</span>
                </Col>
            </Row>
            <Row>
                <Col>
                    Mob's HP: {this.state.mobHP}
                </Col>
            </Row>
            <Row>
                <Col>
                    A mob shuffles out of the cut and accosts you! What do you do?
                </Col>
            </Row>
            <Row>
                <Col>
                    <button onClick={this.fight}>Attack!</button>
                </Col>
                <Col>
                    <button onClick={this.walkTheTrack}>Punk Out And Run</button>
                </Col>
            </Row>
        </Container>
        )
    }
}

export default connect(mapStateToProps)(Mob)
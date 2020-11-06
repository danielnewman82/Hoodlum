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
                        fightResults : null,
                        cashGained: 0,
                        xpGained: 0,
                        flipFlop: false }
        this.fight = this.fight.bind(this)
        this.resolution = this.resolution.bind(this)
    }
    
    walkTheTrack = () => {
        this.props.dispatch({ type: 'CHANGE_LOCATION', payload: "Looking For Trouble" })
    }

    flee = () => {
        this.props.dispatch({ type: 'CHANGE_LOCATION', payload: "Looking For Trouble" })
        this.props.dispatch({ type: 'CHANGE_PVEFIGHTS', payload: -1 })
    }
    
    fight() {
        //calculate damage dealt and taken this round
        this.setState({ turnResults : true,
                        damageDealt : (Math.ceil(this.props.state.weapon.atkPower / 2)) + (Math.ceil(Math.random() * 
                        (this.props.state.weapon.atkPower / 2))),
                        damageTaken : (Math.max(0, (Math.ceil(Math.random() * 4) - this.props.state.armor.defPower))),
                    })
        // subtract damage from mob and player HP totals
        this.setState({ mobHP : this.state.mobHP - this.state.damageDealt })
        this.props.dispatch({ type: 'CHANGE_HP', payload: -this.state.damageTaken})
        // if mob HP reaches 0 first, give cash and XP
        if (this.state.mobHP - this.state.damageDealt <= 0) {
            this.setState({ turnResults : false, fightResults : "win", cashGained : Math.ceil(Math.random() * 16) + 4,
                            xpGained : Math.ceil((Math.random() * 6) + 4) })
            this.props.dispatch({ type: 'CHANGE_CASHINHAND', payload: this.state.cashGained})
            this.props.dispatch({ type: 'GAIN_XP', payload: this.state.xpGained})
        }
        // if player HP reaches 0 first, subtract half from cash in hand
        if (this.props.state.curHitPoints - this.state.damageTaken <= 0) {
            this.setState({ turnResults : false, fightResults : "lose", cashGained : -(this.props.state.cashInHand * Math.ceil(0.5)) })
            this.props.dispatch({ type: 'CHANGE_CASHINHAND', payload: this.state.cashGained})
            this.props.dispatch({ type: 'CHANGE_LOCKOUT', payload: true })
        }
        // this guy exists solely as a workaround, so React will render current HP totals
        this.setState({ flipFlop : !this.state.flipFlop })
    }

    resolution() {
        if (this.state.fightResults === "win") {
            this.setState({ cashGained : Math.ceil(Math.random() * 4),
                            xpGained : Math.ceil((Math.random() * 5) * 2) })
            this.props.dispatch({ type: 'CHANGE_CASHINHAND', payload: this.state.cashGained })
            this.props.dispatch({ type: 'GAIN_XP', payload: this.state.xpGained })
            this.props.dispatch({ type: 'CHANGE_LOCATION', payload: "Looking For Trouble" })
            this.props.dispatch({ type: 'CHANGE_PVEFIGHTS', payload: -1 })
        }
        if (this.state.fightResults === "lose") {
            this.setState({ turnResults : false, 
                            cashGained : (Math.ceil(this.props.state.cashInHand * 0.5)) })
            this.props.dispatch({ type: 'CHANGE_CASHINHAND', payload: (this.state.cashGained) })
            this.props.dispatch({ type: 'CHANGE_LOCATION', payload: "landing" })
        }
    }

    render() {
    if (this.props.state.pveFights <= 0) {
        return (
            <Container>
                <Row>
                    <Col>
                        <h3>Looking For Trouble</h3>
                    </Col> 
                </Row>
                <Row>
                    <hr />
                </Row>
                <Row>
                    <Col>
                        You are too tired to go starting shit with anyone, right now. Chill out, get some rest, and
                        try again tomorrow.
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <button onClick={this.walkTheTrack}>Go Do Something More Constructive</button>
                    </Col>
                </Row>
            </Container>
        )
    }
    if (this.state.turnResults === true && this.state.damageTaken > 0) {
        return (
            <Container>
                <Row>
                    <Col>
                        <h3>In A Street Fight</h3>
                    </Col> 
                </Row>
                <Row>
                    <hr />
                </Row>
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
                        <button onClick={this.flee}>Punk Out And Run</button>
                    </Col>
                </Row>
            </Container>
        )
    } 
    if (this.state.turnResults === true && this.state.damageTaken <= 0) {
        return (
            <Container>
                <Row>
                    <Col>
                        <h3>In A Street Fight</h3>
                    </Col> 
                </Row>
                <Row>
                    <hr />
                </Row>
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
                        You hit the mob for {this.state.damageDealt}! He misses you completely!
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <button onClick={this.fight}>Attack!</button>
                    </Col>
                    <Col>
                        <button onClick={this.flee}>Punk Out And Run</button>
                    </Col>
                </Row>
            </Container>
        )
    } 
    if (this.state.turnResults === false && this.state.fightResults === "win") {
        return (
            <Container>
                <Row>
                    <Col>
                        <h3>In A Street Fight</h3>
                    </Col> 
                </Row>
                <Row>
                    <hr />
                </Row>
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
    if (this.state.turnResults === false && this.state.fightResults === "lose") {
        return (
        <Container>
            <Row>
                <Col>
                    <h3>In A Street Fight</h3>
                </Col> 
            </Row>
            <Row>
                <hr />
            </Row>
            <Row>
                <Col>
                    You just got your ass kicked by a mob. They roll your pockets for <span id="cash">
                    ${-this.state.cashGained}</span> before you can crawl away, battered and bloody.
                </Col>
            </Row>
            <Row>
                <Col>
                    <button onClick={this.resolution}>Give It A Rest</button>
                </Col>
            </Row>
        </Container>
        )
    }
    return (
        <Container>
            <Row>
                <Col>
                    <h3>In A Street Fight</h3>
                </Col> 
            </Row>
            <Row>
                <hr />
            </Row>
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
import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function mapStateToProps(state) {
    return {state};
  }

class SmallerKid extends Component {
    constructor(props) {
        super(props);
        this.state = { turnResults : false, mobHP : 9, playerHP : this.props.state.curHitPoints,
                        damageDealt : 0, 
                        damageTaken : 0,
                        fightResults : null,
                        cashGained: 0,
                        xpGained: 0,
                        flipFlop: false }
    }

    flee = () => {
        fetch('/api/updateCharStats', {
            method: 'PUT',
            body: JSON.stringify({ email: this.props.state.email, 
                pveFights : this.props.state.pveFights - 1, curHitPoints : this.state.playerHP }),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then( fetch('/api/getCharStats', {
            method: 'POST',
            body: JSON.stringify({email: this.props.state.email}),
            headers: {
                'Content-Type': 'application/json'
            }
        }) )
        .then(res => res.json())
        .then(res => this.props.dispatch({ type: 'GET_CHARDATA', payload: res }))
    }
    
    fight = () => {
        //calculate damage dealt and taken this round
        this.setState({ turnResults : true,
                        damageDealt : (Math.ceil(this.props.state.weapon.atkPower / 2)) + (Math.ceil(Math.random() * 
                        (this.props.state.weapon.atkPower / 2))),
                        damageTaken : (Math.max(0, (Math.ceil(Math.random() * 4) - this.props.state.armor.defPower))),
                    })
        // subtract damage from mob and player HP totals
        this.setState({ mobHP : this.state.mobHP - this.state.damageDealt, playerHP : this.state.playerHP - this.state.damageTaken })
        // if player HP reaches 0 first, subtract half from cash in hand and lockout for the day
        if (this.state.playerHP - this.state.damageTaken <= 0) {
            this.setState({ turnResults : false, fightResults : "lose", 
                cashGained : -(Math.ceil(this.props.state.cashInHand * 0.5)), 
                lockedOut: true })
        }        
        // if mob HP reaches 0 first, give cash and XP
        if ((this.state.mobHP - this.state.damageDealt) <= 0 && (this.state.playerHP - this.state.damageTaken) > 0) {
            this.setState({ cashGained : Math.ceil(Math.random() * 10) + 20, xpGained : Math.ceil((Math.random() * 6) + 4), 
                turnResults : false, fightResults : "win"  })
        }
        // this guy exists solely as a workaround, so React will render current HP totals
        this.setState({ flipFlop : !this.state.flipFlop })
    }

    resolution = () => {
        fetch('/api/updateCharStats', {
            method: 'PUT',
            body: JSON.stringify({ email: this.props.state.email, 
                cashInHand: (this.props.state.cashInHand + this.state.cashGained),
                xp: (this.props.state.xp + this.state.xpGained),
                pveFights : this.props.state.pveFights - 1,
                curHitPoints : this.state.playerHP,
                lockedOut : this.state.lockedOut }),
            headers: {
              'Content-Type': 'application/json'
            }
          })
        .then( fetch('/api/getCharStats', {
            method: 'POST',
            body: JSON.stringify({email: this.props.state.email}),
            headers: {
                'Content-Type': 'application/json'
            }
        }) )
        .then(res => res.json())
        .then(res => this.props.dispatch({ type: 'GET_CHARDATA', payload: res }))
    }

    render() {
    
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
                        Your HP: <span id="hitPoints">{this.state.playerHP - this.state.damageTaken}</span>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Smaller Kid's HP: {this.state.mobHP - this.state.damageDealt}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        You hit the Smaller Kid for {this.state.damageDealt}! He hits you with a bony little fist for {this.state.damageTaken}!
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
                        Your HP: <span id="hitPoints">{this.state.playerHP - this.state.damageTaken}</span>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Smaller Kid's HP: {this.state.mobHP - this.state.damageDealt}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        You hit the Smaller Kid for {this.state.damageDealt}! He misses you completely!
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
                    You just got your ass kicked by a Smaller Kid. They roll your pockets for <span id="cash">
                    ${-this.state.cashGained}</span> before you can crawl away, battered and bloody.
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to="/"><button onClick={this.resolution}>Give It A Rest</button></Link>
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
                    Smaller Kid's HP: {this.state.mobHP}
                </Col>
            </Row>
            <Row>
                <Col>
                    You come up on a Smaller Kid, alone on the street. He's got a smug look on his face. What do you do?
                </Col>
            </Row>
            <Row>
                <Col>
                    <button onClick={this.fight}>Attack!</button>
                </Col>
                <Col>
                    <Link to="/street"><button>Punk Out And Run</button></Link>
                </Col>
            </Row>
        </Container>
        )
    }
}

export default connect(mapStateToProps)(SmallerKid)
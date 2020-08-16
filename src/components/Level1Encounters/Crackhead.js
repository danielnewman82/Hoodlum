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
                        damageTaken : 0 }
    }

    fight() {
        this.setState({ turnResults : true,
                        damageDealt : this.props.state.atkPower * (Math.ceil(Math.random() * 6)),
                        damageTaken : (Math.ceil(Math.random() * 4)) ,
                    })
        this.setState({ mobHP : this.state.mobHP - this.state.damageDealt })
        this.props.dispatch({ type: 'CHANGE_HP', payload: -this.state.damageTaken})
    }

    render() {
    if (this.state.turnResults === false) {
        return (
            <Container>
                <Row>
                    <Col>
                        Your HP: {this.props.state.curHitPoints}
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
                        <button onClick={() => this.fight()}>Attack!</button>
                    </Col>
                    <Col>
                        <button onClick={this.props.flee}>Punk Out And Run</button>
                    </Col>
                </Row>
            </Container>
            )
        }
    if (this.state.turnResults === true && this.state.damageDealt > 0 && this.state.damageDealt > 0) {
        return (
            <Container>
                <Row>
                    <Col>
                        Your HP: {this.props.state.curHitPoints - this.state.damageTaken}
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
                        <button onClick={() => this.fight()}>Attack!</button>
                    </Col>
                    <Col>
                        <button onClick={this.props.flee}>Punk Out And Run</button>
                    </Col>
                </Row>
            </Container>
        )
    } else
    if (this.state.turnResults === true && (this.state.mobHP - this.state.damageDealt) <= 0) {
        return (
            <Container>
                <Row>
                    <Col>
                        You won! You roll your victim for <span id="cash">${Math.ceil(Math.random() *4)}</span>, and
                        gain {Math.ceil((Math.random() * 5) * 2)} for merciless beating their ass in the street.
                    </Col>
                </Row>
            </Container>
        )
    }
    return "What happened here?"
    }
}

export default connect(mapStateToProps)(Mob)
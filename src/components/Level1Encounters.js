import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Level1Encounters extends Component {
    render() {
/*         var encounterNum = (Math.floor(Math.random() * 50)); */
            return <Crackhead retreat={this.props.retreat} 
                curHP={this.props.curHP} 
                atkPower={this.props.atkPower}
                defPower={this.props.defPower}
                fightCrackhead={this.props.fightCrackhead}
            />
/*         if (encounterNum < 50 && yourTurnResults === false) {
            return <SmallerKid />
        } */
    }
}

class Crackhead extends Level1Encounters {
    constructor(props) {
        super(props);
        this.state = { turnResults : false, crackheadHP : 14 }
        this.fightCrackhead = this.fightCrackhead.bind(this);
    }

    fightCrackhead() {
        this.setState({turnResults : true})
        const crackheadAtk = ((Math.ceil(Math.random() * 3)));
        var damageTaken = (crackheadAtk - this.state.defPower);
        damageTaken = Math.max(0, damageTaken);
        var damageDealt = (this.props.atkPower * (Math.floor(Math.random() * 6)));
        var newCurHP = (this.state.curHP - damageTaken);
        var newMobHP = (this.state.crackheadHP - damageDealt);
        this.setState({ curHP : newCurHP, crackheadHP : newMobHP })
    }
    render() {
    if (this.state.turnResults === false) {
        return (
            <Container>
                <Row>
                    <Col>
                    A crackhead shuffles out of the cut and accosts you! What do you do?
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <button onClick={this.fightCrackhead}>Attack!</button>
                    </Col>
                    <Col>
                    <button onClick={this.props.retreat}>Punk Out And Run</button>
                    </Col>
                </Row>
            </Container>
    )
    }
    if (this.state.turnResults === true ) {
        return (
            <Container>
                <Row>
                    <Col>Your HP: {this.props.curHP}</Col>
                </Row>
                    <Col>Crackhead's HP: {this.state.crackheadHP}</Col>
                <Row>
                    <Col>
                        You missed! Well done, dummy! The crackhead hits you for {this.state.damageTaken}!
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <button onClick={this.attackCrackhead}>Attack!</button>
                    </Col>
                    <Col>
                    <button onClick={this.props.retreat}>Punk Out And Run</button>
                    </Col>
                </Row>
            </Container>
        )
    }
    if (this.state.turnResults === true && this.damageDealt > 0) {
        return (
            <Container>
                <Row>
                    <Col>Your HP: {this.props.curHP}</Col>
                    <Col>Crackhead's HP: {this.state.crackheadHP}</Col>
                </Row>
                <Row>
                    <Col>
                        You hit the crackhead for {this.state.damageDealt}! He hit you back for {this.state.damageTaken}!
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <button onClick={this.attackCrackhead}>Attack!</button>
                    </Col>
                    <Col>
                    <button onClick={this.props.retreat}>Punk Out And Run</button>
                    </Col>
                </Row>
            </Container>
        )
    }
    }
}

export default Level1Encounters;
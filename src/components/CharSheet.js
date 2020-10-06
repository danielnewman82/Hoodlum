import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function mapStateToProps(state) {
    return {state};
  }

class CharSheet extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'CHANGE_LOCATION', payload: "Your Stats"})
    }

    render() {
    return (
        <Container>
            <Row>
                <Col>
                    Name: {this.props.state.name}
                </Col>
                <Col>
                    Sex: {this.props.state.sex}
                </Col>
            </Row>
            <Row>
                <Col>
                    Experience Level: {this.props.state.level}
                </Col>
                <Col>
                    Experience Points: {this.props.state.xp}
                </Col>
            </Row>
            <Row>
                <Col>
                    Cash On Hand: <span id="cash">${this.props.state.cashInHand}</span>
                </Col>
                <Col>
                    Bank / Stash Balance: <span id="cash">${this.props.state.cashInBank} / ${this.props.state.cashInStash}</span>
                </Col>
            </Row>
            <Row>
                <Col>
                    Current Hit Points: <span id="hitPoints">{this.props.state.curHitPoints}</span>
                </Col>
                <Col>
                    Maximum Hit Points: <span id="hitPoints">{this.props.state.maxHitPoints}</span>
                </Col>
            </Row>
            <Row>
                <Col>
                    Street Fights: {this.props.state.pveFights}
                </Col>
                <Col>
                    Player Fights: {this.props.state.pvpFights}
                </Col>
            </Row>
            <Row>
                <Col>
                    Weapon: {this.props.state.weapon.name}
                </Col>
                <Col>
                    Attack Power: {this.props.state.weapon.atkPower}
                </Col>
            </Row>
            <Row>
                <Col>
                    Armor: {this.props.state.armor.name}
                </Col>
                <Col>
                    Defense Power: {this.props.state.armor.defPower}
                </Col>
            </Row>
            <Row>
                <Col>
                    Outfit: {this.props.state.outfit}
                </Col>
            </Row>
            <Row>
                <Col>
                    Reputation: {this.props.state.reputation}
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to="/street"><button onClick={this.street}>Back To The Street</button></Link>
                </Col>
            </Row>
        </Container>
        );
    }
}
export default connect(mapStateToProps)(CharSheet);
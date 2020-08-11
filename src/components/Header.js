import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
    location: state.location,
    level: state.level,
    cashInHand: state.cashInHand,
    curHitPoints: state.curHitPoints,
    maxHitPoints: state.maxHitPoints
    };
  }

class Header extends Component{
    render() {
    return (
        <Container id="header">
            <Row>
                <Col>
                <h3><span id="location">{this.props.location}</span></h3>
                </Col> 
                <Col>
                <h3><span id="level">Experience Level: {this.props.level}</span></h3>
                </Col>
                <Col>
                <h3>Cash: <span id="cash">${this.props.cashInHand}</span> Hit Points: <span id="hitPoints">{this.props.curHitPoints}/{this.props.maxHitPoints}</span></h3>
                </Col>
            </Row>
            <Row>
                <hr />
            </Row>
        </Container>
        )
    }
}

export default connect(mapStateToProps)(Header);
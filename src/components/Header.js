import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        state
    }
}

class Header extends Component{
    render() {
    return (
        <Container id="header">
            <Row>
                <Col>
                <h3><span id="location">{this.props.state.location}</span></h3>
                </Col> 
                <Col>
                <h3><span id="level">Experience Level: {this.props.state.level}</span></h3>
                </Col>
                <Col>
                <h3>Cash: <span id="cash">${this.props.state.cashInHand}</span> Hit Points: <span id="hitPoints">{this.props.state.curHitPoints}/{this.props.state.maxHitPoints}</span></h3>
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
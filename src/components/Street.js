import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
    location: state.location,
    };
  }

class Street extends Component {
    walkTheTrack = () => {
        this.props.dispatch({ type: 'CHANGE_LOCATION', payload: "Looking For Trouble" })
    }

    viewCharSheet = () => {
        this.props.dispatch({ type: 'CHANGE_LOCATION', payload: "Your Stats"})
    }

    hospital = () => {
        this.props.dispatch({ type: 'CHANGE_LOCATION', payload: "At The Hospital"})
    }

    gunShop = () => {
        this.props.dispatch({ type: 'CHANGE_LOCATION', payload: "Spider's Gun Shop"})
    }

    theBar = () => {
        this.props.dispatch({ type: 'CHANGE_LOCATION', payload: "At The Bar"})
    }

    render() {
        return ( 
        <Container id="mainMenu">
            <Row id="narration">
                <Col>
            You are 15 years old, alone on the streets of a bad neighborhood, after dark. Most exterior 
            walls are marred by graffiti. You can hear hardcore hip hop booming from a nearby house. There
            are mean looking dudes loitering on the corners.
            What do you do?
                </Col>
            </Row>
            <Row>
                <Col>
                <button type="button" onClick={this.walkTheTrack}>(W)alk The Track</button>
                </Col>
                <Col>
                <button type="button" onClick={this.viewCharSheet}>(V)iew Your Stats</button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <button type="button" onClick={this.theBar}>Go To The (B)ar</button>
                </Col>
                <Col>
                    <button type="button" onClick={this.gunShop}>(S)pider's Gun Shop</button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <button type="button" onClick={this.hospital}>Go To The (H)ospital</button>
                </Col>
            </Row>
        </Container>
        );
    }
}

export default connect(mapStateToProps)(Street);
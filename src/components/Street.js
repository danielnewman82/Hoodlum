import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Street extends Component {
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
                <button type="button" onClick={this.props.walkTheTrack}>(W)alk The Track</button>
                </Col>
                <Col>
                <button type="button" onClick={this.props.viewCharSheet}>(V)iew Your Stats</button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <button type="button" onClick={this.props.theBar}>Go To The (B)ar</button>
                </Col>
                <Col>
                    <button type="button" onClick={this.props.weaponShop}>(S)pider's Gun Shop</button>
                </Col>
            </Row>
        </Container>
        );
    }
}

export default Street;
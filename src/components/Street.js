import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Lockout from './Lockout';

function mapStateToProps(state) {
    return {state};
  }

class Street extends Component {
    walkTheTrack = () => {
        this.props.dispatch({ type: 'CHANGE_LOCATION', payload: "Looking For Trouble" })
    }

    viewCharSheet = () => {
        this.props.dispatch({ type: 'CHANGE_LOCATION', payload: "Your Stats" })
    }

    hospital = () => {
        this.props.dispatch({ type: 'CHANGE_LOCATION', payload: "At The Hospital" })
    }

    gunShop = () => {
        this.props.dispatch({ type: 'CHANGE_LOCATION', payload: "Spider's Gun Shop" })
    }

    theBar = () => {
        this.props.dispatch({ type: 'CHANGE_LOCATION', payload: "At The Bar" })
    }

    bank = () => {
        this.props.dispatch({ type: 'CHANGE_LOCATION', payload: "The Credit Union" })
    }

    graffitiWall = () => {
        this.props.dispatch({ type: 'CHANGE_LOCATION', payload: "The Graffiti Wall" })
    }
    
    gym = () => {
        this.props.dispatch({ type: 'CHANGE_LOCATION', payload: "The Training Gym" })
    }

    armorShop = () => {
        this.props.dispatch({ type: 'CHANGE_LOCATION', payload: "The Milsurp Shop" })
    }

    render() {
        if (this.props.state.lockedOut === true) {
            return <Lockout />
        }
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
                <Link to="/theTrack"><button onClick={this.walkTheTrack}>(W)alk The Track</button></Link>
                </Col>
                <Col>
                <Link to="/charSheet"><button onClick={this.viewCharSheet}>(V)iew Your Stats</button></Link>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to="/weaponShop"><button onClick={this.gunShop}>Spider's (G)un Shop</button></Link>
                </Col>
                <Col>
                    <Link to="/armorShop"><button onClick={this.armorShop}>The Milsurp (A)rmor Shop</button></Link>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to="/hospital"><button onClick={this.hospital}>Go To The (H)ospital</button></Link>
                </Col>
                <Col>
                    <Link to="/bank"><button onClick={this.bank}>Go To The (B)ank</button></Link>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to="/graffitiWall"><button onClick={this.graffitiWall}>Hit Up The Graffiti (W)all</button></Link>
                </Col>
                <Col>
                    <Link to="/gym"><button onClick={this.gym}>(L)evel Up At The Gym</button></Link>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to="/clothingShop"><button onClick={this.clothingShop}>(S)hop for Clothes</button></Link>
                </Col>
                <Col>
                    <Link to="/club"><button onClick={this.theBar}>Go To The (C)lub</button></Link>
                </Col>
            </Row>
        </Container>
        );
    }
}

export default connect(mapStateToProps)(Street);
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Lockout from './Lockout';

function mapStateToProps(state) {
    return {state};
  }

class Street extends Component {

    render() {
        if (this.props.state.lockedOut === true) {
            return <Lockout />
        }
        
        return ( 
        <Container id="mainMenu">
            <Row>
                <Col>
                    <h3>Out On The Street</h3>
                </Col> 
            </Row>
            <Row>
                <hr />
            </Row>
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
                    <Link to="/theTrack"><button>(W)alk The Track</button></Link>
                </Col>
                <Col>
                    <Link to="/charSheet"><button>(V)iew Your Stats</button></Link>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to="/weaponShop"><button>(S)pider's Gun Shop</button></Link>
                </Col>
                <Col>
                    <Link to="/armorShop"><button>(A)rmor Shop</button></Link>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to="/hospital"><button>The (H)ospital</button></Link>
                </Col>
                <Col>
                    <Link to="/bank"><button>The (B)ank</button></Link>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to="/graffitiWall"><button>The Graffiti (W)all</button></Link>
                </Col>
                <Col>
                    <Link to="/gym"><button>The (G)ym</button></Link>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to="/passedOut"><button>Log (O)ut</button></Link>
                </Col>
                <Col>
                    <Link to="/club"><button>The (C)lub</button></Link>
                </Col>
            </Row>
        </Container>
        );
    }
}

export default connect(mapStateToProps)(Street);
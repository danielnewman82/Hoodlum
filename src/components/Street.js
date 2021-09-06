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
                <p>You are 15 years old, alone on the streets of a bad neighborhood, after dark. Most exterior 
                walls are marred by graffiti. You can hear hardcore hip hop booming from a nearby house. There
                are mean looking dudes loitering on the corners.</p>
                <p>What do you do?</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p><Link to="/theTrack"><button>(W)alk The Track</button></Link></p>
                </Col>
                <Col>
                    <p><Link to="/charSheet"><button>(V)iew Your Stats</button></Link></p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p><Link to="/weaponShop"><button>(S)pider's Gun Shop</button></Link></p>
                </Col>
                <Col>
                    <p><Link to="/armorShop"><button>(A)rmor Shop</button></Link></p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p><Link to="/hospital"><button>The (H)ospital</button></Link></p>
                </Col>
                <Col>
                    <p><Link to="/bank"><button>The (B)ank</button></Link></p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p><Link to="/graffitiWall"><button>The Graffiti (W)all</button></Link></p>
                </Col>
                <Col>
                    <p><Link to="/gym"><button>The (G)ym</button></Link></p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p><Link to="/passedOut"><button>Log (O)ut</button></Link></p>
                </Col>
                <Col>
                    <p><Link to="/club"><button>The (C)lub</button></Link></p>
                </Col>
            </Row>
        </Container>
        );
    }
}

export default connect(mapStateToProps)(Street);
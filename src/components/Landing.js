import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LoginButton from './login-button';
import SignupButton from './signup-button';

function mapStateToProps(state) {
    return {state};
  }

function Landing() {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Hoodlum</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>Rated M for language, violence, drug use, and gallows humor</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Experience life on the streets. Hustle, fight, do what you have to do to 
                    survive.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to="/street"><LoginButton /></Link>
                </Col>
            </Row>
            <Row>
                <Col>
                    <SignupButton />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to="/about"><button>About Hoodlum</button></Link>
                </Col>
            </Row>                
        </Container>
        )
    }

export default connect(mapStateToProps)(Landing);
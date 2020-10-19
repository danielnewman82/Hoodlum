import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
                    <form label="login">
                        Email: <input label="login"></input><br />
                        Password: <input label="login"></input>
                    </form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to="/street"><button type="submit">Hit the Streets Running</button></Link>
                </Col>
            </Row>
            <Row>
                <Col>
                    Social identity (Google, Facebook, etc) providers coming soon!
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
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { changeLocation } from '../redux/ActionCreators';

class Landing extends Component {
    render() {
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
                        <button>Hit the streets running</button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <button onClick={changeLocation({ location : "about"})}>About Hoodlum</button>
                    </Col>
                </Row>                
            </Container>
        )
    }
}

export default Landing;
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Header(props) {
    return (
        <Container id="header">
            <Row>
                <Col>
                <h3><span id="location">{props.location}</span></h3>
                </Col> 
                <Col>
                <h3><span id="level">Experience Level: {props.level}</span></h3>
                </Col>
                <Col>
                <h3>Cash: <span id="cash">${props.cash}</span> Hit Points: <span id="hitPoints">{props.curHP}/{props.maxHP}</span></h3>
                </Col>
            </Row>
            <Row>
                <hr />
            </Row>
        </Container>
    
    )
}

export default Header;
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function CharSheet(props) {
    return (
        <Container>
            <Row>
                <Col>
                    Name: {props.name}
                </Col>
                <Col>
                    Sex: {props.sex}
                </Col>
            </Row>
            <Row>
                <Col>
                    Experience Level: {props.level}
                </Col>
                <Col>
                    Hit Points: <span id="hitPoints">{props.curHitPoints}/{props.maxHitPoints}</span>
                </Col>
            </Row>
            <Row>
                <Col>
                    Cash On Hand: <span id="cash">${props.cashInHand}</span>
                </Col>
                <Col>
                    Cash In The Bank: <span id="cash">${props.cashInBank}</span>
                </Col>
            </Row>
            <Row>
                <Col>
                    Equipped Weapon: {props.weapon}
                </Col>
                <Col>
                    Attack Power: {props.atkPower}
                </Col>
            </Row>
            <Row>
                <Col>
                    Equipped Armor: {props.armor}
                </Col>
                <Col>
                    Defense Power: {props.defPower}
                </Col>
            </Row>
            <Row>
                <Col>
                    Outfit: {props.outfit}
                </Col>
                <Col>
                    Reputation: {props.reputation}
                </Col>
            </Row>
            <Row>
                <Col>
                    <button onClick={props.logIn}>Back To The Street</button>
                </Col>
            </Row>
        </Container>
        );
    }

export default CharSheet;
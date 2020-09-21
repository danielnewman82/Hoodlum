import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';

function mapStateToProps(state) {
    return {state};
}

function WeaponShopEntrance(props) {
    let { url } = useRouteMatch();

    if (props.state.level < 3) {
        return (
            <Container>
            <Row>
                <Col>
                Most of the gun shops in this neighborhood have gone out of business. Either they didn't
                want to deal with the urban blight, or the city pushed them out, blaming them for crime.
                Spider's is the only holdout, and the proprietor tries to maintain a semblance of propriety.
                But he isn't stupid; he knows that his business depends on dealing with shady characters.
                A tall, wiry blond man with a goatee and a revolver on his hip, he looks you up and down and flatly tells you, "C'mon,
                you know I can't be sellin' you no gun, kid."
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to={`${url}/pocketKnife`}><button>(1) Pocket Knife - $40</button></Link>
                </Col>
                <Col>
                    <Link to={`${url}/baseballBat`}><button>(2) Baseball Bat - $60</button></Link>
                </Col>
            </Row>
            <Row>
                <Col>
                    <button>(3) Slingshot - $80</button>
                </Col>
                <Col>
                    <button>(4) Pellet Rifle - $100</button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to="/street"><button>Back To The Street</button></Link>
                </Col>
            </Row>
        </Container>
        )
    }

        return (
        <Container>
            <Row>
                <Col>
                Most of the gun shops in this neighborhood have gone out of business. Either they didn't
                want to deal with the urban blight, or the city pushed them out, blaming them for crime.
                Spider's is the only holdout, and the proprietor tries to maintain a semblance of propriety.
                But he isn't stupid; he knows that his business depends on dealing with shady characters.
                A tall, wiry blond man with a goatee and a revolver on his hip, he eyes you cautiously as you 
                enter his shop. "Can I help you with somethin', brother?", he asks.
                </Col>
            </Row>
            <Row>
                <Col>
                    <button>(1) Pocket Knife - $20</button>
                </Col>
                <Col>
                    <button>(2) Baseball Bat - $40</button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <button>(3) Slingshot - $60</button>
                </Col>
                <Col>
                    <button>(4) Pellet Rifle - $100</button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <button>(5) Krueger Deuce-Deuce - $200</button>
                </Col>
                <Col>
                    <button>(6) Clock 17 - $500</button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <button>(7) Bolt .45 - $800</button>
                </Col>
                <Col>
                    <button>(8) S&E .357 Magnum - $1,200</button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <button>(9) Bloomberg 12 Gauge Pump - $1,500</button>
                </Col>
                <Col>
                    <button>(10) Oozey Machine Pistol - $2,000</button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <button>(11) Lamington Bolt Rifle - $3,000</button>
                </Col>
                <Col>
                    <button>(12) Simonov Karabin - $4,000</button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <button>(13) Arrr-15 - $5,000</button>
                </Col>
                <Col>
                    <button>(14) Hacker & Kooch G3 - $6,000</button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <button>(15) Schtoyl Oogle - $7,000</button>
                </Col>
                <Col>
                    <button>(15) Effin' Mini-Me Machinegun - $9,000</button>
                </Col>
            </Row>
                <Col>
                    <button>(16) a Goddamn Bazooka - $15,000</button>
                </Col>
            <Row>
                <Col>
                <Link to="/street"><button>Back To The Street</button></Link>
                </Col>
            </Row>
        </Container>
        )
    }

export default connect(mapStateToProps)(WeaponShopEntrance)
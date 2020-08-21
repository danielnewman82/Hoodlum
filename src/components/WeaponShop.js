import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {state};
}

class WeaponShop extends Component {
    street = () => {
        this.props.dispatch({ type: 'CHANGE_LOCATION', payload: "Out On The Street"})
    }
    
    render() {
        if (this.props.state.level < 3) {
            return (
                <Container>
            <Row>
                <Col>
                Most of the gun shops in this neighborhood have gone out of business. Either they didn't
                want to deal with the urban blight, or the city pushed them out, blaming them for crime.
                Spider's is the only holdout, and the proprietor tries to maintain a semblance of propriety.
                But he isn't stupid; he knows that his business depends on dealing with shady characters.
                A tall, wiry blond man with a goatee, he looks you up and down and flatly tells you, "C'mon,
                you know I can't be sellin' you no gun, kid."
                </Col>
            </Row>
            <Row>
                <Col>
                    <button>Buy a Pocket Knife - $40</button>
                </Col>
                <Col>
                    <button>Buy a Baseball Bat - $80</button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <button onClick={this.street}>Back To The Street</button>
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
                A tall, wiry blond man with a goatee, he eyes you cautiously as you enter his shop. "Can I
                help you with somethin', kid?", he asks.
                </Col>
            </Row>
            <Row>
                <Col>
                    <button>Buy a Pocket Knife - $20</button>
                </Col>
                <Col>
                    <button>Buy a Baseball Bat - $40</button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <button>Buy a Krueger Deuce-Deuce - $200</button>
                </Col>
                <Col>
                    <button>Buy a Clock 17 - $500</button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <button>Buy a Bolt .45 - $800</button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <button onClick={this.props.logIn}>Back To The Street</button>
                </Col>
            </Row>
        </Container>
        )
    }
}
export default connect(mapStateToProps)(WeaponShop);
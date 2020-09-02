import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {state};
}

class ArmorShop extends Component {
    street = () => {
        this.props.dispatch({ type: 'CHANGE_LOCATION', payload: "Out On The Street"})
    }
    
    render() {
        return (
        <Container>
            <Row>
                <Col>
                This milsurp shop is cluttered, dusty, and disorganized. 
                </Col>
            </Row>
            <Row>
                <Col>
                    <button>(1) Baking Sheet - $40</button>
                </Col>
                <Col>
                    <button>(2) Leather Jacket - $100</button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <button>(3) Sport Chestguard - $200</button>
                </Col>
                <Col>
                    <button>(4) Flak Vest - $500</button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <button>(5) Kevlar Vest - $800</button>
                </Col>
                <Col>
                    <button>(6) Kevlar Suit - $1,800</button>
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
}
export default connect(mapStateToProps)(ArmorShop);
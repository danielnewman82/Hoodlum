import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function mapStateToProps(state) {
    return {state};
}

function ArmorShop() {
    
        return (
        <Container>
            <Row>
                <Col>
                    <h3>Milsurp Armor Shop</h3>
                </Col> 
            </Row>
            <Row>
                <hr />
            </Row>
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
                <Link to="/street"><button>Back To The Street</button></Link>
                </Col>
            </Row>
        </Container>
        )
    }

export default connect(mapStateToProps)(ArmorShop);
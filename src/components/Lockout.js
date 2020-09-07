import React from 'react';
import { connect } from 'react-redux';
import { Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function mapStateToProps(state) {
    return {state}
}

function Lockout() {   
    return (
        <Container>
            <Row>
                <Col>
                    You already got mashed to a pulp once today. Try again tomorrow, after you've laid around
                    recovering a bit.
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to="/"><button>Back To The Street</button></Link>
                </Col>
            </Row>
        </Container>
        )
    }

export default connect(mapStateToProps)(Lockout)
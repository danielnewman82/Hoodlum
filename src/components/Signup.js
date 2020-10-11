import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function mapStateToProps(state) {
    return {state}
}

class SignUp extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        Create your Hoodlum account with 
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
}

export default connect(mapStateToProps)(SignUp)
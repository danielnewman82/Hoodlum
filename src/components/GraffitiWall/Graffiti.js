import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function mapStateToProps(state) {
    return {state}
}

class Graffiti extends Component {

    submit = () => {

    }
    
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        Enter your tag here:
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <textarea name="grafInput" maxlength="255" cols="51" rows="5" required="true" 
                        minLength="3" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <button>Write your tag</button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Other recent tags are scrawled on the wall in marker and spraypaint:
                    </Col>
                </Row>
                <Row>
                    <Col>
                        
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default connect(mapStateToProps)(Graffiti)
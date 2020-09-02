import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row, Container } from 'react-bootstrap';

function mapStateToProps(state) {
    return state
}

class ComponentX extends Component {
    street = () => {
        this.props.dispatch({ type: 'CHANGE_LOCATION', payload: "Out On The Street"})
    }
    
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        This is the base template for Hoodlum components.
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <button type="button" onClick={this.street}>Back To The Street</button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default connect(mapStateToProps)(ComponentX)
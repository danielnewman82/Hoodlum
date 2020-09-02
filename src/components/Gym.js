import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row, Container } from 'react-bootstrap';

function mapStateToProps(state) {
    return state
}

class Gym extends Component {
    street = () => {
        this.props.dispatch({ type: 'CHANGE_LOCATION', payload: "Out On The Street"})
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        The neighborhood boxing gym smells of dried sweat and blood. Big, muscly looking dudes are
                         pummeling heavy bags, pumping iron, and throwing hands in the ring.
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

export default connect(mapStateToProps)(Gym)
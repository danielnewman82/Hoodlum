import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
                    <Link to="/street"><button onClick={this.street}>Back To The Street</button></Link>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default connect(mapStateToProps)(Gym)
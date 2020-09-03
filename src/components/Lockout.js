import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row, Container } from 'react-bootstrap';

function mapStateToProps(state) {
    return {state}
}

class Lockout extends Component {
    returnToLanding = () => { 
        this.props.dispatch({ type: 'CHANGE_LOCATION', payload: "landing"})
    }
    render() {    
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
                        <button onClick={this.returnToLanding}>Return To Landing Screen</button>
                    </Col>
                </Row>
            </Container>
            )
        }
    }

export default connect(mapStateToProps)(Lockout)
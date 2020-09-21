import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row, Container } from 'react-bootstrap';
import LogoutButton from './logout-button';

function mapStateToProps(state) {
    return {state}
}

class PassedOut extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'CHANGE_LOCATION', payload: "Passed Out"})
    }
    
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        Exhausted, you find a doorway to sleep in. Thanks for playing Hoodlum, go do something constructive.
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <LogoutButton />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default connect(mapStateToProps)(PassedOut)
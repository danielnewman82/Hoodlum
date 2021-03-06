import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function mapStateToProps(state) {
    return {state}
}

class ComponentX extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'CHANGE_LOCATION', payload: "You forgot to update this text, dummy!"})
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
                        <Link to="/street"><button>Back To The Street</button></Link>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default connect(mapStateToProps)(ComponentX)
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {state}
}

class Header extends Component{
    render() {
    return (
        <Container id="header">
            <Row>
                <Col>
                <h3><span id="location">{this.props.state.location}</span></h3>
                </Col> 
            </Row>
            <Row>
                <hr />
            </Row>
        </Container>
        )
    }
}

export default connect(mapStateToProps)(Header);
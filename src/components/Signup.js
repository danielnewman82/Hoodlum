import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function mapStateToProps(state) {
    return {state}
}

class SignUp extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'CHANGE_LOCATION', payload: "You forgot to update this text, dummy!"})
    }
    
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <p>How did you end up here, in the blighted post-industrial urban wasteland? 
                        You're just a kid. Maybe your folks died. Or they just didn't want you, or you 
                        couldn't stand them any more. And you sure as hell didn't want to go to the Youth 
                        Authority. You've heard tell about what those facilities are like: part orphanage,
                        part prison, part indoctrination camp. Mainstream society has little use for those
                        who don't toe the line, so you have to make your own way. You made it to the city,
                        but now you're on your own with nothing but the discount-store clothes on your 
                        back.</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link to="/"><button>Back To The Login Page</button></Link>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default connect(mapStateToProps)(SignUp)
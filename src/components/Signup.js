import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row, Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

function mapStateToProps(state) {
    return {state}
}

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = { sex : "", name : "" }
    }

    backUp = () => {
        this.props.back()
    }

    setSexDude = () => {
        this.setState({ sex : "Dude" })
    }

    setSexChick = () => {
        this.setState({ sex : "Chick" })
    }

    setName = () => {
        fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({email: this.props.email, password: this.props.password, name: this.state.name, sex: this.state.sex}),
            headers: {
              'Content-Type': 'application/json'
            }
          })
        this.setState({ done: true })
    }

    handleInput = (e) => {
        this.setState({ name: e.target.value })
    }
    
    render() {
        if (this.state.done === true ) {
            console.log("New account created")
            return <Redirect to="/street" />
        }
        if (this.state.sex === "Dude" || this.state.sex === "Chick") {
            return (
                <Container>
                    <Row>
                        <Col>
                            <p>What's your name, kid?</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p><input type="text" name="nameInput" id="nameInput" maxLength="20" 
                            minLength="3" value={this.state.name} onChange={this.handleInput} /></p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p><button onClick={this.setName}>And don't wear it out!</button></p>
                        </Col>
                    </Row>
                </Container>
            )
        }
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
                        <p>How do you identify?</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p><button onClick={this.setSexDude}>Dude</button></p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p><button onClick={this.setSexChick}>Chick</button></p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p><button onClick={this.backUp}>Whoa, hold up, I must have entered my email address wrong.</button></p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default connect(mapStateToProps)(SignUp)
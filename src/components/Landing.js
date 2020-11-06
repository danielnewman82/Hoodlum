import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import SignUp from './SignUp';

function mapStateToProps(state) {
    return {state};
  }

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = { email : "", password : "" };
    }

    handleInputChange = (e) => {
        const { value, name } = e.target
        this.setState({ [name]: value });
    }

    backUp = () => {
        this.setState({ error: "" })
    }

    onSubmit = (e) => {
        e.preventDefault();
        fetch('/api/authenticate', {
            method: 'POST',
            body: JSON.stringify({email: this.state.email, password: this.state.password}),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(res => {
            if (res.status === 200) {
              this.setState({ auth : true });
            } else return res.json()
          })
          .then(res => this.setState(res))
          .catch(res => this.setState(res))
        }

    render() {
        let incorrectPassword;
        if (this.state.auth === true) {
            return <Redirect to="/street" />
        }
        if (this.state.error === "Incorrect email") {
            return <SignUp email={this.state.email} password={this.state.password} back={this.backUp}/>
        }
        if (this.state.error === "Incorrect password") {
            incorrectPassword = "Incorrect password. Perhaps you'd like to reset your password?";
        }
        
        return (
            <Container>
                <Row>
                    <Col>
                        <h1>Hoodlum</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>Rated M for language, violence, drug use, and gallows humor</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Experience life on the streets. Hustle, fight, do what you have to do to 
                        survive.</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <form label="login">
                            <p>Email: <input
                                type="email"
                                name="email"
                                placeholder="Enter email"
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                required
                                /> </p>
                            <p>Password: <input 
                                type="password"
                                name="password"
                                placeholder="Enter password"
                                value={this.state.password}
                                onChange={this.handleInputChange}
                                required
                                /> </p>
                            <button type="submit" onClick={this.onSubmit}>Hit the Streets Running</button>
                        </form>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>{incorrectPassword}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Social identity (Google, Facebook, etc) providers coming soon!</p>
                    </Col>
                </Row>
                <Row>
                <Col>
                    <Link to="/about"><button>About Hoodlum</button></Link>
                </Col>
                </Row>                
            </Container>
            )
        }
    }

export default connect(mapStateToProps)(Landing);
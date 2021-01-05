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

    // this is here solely so it can be passed as props to SignUp
    backUp = () => {
        this.setState({ error: "" })
    }

    onSubmit = (e) => {
        e.preventDefault();
        // send email and password to the backend
        fetch('/api/authenticate', {
            method: 'POST',
            body: JSON.stringify({email: this.state.email, password: this.state.password}),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          // if both match a document in the user database, fetch that user's stats and dispatch them to the client Redux store
          // otherwise, return the error as JSON so the app can respond accordingly
          .then(res => {
            if (res.status === 200) {
              this.setState({ auth : true });
              this.getCharStats();
            } else return res.json()
          })
          .then(res => this.setState(res))
          .catch(res => this.setState(res))
        }
    
    getCharStats = () => {
        //send email address to the backend, so it can respond with user stats and dispatch them to the Redux store
        fetch('/api/getCharStats', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: this.state.email })
        })
        .then(res => {return res.json()})
        .then(res => this.props.dispatch({ type: 'GET_CHARDATA', payload: res }))
        
    }

    render() {
        let incorrectPassword;
        if (this.state.auth === true  && this.props.state.lockedOut === false ) {
            return <Redirect to="/street" />
        }
        if (this.state.auth === true  && this.props.state.lockedOut === true ) {
            return <Redirect to="/lockout" />
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
                        <p>Experience life on the streets. Hustle, fight, do what you have to do to survive.</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <form label="login" onSubmit={this.onSubmit}>
                            <p>Email: <input
                                type="email"
                                name="email"
                                placeholder="Enter email"
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                autoComplete="username"
                                required
                                /> </p>
                            <p>Password: <input 
                                type="password"
                                name="password"
                                placeholder="Enter password"
                                value={this.state.password}
                                onChange={this.handleInputChange}
                                autoComplete="current-password"
                                required
                                /> </p>
                            <button type="submit">Hit the Streets Running</button>
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
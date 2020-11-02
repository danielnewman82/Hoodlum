import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

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

    onSubmit = (e) => {
        e.preventDefault();
        fetch('/api/authenticate', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
              'Content-Type': 'application/json'
            }
          })
        .then(res => {res.json()})
        .then(error => console.log(error))
        }

    render() {
        if (this.state.newAccount === false) {
            return <Redirect to="/street" />
        }
        if (this.state.newAccount === true) {
            return <Redirect to="/signup" />
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
                            Email: <input
                                type="email"
                                name="email"
                                placeholder="Enter email"
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                required
                                /> <br />
                            Password: <input 
                                type="password"
                                name="password"
                                placeholder="Enter password"
                                value={this.state.password}
                                onChange={this.handleInputChange}
                                required
                                /> <br />
                            <button type="submit" value="Submit">Hit the Streets Running</button>
                        </form>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Social identity (Google, Facebook, etc) providers coming soon!
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
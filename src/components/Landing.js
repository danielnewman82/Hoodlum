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
        this.state = { emailInput : "", passwordInput : "", email : [] };
        this.validateEmailInput = this.validateEmailInput.bind(this);
    }

    handleEmailInput = (e) => {
        this.setState({ emailInput: e.target.value })
    }
    handlePasswordInput = (e) => {
        this.setState({ passwordInput: e.target.value })
    }

    getEmails = () => {
        fetch('/api/getEmails')
        .then(res => res.json())
        .then(emails => emails.map(({email}) => email))
        .then(email => this.setState({ email }))
        return new Promise(resolve => {
            setTimeout(() => {
              resolve('Email list fetched.');
            }, 100);
          });
    };

    validateEmailInput = async () => {
        const result = await this.getEmails();
        console.log(result);
        if (this.state.email.includes(this.state.emailInput) === true) {
            console.log("Email address matched!");
            this.setState({ newAccount : false })
        } else this.setState({ newAccount : true })
    }
    

    //validatePassword = () => {}

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
                            Email: <input label="login" value={this.state.emailInput} onChange={this.handleEmailInput}></input><br />
                            Password: <input label="login" value={this.state.passwordInput} onChange={this.handlePasswordInput}></input>
                        </form>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <button type="submit" onClick={this.validateEmailInput}>Hit the Streets Running</button>
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
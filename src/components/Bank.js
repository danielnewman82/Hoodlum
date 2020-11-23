import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function mapStateToProps(state) {
    return {state};
}

class Bank extends Component {
    constructor(props) {
        super(props)
        this.state = { deposit : this.props.state.cashInHand , withdrawal : this.props.state.cashInBank, 
        depositForm : false, depositFailed : false, depositSuccess : false, withdrawalForm: false, 
        withdrawalFailed : false, withdrawalSuccess : false }
    }

    depositForm = () => {
        this.setState({ depositForm : true });
    }

    withdrawalForm = () => {
        this.setState({ withdrawalForm : true })
    }

    handleDepositChange = (e) => {
        this.setState({ deposit : e.target.value });
    }

    handleWithdrawalChange = (e) => {
        this.setState({ withdrawal : e.target.value });
    }

    sync = () => {
        fetch('/api/getCharStats', {
            method: 'POST',
            body: JSON.stringify({email: this.props.state.email}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(res => this.props.dispatch({ type: 'GET_CHARDATA', payload: res }))
    }

    deposit = () => {
        if (this.state.deposit < 0) {this.setState({ deposit : this.props.state.cashInHand }) }
        if (this.state.deposit > this.props.state.cashInHand) {
            fetch('/api/updateCharStats', {
                method: 'PUT',
                body: JSON.stringify({ email: this.props.state.email, cashInBank: (this.props.state.cashInBank + this.state.deposit), 
                    cashInHand: (this.props.state.cashInHand - this.state.deposit) }),
                headers: {
                  'Content-Type': 'application/json'
                }
              })
            .then(this.setState({ depositForm : false, depositFailed : true }) )
        }   else {
                fetch('/api/updateCharStats', {
                    method: 'PUT',
                    body: JSON.stringify({ email: this.props.state.email, 
                        cashInBank: (this.props.state.cashInBank + this.state.deposit), 
                        cashInHand: (this.props.state.cashInHand - this.state.deposit) }),
                    headers: {
                      'Content-Type': 'application/json'
                    }
                  })
                  .then(this.setState({ depositSuccess : true, depositForm : false }))
 
        }
    }

    withdrawal = () => {
        if (this.state.withdrawal < 0) {this.setState({ withdrawal : this.props.state.cashInBank }) }
        if (this.state.withdrawal > this.props.state.cashInBank) {
            fetch('/api/updateCharStats', {
                method: 'PUT',
                body: JSON.stringify({ email: this.props.state.email, cashInBank: (this.props.state.cashInBank - this.state.withdrawal), 
                    cashInHand: (this.props.state.cashInHand + this.state.withdrawal) }),
                headers: {
                  'Content-Type': 'application/json'
                }
              })
            .then(this.setState({ withdrawalForm : false, withdrawalFailed : true }) )
        }   else {
                fetch('/api/updateCharStats', {
                    method: 'PUT',
                    body: JSON.stringify({ email: this.props.state.email, 
                        cashInBank: (this.props.state.cashInBank - this.state.withdrawal), 
                        cashInHand: (this.props.state.cashInHand + this.state.withdrawal) }),
                    headers: {
                      'Content-Type': 'application/json'
                    }
                  })
                  .then(this.setState({ withdrawalSuccess : true, withdrawalForm : false }))
 
        }
    }

    render() {
        if (this.state.withdrawalForm === true) {
            return (
                <Container>
                    <Row>
                        <Col>
                        <h3>The Credit Union</h3>
                        </Col> 
                    </Row>
                    <Row>
                        <hr />
                    </Row>
                    <Row>
                        <Col>
                            And how much would you like to withdraw?
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <input type="number" onChange={this.handleWithdrawalChange} 
                            value={this.state.withdrawal} min="0" max={this.props.state.cashInBank} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <button onClick={this.withdrawal}>Withdraw Cash</button>
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
        if (this.state.withdrawalFailed === true) {
            return (
                <Container>
                    <Row>
                        <Col>
                        <h3>The Credit Union</h3>
                        </Col> 
                    </Row>
                    <Row>
                        <hr />
                    </Row>
                    <Row>
                        <Col>
                            You don't have that much money to withdraw. You clean out your account, a total of 
                            <span id="cash"> ${this.props.state.cashInHand}</span>.
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Link to="/street"><button onClick={this.sync}>Back To The Street</button></Link>
                        </Col>
                </Row>
                </Container>
            )
        }
        if (this.state.withdrawalSuccess === true) {
            return (
                <Container>
                    <Row>
                        <Col>
                        <h3>The Credit Union</h3>
                        </Col> 
                    </Row>
                    <Row>
                        <hr />
                    </Row>
                    <Row>
                        <Col>
                            You have withdrawn <span id="cash">${this.state.withdrawal}</span> from the bank. 
                            Don't squander it on stupid bullshit.
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Link to="/street"><button onClick={this.sync}>Back To The Street</button></Link>
                        </Col>
                </Row>
                </Container>
            )
        }
        if (this.state.depositForm === true) {
            return (
                <Container>
                    <Row>
                        <Col>
                        <h3>The Credit Union</h3>
                        </Col> 
                    </Row>
                    <Row>
                        <hr />
                    </Row>
                    <Row>
                        <Col>
                            And how much would you like to deposit?
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <input type="number" onChange={this.handleDepositChange} 
                            value={this.state.deposit} min="0" max={this.props.state.cashInHand} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <button onClick={this.deposit}>Deposit Cash</button>
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
        if (this.state.depositFailed === true) {
            return (
                <Container>
                    <Row>
                        <Col>
                        <h3>The Credit Union</h3>
                        </Col> 
                    </Row>
                    <Row>
                        <hr />
                    </Row>
                    <Row>
                        <Col>
                            You don't have that much money to deposit. You deposit what you have on hand, for a total balance of 
                            <span id="cash"> ${this.props.state.cashInBank + this.props.state.cashInHand}</span>.
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Link to="/street"><button onClick={this.sync}>Back To The Street</button></Link>
                        </Col>
                </Row>
                </Container>
            )
        }
        if (this.state.depositSuccess === true) {
            return (
                <Container>
                    <Row>
                        <Col>
                        <h3>The Credit Union</h3>
                        </Col> 
                    </Row>
                    <Row>
                        <hr />
                    </Row>
                    <Row>
                        <Col>
                            You have deposited <span id="cash">${this.state.deposit}</span> in the bank. Very sensible of you.
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Link to="/street"><button onClick={this.sync}>Back To The Street</button></Link>
                        </Col>
                </Row>
                </Container>
            )
        }
        return (
            <Container>
                <Row>
                    <Col>
                        <h3>The Credit Union</h3>
                    </Col> 
                </Row>
                <Row>
                    <hr />
                </Row>
                <Row>
                    <Col>
                        You are in the lobby of the neighborhood credit union. The upmarket banks downtown don't really
                        welcome the business of people like you, but the credit union specifically serves them. A chipper
                        young teller greets you, "How can I help you?"
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <button onClick={this.depositForm}>(D)eposit Cash</button>
                    </Col>
                    <Col>
                        <button onClick={this.withdrawalForm}>(W)ithdraw Cash</button>
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

export default connect(mapStateToProps)(Bank)
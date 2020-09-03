import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {state};
}

class Bank extends Component {
    constructor(props) {
        super(props)
        this.state = { deposit : this.props.state.cashInHand , withdrawal : this.props.state.cashInBank, 
        depositForm : false, depositFailed : false, depositSuccess : false, withdrawalForm: false, 
        withdrawalFailed : false, withdrawalSuccess : false }
        
        this.handleDepositChange = this.handleDepositChange.bind(this);
        this.handleWithdrawalChange = this.handleWithdrawalChange.bind(this);
    }

    depositForm = () => {
        this.setState({ depositForm : true });
    }

    withdrawalForm = () => {
        this.setState({ withdrawalForm : true })
    }

    handleDepositChange(event) {
        this.setState({ deposit : event.target.value });
    }

    handleWithdrawalChange(event) {
        this.setState({ withdrawal : event.target.value });
    }

    street = () => {
        this.props.dispatch({ type: 'CHANGE_LOCATION', payload: "Out On The Street"})
    }

    deposit = () => {
        if (this.state.deposit > this.props.state.cashInHand) {
            this.setState({ depositFailed : true, depositForm : false })
            this.props.dispatch({ type: 'CHANGE_CASHINHAND', payload: -(parseInt(this.props.state.cashInHand, 10)) })
            this.props.dispatch({ type: 'CHANGE_CASHINBANK', payload: (parseInt(this.props.state.cashInHand, 10)) })
        } 
        if (this.state.deposit < 0) {
            this.setState({ deposit : (this.state.deposit * -1) })
            this.setState({ depositFailed : true, depositForm : false })
            this.props.dispatch({ type: 'CHANGE_CASHINHAND', payload: -(parseInt(this.props.state.cashInHand, 10)) })
            this.props.dispatch({ type: 'CHANGE_CASHINBANK', payload: (parseInt(this.props.state.cashInHand, 10)) })
        }
            else {
            this.setState({ depositSuccess : true, depositForm : false })
            this.props.dispatch({ type: 'CHANGE_CASHINHAND', payload: -(parseInt(this.state.deposit, 10)) })
            this.props.dispatch({ type: 'CHANGE_CASHINBANK', payload: (parseInt(this.state.deposit, 10)) })
        }
    }

    withdrawal = () => {
        if (this.state.withdrawal > this.props.state.cashInBank) {
            this.setState({ withdrawalFailed : true, withdrawalForm : false })
            this.props.dispatch({ type: 'CHANGE_CASHINHAND', payload: (parseInt(this.props.state.cashInBank, 10)) })
            this.props.dispatch({ type: 'CHANGE_CASHINBANK', payload: -(parseInt(this.props.state.cashInBank, 10)) })
        } 
        if (this.state.withdrawal < 0) {
            this.setState({ withdrawal : (this.state.withdrawal * -1) })
            this.setState({ withdrawalFailed : true, withdrawalForm : false })
            this.props.dispatch({ type: 'CHANGE_CASHINHAND', payload: (parseInt(this.props.state.cashInBank, 10)) })
            this.props.dispatch({ type: 'CHANGE_CASHINBANK', payload: -(parseInt(this.props.state.cashInBank, 10)) })
        }
            else {
            this.setState({ withdrawalSuccess : true, withdrawalForm : false })
            this.props.dispatch({ type: 'CHANGE_CASHINHAND', payload: (parseInt(this.state.withdrawal, 10)) })
            this.props.dispatch({ type: 'CHANGE_CASHINBANK', payload: -(parseInt(this.state.withdrawal, 10)) })
        }
    }

    render() {
        if (this.state.withdrawalForm === true) {
            return (
                <Container>
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
                            <button type="button" onClick={this.street}>Back To The Street</button>
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
                            You don't have that much money to withdraw. You clean out your account, a total of 
                            <span id="cash"> ${this.props.state.cashInHand}</span>.
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <button type="button" onClick={this.street}>Back To The Street</button>
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
                            You have withdrawn <span id="cash">${this.state.withdrawal}</span> from the bank. 
                            Don't squander it on stupid bullshit.
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <button type="button" onClick={this.street}>Back To The Street</button>
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
                            <button type="button" onClick={this.street}>Back To The Street</button>
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
                            You don't have that much money to deposit. You deposit what you have on hand, for a total balance of 
                            <span id="cash"> ${this.props.state.cashInBank}</span>.
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <button type="button" onClick={this.street}>Back To The Street</button>
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
                            You have deposited <span id="cash">${this.state.deposit}</span> in the bank. Very sensible of you.
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <button type="button" onClick={this.street}>Back To The Street</button>
                        </Col>
                </Row>
                </Container>
            )
        }
        return (
            <Container>
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
                        <button type="button" onClick={this.street}>Back To The Street</button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default connect(mapStateToProps)(Bank)
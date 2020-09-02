import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {state};
}

class Bank extends Component {
    constructor(props) {
        super(props)
        this.state = { deposit : '', withdrawal : '', depositForm : false, depositFailed : false, 
        depositSuccess : false, withdrawalFailed : false, withdrawalSuccess : false }
    }

    depositForm = () => {
        this.setState({ depositForm : true })
    }

    street = () => {
        this.props.dispatch({ type: 'CHANGE_LOCATION', payload: "Out On The Street"})
    }

    deposit = () => {
        if (this.state.deposit > this.props.state.cashInHand) {
            this.setState({ depositFailed : true })
            this.props.dispatch({ type: 'CHANGE_CASHINHAND', payload: -(this.props.state.cashInHand)})
            this.props.dispatch({ type: 'CHANGE_CASHINBANK', payload: (this.props.state.cashInHand)})
        } else {
            this.setState({ depositSuccess : true })
            this.props.dispatch({ type: 'CHANGE_CASHINHAND', payload: -(this.state.deposit) })
            this.props.dispatch({ type: 'CHANGE_CASHINBANK', payload: (this.state.deposit)})
        }
    }
    render() {
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
                            <input type="number" value={this.state.deposit}></input>
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
                            You don't have that much money to deposit. Instead, you deposit <span id="cash">${this.props.state.cashInHand}</span>.
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
                        <button onClick={this.withdraw}>(W)ithdraw Cash</button>
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
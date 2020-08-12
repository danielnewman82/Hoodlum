import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row, Container } from 'react-bootstrap';

function mapStateToProps(state) {
    return state
}

class Hospital extends Component {
    constructor(props) {
        super(props)
        this.state = {totalDamage : (this.props.maxHitPoints - this.props.curHitPoints ), costToHeal : 0}
    }

    street = () => {
        this.props.dispatch({ type: 'CHANGE_LOCATION', payload: "Out On The Street"})
    }

    heal = () => {
        this.props.dispatch({ type: 'RESTORE_HP', payload: this.state.totalDamage})
    }

    render() {
        if (this.props.curHitPoints < this.props.maxHitPoints) {
            return ( 
            <Container>
                <Row>
                    <Col>
                        You arrive in the waiting room of the hospital downtown. It is surprisingly clean, and the staff
                        are cordially welcoming. But once you actually see a doctor, it's down to brass tacks. Health
                        care for the uninsured, while not as obscenely expensive as it once was, still isn't free, or even 
                        cheap. The doctor tells you bluntly, "It'll cost you ${(this.state.totalDamage * 10)} to patch you up."
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <button type="button" onClick={this.heal}>Pay For Treatment</button>
                    </Col>
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
                        The hospital staff look you up and down and tell you, "You're fine, don't waste our time."
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

export default connect(mapStateToProps)(Hospital)
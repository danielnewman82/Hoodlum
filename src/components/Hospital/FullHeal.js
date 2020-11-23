import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function mapStateToProps(state) {
    return {state};
  }

class FullHeal extends Component {
    constructor(props) {
        super(props);
        this.state = { postFullHeal : false }
    }

    heal = () => {
        fetch('/api/updateCharStats', {
            method: 'PUT',
            body: JSON.stringify({ email: this.props.state.email, curHitPoints: this.props.state.maxHitPoints, 
                cashInHand: this.props.state.cashInHand - (this.props.totalDamage * 5) }),
            headers: {
              'Content-Type': 'application/json'
            }
          })
        this.setState({ postFullHeal : true })
    }

render() {
    if (this.state.postFullHeal === true) {
        return (
            <Container>
                <Row>
                    <Col>
                    <h3>At The Hospital</h3>
                    </Col> 
                </Row>
                <Row>
                    <hr />
                </Row>
                <Row>
                    <Col>
                        The trauma docs treat your injuries with impressive skill and alacrity. You are ready to
                        get back out there in no time!
                    </Col>
                </Row>
                <Row>
                <Col>
                    <Link to="/street"><button onClick={this.props.sync}>Back To The Street</button></Link>
                </Col>
                </Row>
            </Container>
        )
    }
    return ( 
        <Container>
            <Row>
                <Col>
                    <h3>At The Hospital</h3>
                </Col> 
            </Row>
            <Row>
                <hr />
            </Row>
            <Row>
                <Col>
                    You arrive in the waiting room of the hospital downtown. It is surprisingly clean, and the staff
                    are cordially welcoming. But once you actually see a doctor, it's down to brass tacks. Health
                    care for the uninsured, while much cheaper than it once was, still isn't free. The doctor tells 
                    you bluntly, "It'll cost you <span id="cash"> ${(this.props.totalDamage * 5)}</span> to patch you up."
                </Col>
            </Row>
            <Row>
                <Col>
                    <button type="button" onClick={this.heal}>Pay For Treatment</button>
                </Col>
                <Col>
                    <Link to="/street"><button>Back To The Street</button></Link>
                </Col>
            </Row>
        </Container>
        )
    }
}

export default connect(mapStateToProps)(FullHeal)
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function mapStateToProps(state) {
    return {state};
  }

class PartialHeal extends Component {
    constructor(props) {
        super(props);
        this.state = { postHeal : false, healableDamage : Math.floor(this.props.state.cashInHand / 5) }
    }

    heal = () => {
        fetch('/api/updateCharStats', {
            method: 'PUT',
            body: JSON.stringify({ email: this.props.state.email, curHitPoints: this.props.state.curHitPoints + this.state.healableDamage,
                cashInHand: this.props.state.cashInHand - (this.state.healableDamage * 5) }),
            headers: {
              'Content-Type': 'application/json'
            }
          })
        this.setState({ postHeal : true })
    }

    render() {
        if (this.state.postHeal === true) {
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
                            The trauma docs do what they can, and it helps a little, but you still feel kind of run-down.
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
                        You sheepishly explain to the doctor that you don't have that kind of money. He rolls his 
                        eyes ever-so-slightly in lack of surprise, as you ask, "I have 
                        <span id="cash"> ${this.props.state.cashInHand}</span>, can you help me at all for that much?" 
                        The doctor replies, "Yes, we can at least keep you from being permanently crippled or disfigured. You 
                        still won't be at 100 percent for a while, but it's better than nothing."
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <button onClick={this.heal}>Heal {this.state.healableDamage} for <span id="cash">${this.state.healableDamage * 5}</span></button>
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

export default connect(mapStateToProps)(PartialHeal)
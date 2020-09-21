import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function mapStateToProps(state) {
    return {state};
}

class Hospital extends Component {
    constructor(props) {
        super(props)
        this.state = {totalDamage : (this.props.state.maxHitPoints - this.props.state.curHitPoints ), costToHeal : 0,
                    postFullHeal : false, postPartialHeal : false, tooBroke : false, partialHeal : 0 }
    }

    componentDidMount() {
        this.props.dispatch({ type: 'CHANGE_LOCATION', payload: "At The Hospital"})
    }

    heal = () => {
        if (this.props.state.cashInHand < this.state.totalDamage * 5) {
            this.setState({ tooBroke : true, partialHeal : (Math.floor(this.props.state.cashInHand / 5)), })
        }
        else {
        this.props.dispatch({ type: 'CHANGE_HP', payload: this.state.totalDamage})
        this.props.dispatch({ type: 'CHANGE_CASHINHAND', payload: -(this.state.totalDamage * 5)})
        this.setState({ postFullHeal : true })
        }
    }

    partialHeal = () => {
        this.setState({ tooBroke : false, postPartialHeal : true  })
        this.props.dispatch({ type: 'CHANGE_HP', payload: this.state.partialHeal})
        this.props.dispatch({ type: 'CHANGE_CASHINHAND', payload: -(this.state.partialHeal * 5)})
    }

    render() {
        if (this.props.state.cashInHand < 5 && this.state.postPartialHeal === false && this.state.postFullHeal === false) {
            return (
                <Container>
                    <Row>
                        <Col>
                            You can't afford health care. Good luck with your life.
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Link to="/street"><button onClick={this.street}>Back To The Street</button></Link>
                        </Col>
                    </Row>
                </Container>
            )
        }
        if (this.state.postFullHeal === true) {
            return (
                <Container>
                    <Row>
                        <Col>
                            The trauma docs treat your injuries with impressive skill and alacrity. You are ready to
                            get back out there in no time!
                        </Col>
                    </Row>
                    <Row>
                    <Col>
                        <Link to="/street"><button onClick={this.street}>Back To The Street</button></Link>
                    </Col>
                    </Row>
                </Container>
            )
        }
        if (this.state.postPartialHeal === true) {
            return (
                <Container>
                    <Row>
                        <Col>
                            The trauma docs do what they can, and it helps a little, but you still feel kind of run-down.
                        </Col>
                    </Row>
                    <Row>
                    <Col>
                    <Link to="/street"><button onClick={this.street}>Back To The Street</button></Link>
                    </Col>
                    </Row>
                </Container>
            )
        }
        if (this.state.tooBroke === true && this.props.state.cashInHand > 0) {
            return (
                <Container>
                    <Row>
                        <Col>
                            You sheepishly explain to the doctor that you don't have that kind of money. He rolls his 
                            eyes ever-so-slightly in lack of surprise, as you ask, "I have 
                            ${this.props.state.cashInHand}, can you help me at all for that much?" The doctor replies, 
                            "Yes, we can at least keep you from being permanently crippled or disfigured. You still 
                            won't be at 100 percent for a while, but it's better than nothing."
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <button onClick={this.partialHeal}>Heal {this.state.partialHeal} for <span id="cash">${this.state.partialHeal * 5}</span></button>
                        </Col>
                    </Row>
                </Container>
            )
        }
        if (this.props.state.curHitPoints === this.props.state.maxHitPoints) {
        return (
            <Container>
                <Row>
                    <Col>
                        The hospital intake nurse looks you up and down and tells you, "You're fine. Don't waste my 
                        time with your hypochondria."
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Link to="/street"><button onClick={this.street}>Back To The Street</button></Link>
                    </Col>
                </Row>
            </Container>
        )
    }
    return ( 
        <Container>
            <Row>
                <Col>
                    You arrive in the waiting room of the hospital downtown. It is surprisingly clean, and the staff
                    are cordially welcoming. But once you actually see a doctor, it's down to brass tacks. Health
                    care for the uninsured, while much cheaper than it once was, still isn't free. The doctor tells 
                    you bluntly, "It'll cost you ${(this.state.totalDamage * 5)} to patch you up."
                </Col>
            </Row>
            <Row>
                <Col>
                    <button type="button" onClick={this.heal}>Pay For Treatment</button>
                </Col>
                <Col>
                <Link to="/street"><button onClick={this.street}>Back To The Street</button></Link>
                </Col>
            </Row>
        </Container>
        )
    }
}
export default connect(mapStateToProps)(Hospital)
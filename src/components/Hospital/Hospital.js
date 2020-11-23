import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TooBroke from './TooBroke';
import PartialHeal from './PartialHeal';
import FullHeal from './FullHeal';

function mapStateToProps(state) {
    return {state};
}

class Hospital extends Component {
    constructor(props) {
        super(props)
        this.state = { totalDamage : (this.props.state.maxHitPoints - this.props.state.curHitPoints ), 
            costToHeal : (this.props.state.maxHitPoints - this.props.state.curHitPoints ) * 5 }
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

    render() {
        if (this.props.state.cashInHand < 5 && this.props.state.curHitPoints < this.props.state.maxHitPoints) {
            return <TooBroke />
        }

        if (this.props.state.cashInHand >= this.state.costToHeal && this.props.state.curHitPoints < this.props.state.maxHitPoints) {
            return <FullHeal totalDamage={this.state.totalDamage} sync={this.sync}/>
        }

        if (this.props.state.cashInHand >= 5 && this.props.state.cashInHand < this.state.costToHeal ) {
            return <PartialHeal sync={this.sync}/>
        } else

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
                        The hospital intake nurse looks you up and down and tells you, "You're fine. Don't waste my 
                        time with your hypochondria."
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
export default connect(mapStateToProps)(Hospital)
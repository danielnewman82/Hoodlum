import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function mapStateToProps(state) {
    return {state};
}

class PocketKnife extends Component {
    constructor(props) {
        super(props);
        this.state = { insufficientFunds : false, transactionComplete : false }
    }

    buy = () => {
        if (this.props.state.cashInHand < (40 - this.props.state.weapon.sellPrice) ) {
                this.setState({ insufficientFunds : true, transactionComplete : false })
            }
        else {
            this.props.dispatch({ type: 'CHANGE_CASHINHAND', payload: -(40 - this.props.state.weapon.sellPrice) }); 
            this.props.dispatch({ type: 'CHANGE_WEAPON', payload: {name : " Pocket Knife", sellPrice: 10, atkPower: 7} });
            this.setState({ transactionComplete : true })
        }
    }
    
    render() {
        if (this.state.transactionComplete === true) {
            return (
                <Container>
                    <Row>
                        <Col>
                            You purchase the pocket knife.
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Link to="/street"><button>Back To The Streets</button></Link>
                        </Col>
                    </Row>
                </Container>
            )
        }
        if (this.state.insufficientFunds === true) {
            return (
                <Container>
                    <Row>
                        <Col>
                            You don't have enough cash on you to buy it.
                        </Col>
                    </Row>
                    <Row>
                    <Col>
                        <Link to="/weaponShop"><button>Back To The Weapon Menu</button></Link>
                    </Col>
                    </Row>
                </Container>
            )
        }
        return (
            <Container>
                <Row>
                    <Col>
                        A small, sharp piece of steel, ideal for when you got to cut a bitch.
                    </Col>
                </Row>
                <Row>
                    <Col>
                        It costs <span id="cash">$40</span>. After the trade-in value
                        of your current weapon, it's <span id="cash">${40 - 
                        this.props.state.weapon.sellPrice}</span>. Buy it?
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <button onClick={this.buy}>Buy a Pocket Knife</button>
                    </Col>
                    <Col>
                        <Link to="/weaponShop"><button>Back To The Weapon Menu</button></Link>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default connect(mapStateToProps)(PocketKnife)
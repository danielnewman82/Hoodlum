import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PocketKnife from './PocketKnife';
import BaseballBat from './BaseballBat';

  /* weapon data to implement:
  fists : { buyPrice : 0, sellprice : 0, atkPower : 4 },
  pocketKnife : { buyPrice : 40, sellPrice : 10, atkPower : 7},
  baseballBat : { buyPrice : 60, sellPrice : 15, atkPower : 10},
  slingshot : { buyPrice : 80, sellPrice : 20, atkPower : 13},
  pelletRifle : { buyPrice : 100, sellPrice : 25, atkPower : 16},
  deuceDeuce : { buyPrice : 200, sellPrice : 50, atkPower: 20},
  clock17 : { buyPrice : 500, sellPrice : 200, atkPower: 25},
  bolt45 : { buyPrice : 800, sellPrice : 300, atkPower : 30},
  magnum : { buyPrice : 1200, sellPrice : 400, atkPower : 40},
  shotgun : { buyPrice : 1500, sellPrice : 500, atkPower : 50},
  uzi : { buyPrice : 2000, sellPrice : 750, atkPower : 60},
  boltRifle : { buyPrice : 3000, sellPrice : 1000, atkPower : 70},
  sks : { buyPrice : 4000, sellPrice : 1300, atkPower : 80},
  ar15 : { buyPrice: 5000, sellPrice : 1800, atkPower : 100},
  g3 : { buyPrice : 6000, sellPrice : 2500, atkPower : 120},
  aug : { buyPrice : 8000, sellPrice : 3000, atkPower : 150},
  minimi : { buyPrice : 10000, sellPrice : 4000, atkPower : 180},
 */

function mapStateToProps(state) {
    return {state};
}

class WeaponShop extends Component {
    constructor(props) {
        super(props);
        this.state = { pocketKnife: false, baseballBat : false, slingshot: false, pelletRifle: false }
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

    pocketKnife = () => { this.setState({ pocketKnife : true }) }
    baseballBat = () => { this.setState({ baseballBat : true }) }

    render() {
        if ( this.state.pocketKnife === true ) {
            return <PocketKnife sync={this.sync} />
        }
        if ( this.state.baseballBat === true ) {
            return <BaseballBat sync={this.sync} />
        }
        if (this.props.state.level < 3) {
            return (
                <Container>
                    <Row>
                        <Col>
                            <h3>Spider's Gun Shop</h3>
                        </Col> 
                    </Row>
                    <Row>
                        <hr />
                    </Row>
                    <Row>
                    <Col>
                    Most of the gun shops in this neighborhood have gone out of business. Either they didn't
                    want to deal with the urban blight, or the city pushed them out, blaming them for crime.
                    Spider's is the only holdout, and the proprietor tries to maintain a semblance of propriety.
                    But he isn't stupid; he knows that his business depends on dealing with shady characters.
                    A tall, wiry blond man with a goatee and a revolver on his hip, he looks you up and down and flatly tells you, "C'mon,
                    you know I can't be sellin' you no gun, kid."
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <button onClick={this.pocketKnife}>(1) Pocket Knife - $40</button>
                    </Col>
                    <Col>
                        <button onClick={this.baseballBat}>(2) Baseball Bat - $60</button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <button>(3) Slingshot - $80</button>
                    </Col>
                    <Col>
                        <button>(4) Pellet Rifle - $100</button>
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
    
            return (
                <Container>
                    <Row>
                        <Col>
                            <h3>Spider's Gun Shop</h3>
                        </Col> 
                    </Row>
                    <Row>
                        <hr />
                    </Row>
                    <Row>
                        <Col>
                        Most of the gun shops in this neighborhood have gone out of business. Either they didn't
                        want to deal with the urban blight, or the city pushed them out, blaming them for crime.
                        Spider's is the only holdout, and the proprietor tries to maintain a semblance of propriety.
                        But he isn't stupid; he knows that his business depends on dealing with shady characters.
                        A tall, wiry blond man with a goatee and a revolver on his hip, he eyes you cautiously as you 
                        enter his shop. "Can I help you with somethin', brother?", he asks.
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <button>(1) Pocket Knife - $20</button>
                        </Col>
                        <Col>
                        <button>(2) Baseball Bat - $40</button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <button>(3) Slingshot - $60</button>
                        </Col>
                        <Col>
                        <button>(4) Pellet Rifle - $100</button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <button>(5) Krueger Deuce-Deuce - $200</button>
                        </Col>
                        <Col>
                        <button>(6) Clock 17 - $500</button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <button>(7) Bolt .45 - $800</button>
                        </Col>
                        <Col>
                        <button>(8) S&E .357 Magnum - $1,200</button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <button>(9) Bloomberg 12 Gauge Pump - $1,500</button>
                        </Col>
                        <Col>
                        <button>(10) Oozey Machine Pistol - $2,000</button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <button>(11) Lamington Bolt Rifle - $3,000</button>
                        </Col>
                        <Col>
                        <button>(12) Simonov Karabin - $4,000</button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <button>(13) Arrr-15 - $5,000</button>
                        </Col>
                        <Col>
                        <button>(14) Hacker & Kooch G3 - $6,000</button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <button>(15) Schtoyl Oogle - $7,000</button>
                        </Col>
                        <Col>
                        <button>(15) Effin' Mini-Me Machinegun - $9,000</button>
                        </Col>
                    </Row>
                        <Col>
                        <button>(16) a Goddamn Bazooka - $15,000</button>
                        </Col>
                    <Row>
                        <Col>
                        <Link to="/street"><button>Back To The Street</button></Link>
                        </Col>
                    </Row>
                </Container>
        )
    }
}

export default connect(mapStateToProps)(WeaponShop);
import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function mapStateToProps(state) {
    return {state};
  }

class Mob extends Component {
    constructor(props) {
        super(props);
        this.state = { intervene : false, join : false, walk : false, curHitPoints: this.props.state.curHitPoints }
    }

    intervene = () => {
        this.setState({ intervene : true, curHitPoints : this.state.curHitPoints - (Math.floor(Math.random() * 6) + 10 ) })
    }
    
    join = () => {
        this.setState({ join : true })
    }

    walk = () => {
        this.setState({ walk : true })
    }
    fight = () => {
        //calculate damage dealt and taken this round
        this.setState({ turnResults : true,
                        damageDealt : (Math.ceil(this.props.state.weapon.atkPower / 2)) + (Math.ceil(Math.random() * 
                        (this.props.state.weapon.atkPower / 2))),
                        damageTaken : (Math.max(0, (Math.ceil(Math.random() * 4) - this.props.state.armor.defPower))),
                    })
        // subtract damage from mob and player HP totals
        this.setState({ mobHP : this.state.mobHP - this.state.damageDealt, playerHP : this.state.playerHP - this.state.damageTaken })
        // if player HP reaches 0 first, subtract half from cash in hand and lockout for the day
        if (this.state.playerHP - this.state.damageTaken <= 0) {
            this.setState({ turnResults : false, fightResults : "lose", 
                cashGained : -(Math.ceil(this.props.state.cashInHand * 0.5)), 
                lockedOut: true })
        }        
        // if mob HP reaches 0 first, give cash and XP
        if ((this.state.mobHP - this.state.damageDealt) <= 0 && (this.state.playerHP - this.state.damageTaken) > 0) {
            this.setState({ cashGained : Math.ceil(Math.random() * 16) + 4, xpGained : Math.ceil((Math.random() * 6) + 4), 
                turnResults : false, fightResults : "win"  })
        }
        // this guy exists solely as a workaround, so React will render current HP totals
        this.setState({ flipFlop : !this.state.flipFlop })
    }

    resolution = () => {
        if (this.state.intervene === true && this.state.curHitPoints > 0) {
            fetch('/api/updateCharStats', {
                method: 'PUT',
                body: JSON.stringify({ email: this.props.state.email, 
                    repScore: (this.props.state.repScore + 5),
                    xp: (this.props.state.xp + 25),
                    pveFights : this.props.state.pveFights - 1,
                    curHitPoints : this.state.curHitPoints,
                    assault0 : true }),
                headers: {
                  'Content-Type': 'application/json'
                }
              })
            .then( fetch('/api/getCharStats', {
                method: 'POST',
                body: JSON.stringify({email: this.props.state.email}),
                headers: {
                    'Content-Type': 'application/json'
                }
            }) )
            .then(res => res.json())
            .then(res => this.props.dispatch({ type: 'GET_CHARDATA', payload: res }))
        }
        if (this.state.intervene === true && this.state.curHitPoints <= 0) {
            fetch('/api/updateCharStats', {
                method: 'PUT',
                body: JSON.stringify({ email: this.props.state.email, 
                    repScore: (this.props.state.repScore + 5),
                    xp: (this.props.state.xp + 25),
                    pveFights : this.props.state.pveFights - 1,
                    curHitPoints : this.state.curHitPoints,
                    lockedOut : true,
                    assault0 : true }),
                headers: {
                  'Content-Type': 'application/json'
                }
              })
            .then( fetch('/api/getCharStats', {
                method: 'POST',
                body: JSON.stringify({email: this.props.state.email}),
                headers: {
                    'Content-Type': 'application/json'
                }
            }) )
            .then(res => res.json())
            .then(res => this.props.dispatch({ type: 'GET_CHARDATA', payload: res }))
        }
        if (this.state.join === true) {
            fetch('/api/updateCharStats', {
                method: 'PUT',
                body: JSON.stringify({ email: this.props.state.email, 
                    repScore: (this.props.state.repScore - 10),
                    xp: (this.props.state.xp + 10),
                    pveFights : this.props.state.pveFights - 1,
                    assault0 : true }),
                headers: {
                  'Content-Type': 'application/json'
                }
              })
            .then( fetch('/api/getCharStats', {
                method: 'POST',
                body: JSON.stringify({email: this.props.state.email}),
                headers: {
                    'Content-Type': 'application/json'
                }
            }) )
            .then(res => res.json())
            .then(res => this.props.dispatch({ type: 'GET_CHARDATA', payload: res }))
        }
        if (this.state.walk === true) {
            fetch('/api/updateCharStats', {
                method: 'PUT',
                body: JSON.stringify({ email: this.props.state.email, 
                    repScore: (this.props.state.repScore - 5),
                    xp: (this.props.state.xp + 15),
                    pveFights : this.props.state.pveFights - 1,
                    assault0 : true }),
                headers: {
                  'Content-Type': 'application/json'
                }
              })
            .then( fetch('/api/getCharStats', {
                method: 'POST',
                body: JSON.stringify({email: this.props.state.email}),
                headers: {
                    'Content-Type': 'application/json'
                }
            }) )
            .then(res => res.json())
            .then(res => this.props.dispatch({ type: 'GET_CHARDATA', payload: res }))
        }
    }

    render() {

    if (this.state.walk === true) {
        return (
            <Container>
                <Row>
                    <Col>
                        <h3>The City At Night</h3>
                    </Col> 
                </Row>
                <Row>
                    <hr />
                </Row>
                <Row>
                    <Col>
                        You assess the odds of this confrontation, and ascertain that you would prefer to keep all of your teeth
                        in your mouth. No sense in both of you getting mauled, so you keep your head down and briskly keep walking.
                        You are physically unscathed, though the noises you hear behind you are very unsettling. But it's just 
                        another night on the streets.
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link to="/theTrack"><button onClick={this.resolution}>Back To The Track</button></Link>
                    </Col>
                </Row>
            </Container>
        )
    }
    if (this.state.join === true) {
        return (
            <Container>
                <Row>
                    <Col>
                        <h3>The City At Night</h3>
                    </Col> 
                </Row>
                <Row>
                    <hr />
                </Row>
                <Row>
                    <Col>
                        You confidently approach the altercation and ask, "ooh, whatchu got here, fellas? Lemme get a slice of that. 
                        Ain't no fun if the homies can't have none, right?" The girl looks horrified, but the men snort and shove 
                        you back. "You ain't even grown, kid, and you ain't my homie. The fuck outta here with that shit before you 
                        get hurt." Dismayed, you keep moving, leaving them to do as they please.
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link to="/theTrack"><button onClick={this.resolution}>Back To The Track</button></Link>
                    </Col>
                </Row>
            </Container>
        )
    }
    if (this.state.intervene === true && this.state.curHitPoints <= 15) {
        return (
        <Container>
            <Row>
                <Col>
                    <h3>The City At Night</h3>
                </Col> 
            </Row>
            <Row>
                <hr />
            </Row>
            <Row>
                <Col>
                    Like a brave little toaster, you march right up to the men and tell them to leave the girl alone. They let her
                    go, alright, but turn their attention to you. Irked at your rude interruption, the three of them swat you back
                    and forth like a pinball on the bumpers. You finally collapse in a bloody, crumpled heap on the concrete, 
                    watching through swollen-shut eyes as your assailants swagger off down the street in search of further amusement,
                    chuckling amongst themselves at your misguided bravery. You could swear you caught a glimpse of their previous 
                    victim, lurking in a nearby shadow, before you lose consciousness.
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to="/"><button onClick={this.resolution}>(P)ass Out</button></Link>
                </Col>
            </Row>
        </Container>
        )
    }
    if (this.state.intervene === true && this.props.state.curHitPoints > 15) {
        return (
        <Container>
            <Row>
                <Col>
                    <h3>The City At Night</h3>
                </Col> 
            </Row>
            <Row>
                <hr />
            </Row>
            <Row>
                <Col>
                    Like a brave little toaster, you march right up to the men and tell them to leave the girl alone. They let her
                    go, alright, but turn their attention to you. Irked at your rude interruption, the three of them swat you back
                    and forth like a pinball on the bumpers. You survive the beating, barely, but ultimately they leave you in a 
                    bloody, crumpled heap on the concrete, chuckling amongst themselves at your misguided bravery as they swagger 
                    down the street in search of further amusement. Once you've staggered a couple blocks, bruised, and bloody,
                    the girl flags you down from the stoop of a brick rowhouse. "Oh my God, are you okay? Thank you so much for
                    getting my back, that was fucked up. I'm Jeanette, I guess I'll see you around?"
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to="/theTrack"><button onClick={this.resolution}>(S)crape Yourself Off The Ground</button></Link>
                </Col>
            </Row>
        </Container>
        )
    }
    return (
        <Container>
            <Row>
                <Col>
                    <h3>The City At Night</h3>
                </Col> 
            </Row>
            <Row>
                <hr />
            </Row>
            <Row>
                <Col>
                    As you wander the streets under flickering lamps, you pass the grimy wall of a liquor store. Three mean looking
                    men have a girl pinned against a wall. She looks to be about your age, maybe a couple years older. Their hands
                    are all over her, pulling at her clothes. When you stop, one of them looks you in the eyes and growls, "You
                    didn't see SHIT, kid. Keep walkin'."
                </Col>
            </Row>
            <Row>
                <Col>
                    What do you do?
                </Col>
            </Row>
            <Row>
                <Col>
                    <button onClick={this.intervene}>(I)ntervene</button>
                </Col>
                <Col>
                    <button onClick={this.join}>Try to (J)oin In</button>
                </Col>
                <Col>
                    <button onClick={this.walk}>Keep (W)alking</button>
                </Col>
            </Row>
        </Container>
        )
    }
}

export default connect(mapStateToProps)(Mob)
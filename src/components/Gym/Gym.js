import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function mapStateToProps(state) {
    return {state}
}

class Gym extends Component {
    constructor(props) {
        super(props);
        this.state = { notReady : false, ready : false, trainerFight : false }
    }

    questionTrainer = () => {
        if ( this.props.state.level === 1 && this.props.state.xp < 250) {
            this.setState({ notReady : true })
        }
        if ( this.props.state.level === 1 && this.props.state.xp >= 250) {
            this.setState({ ready : true})
        }
    }

/*     levelUpFight = () => {
        if ( this.props.state.level === 1 ) {
            return <Pookie />
        }
    } */

    render() {
        if (this.props.state.level === 1 && this.state.notReady === true) {
            return (
                <Container>
                    <Row>
                        <Col>
                        <h3>The Training Gym</h3>
                        </Col> 
                    </Row>
                    <Row>
                        <hr />
                    </Row>
                    <Row>
                        <Col>
                            The ring manager appraises your physique critically and says, "Nah, you ain't ready. Any of my
                            guys would mop the floor with you, right now. You need about {250 - this.props.state.xp} points
                            worth of experience before you'd even stand a chance against Pookie."
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
        if (this.props.state.level === 1 && this.state.ready === true) {
            return (
                <Container>
                    <Row>
                        <Col>
                        <h3>The Training Gym</h3>
                        </Col> 
                    </Row>
                    <Row>
                        <hr />
                    </Row>
                    <Row>
                        <Col>
                            The ring manager appraises your physique critically, before telling you, "Yeah, alright, you
                            look like you've packed on a little muscle. You're ready to get in the ring with Pookie, he
                            ain't all that tough, you might actually beat him. You ready now? No backing down, you fight 
                            'til one of youse goes down."
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <button onClick={this.levelUpFight}>Get in the Ring!</button>
                        </Col>
                        <Col>
                            <Link to="/street"><button>Chicken out and leave the gym</button></Link>
                        </Col>
                    </Row>
                </Container>
            )
        }
        return (
            <Container>
                <Row>
                    <Col>
                        <h3>The Training Gym</h3>
                    </Col> 
                </Row>
                <Row>
                    <hr />
                </Row>
                <Row>
                    <Col>
                        The neighborhood boxing gym smells of dried sweat and blood. Big, muscly looking dudes are
                         pummeling heavy bags, pumping iron, and throwing hands in the ring.
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <button onClick={this.questionTrainer}>Ask for a turn in the ring</button>
                    </Col>
                    <Col>
                        <Link to="/street"><button>Back To The Street</button></Link>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default connect(mapStateToProps)(Gym)
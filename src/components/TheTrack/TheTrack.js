import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Level1Encounters from './Level1Encounters/Level1Encounters'

function mapStateToProps(state) {
    return {state};
}

class TheTrack extends Component {
    constructor(props){
        super(props);
        this.state = { inCombat : false }
    }

    pveFight = () => {
        this.setState({ inCombat : true })
    }
    
    render() {
        if (this.props.state.level === 1 && this.state.inCombat === true) {
            return <Level1Encounters />
        }

        if (this.props.state.pveFights <= 0) {
            return (
                <Container>
                    <Row>
                        <Col>
                            <h3>Looking For Trouble</h3>
                        </Col> 
                    </Row>
                    <Row>
                        <hr />
                    </Row>
                    <Row>
                        <Col>
                            You are too tired to go starting shit with anyone, right now. Chill out, get some rest, and
                            try again tomorrow.
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Link to="/street"><button>Go Do Something More Constructive</button></Link>
                        </Col>
                    </Row>
                </Container>
            )
        }

        return (
            <Container>
                <Row>
                    <Col>
                        <h3>Looking For Trouble</h3>
                    </Col> 
                </Row>
                <Row>
                    <hr />
                </Row>
                <Row>
                    <Col>
                        You're wandering the blighted streets. Danger lurks around every corner, but there
                        is plenty of loot to be found. 
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <button onClick={this.pveFight}>Look for trouble</button>
                    </Col>
                    <Col>
                        <Link to="/hospital"><button>Go to the clinic</button></Link>
                    </Col>
                    <Col>
                        <Link to="/street"><button>Back to the Street</button></Link>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default connect(mapStateToProps)(TheTrack);
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Level1Encounters from './Level1Encounters';

function mapStateToProps(state) {
    return {state};
}

class TheTrack extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'CHANGE_LOCATION', payload: "Looking For Trouble"})
    }
    
    pveFight() {
        this.props.dispatch({ type: 'CHANGE_LOCATION', payload: "In A Street Fight"})
    }

    render() {
        if (this.props.state.location === "In A Street Fight" && this.props.state.level === 1) {
            return <Level1Encounters />
        }
        if (this.props.state.location === "In A Street Fight" && this.props.state.level === 2) {
            return <Level1Encounters />
        }
        if (this.props.state.location === "In A Street Fight" && this.props.state.level === 3) {
            return <Level1Encounters />
        }
        if (this.props.state.location === "In A Street Fight" && this.props.state.level === 4) {
            return <Level1Encounters />
        }
        if (this.props.state.location === "In A Street Fight" && this.props.state.level === 5) {
            return <Level1Encounters />
        }
        if (this.props.state.location === "In A Street Fight" && this.props.state.level === 6) {
            return <Level1Encounters />
        }
        if (this.props.state.location === "In A Street Fight" && this.props.state.level === 7) {
            return <Level1Encounters />
        }
        if (this.props.state.location === "In A Street Fight" && this.props.state.level === 8) {
            return <Level1Encounters />
        }
        if (this.props.state.location === "In A Street Fight" && this.props.state.level === 9) {
            return <Level1Encounters />
        }
        if (this.props.state.location === "In A Street Fight" && this.props.state.level === 10) {
            return <Level1Encounters />
        }
        if (this.props.state.location === "In A Street Fight" && this.props.state.level === 11) {
            return <Level1Encounters />
        }
        if (this.props.state.location === "In A Street Fight" && this.props.state.level === 12) {
            return <Level1Encounters />
        }

        return (
            <Container>
                <Row>
                    <Col>
                        You're wandering the blighted streets. Danger lurks around every corner, but there
                        is plenty of loot to be found. 
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <button onClick={() => this.pveFight()}>Look for trouble</button>
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
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Level1Encounters from './Level1Encounters';

function mapStateToProps(state) {
    return {state};
}

class TheTrack extends Component {
    street = () => {
        this.props.dispatch({ type: 'CHANGE_LOCATION', payload: "Out On The Street"})
    }

    hospital = () => {
        this.props.dispatch({ type: 'CHANGE_LOCATION', payload: "At The Hospital"})
    }
    
    pveFight() {
        this.props.dispatch({ type: 'CHANGE_LOCATION', payload: "In A Street Fight"})
    }

    render() {
        if (this.props.state.location === "In A Street Fight") {
            return <Level1Encounters />
        }
        if (this.props.state.location === "Looking For Trouble")
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
                        <Link to="/hospital"><button onClick={this.hospital}>Go to the clinic</button></Link>
                    </Col>
                    <Col>
                        <Link to="/street"><button onClick={this.street}>Back to the Street</button></Link>
                    </Col>
                </Row>
            </Container>
        )
        }
    }

export default connect(mapStateToProps)(TheTrack);
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import Level1Encounters from './Level1Encounters';

function mapStateToProps(state) {
    return state
}

class TheTrack extends Component {
    constructor(props) {
        super(props)
        this.state = {combat: false}
    }

    street = () => {
        this.props.dispatch({ type: 'CHANGE_LOCATION', payload: "Out On The Street"})
    }

    hospital = () => {
        this.props.dispatch({ type: 'CHANGE_LOCATION', payload: "At The Hospital"})
    }
    
    pveFight() {
        this.setState({combat: true});
    }
    render() {
        if (this.state.combat === true && this.props.level === 1) {
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
                        <button onClick={this.hospital}>Go to the clinic</button>
                    </Col>
                    <Col>
                        <button onClick={this.street}>Back to the Street</button>
                    </Col>
                </Row>
            </Container>
        )
        }
    }

export default connect(mapStateToProps)(TheTrack);
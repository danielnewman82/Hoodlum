import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Level1Encounters from './Level1Encounters';

class TheTrack extends Component {
    constructor(props) {
        super(props);
        this.state = { encounterCrackhead : false, encounterSmallerKid : false, combat : false, 
            onTheTrack : true, encounterNum : 0 };
        this.pveFight = this.pveFight.bind(this);
        this.retreat = this.retreat.bind(this);
    }
        
        pveFight() {
            this.setState({ combat : true, onTheTrack : false });
        }

        retreat() {
            this.setState({ combat : false, onTheTrack : true })
        } 
    
    render() {
        if (this.state.combat === true && this.props.level === 1) {
            return <Level1Encounters retreat={this.retreat} 
            atkPower={this.props.atkPower}
            defPower={this.props.defPower} 
            curHP={this.props.curHP} />
        }
        if (this.state.onTheTrack === true) {
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
                        <button onClick={this.pveFight}>Look for trouble</button>
                    </Col>
                    <Col>
                        <button onClick={this.props.clinic}>Go to the clinic</button>
                    </Col>
                    <Col>
                        <button onClick={this.props.logIn}>Back to the Street</button>
                    </Col>
                </Row>
            </Container>
        )
        }
    }
}

export default TheTrack;
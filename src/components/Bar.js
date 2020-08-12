import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return state
}

class Bar extends Component {

    street = () => {
        this.props.dispatch({ type: 'CHANGE_LOCATION', payload: "Out On The Street"})
    }
    render() {
    if (this.props.level < 3) {
        return (
            <Container>
                <Row>
                    <Col>
                    You approach the barroom door with all the confidence you can muster, but the bouncer
                    takes one look at you and says, "This ain't no place for a kid. Kick rocks."
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <button onClick={this.street}>Back out to the Street</button>
                    </Col>
                </Row>
            </Container>
        )
    }
    
    return (
        <Container>
            <Row>
                <Col>
                This kind of place used to sketch you out. It doesn't seem to have a name, only neon beer 
                signs in the windows. You stroll into the barroom, unhindered by the insouciant bouncer at 
                the door. Classic hip hop booms from the sound system as you belly up to the bar. The 
                lithe, sexy bartender leans over the bar to ask, "What can I get ya?"
                </Col>
            </Row>
            <Row>
                <Col>
                    <button onClick={this.street}>Back out to the Street</button>
                </Col>
            </Row>
        </Container>
    )
}
}

export default connect(mapStateToProps)(Bar);
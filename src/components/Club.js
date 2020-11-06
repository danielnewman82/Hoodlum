import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function mapStateToProps(state) {
    return {state};
}

class Club extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'CHANGE_LOCATION', payload: "At The Club"})
    }
    
    render() {
    if (this.props.state.level < 3) {
        return (
            <Container>
                <Row>
                    <Col>
                        <h3>At The Club</h3>
                    </Col> 
                </Row>
                <Row>
                    <hr />
                </Row>
                <Row>
                    <Col>
                    You approach the barroom door with all the confidence you can muster, but the bouncer
                    takes one look at you and says, "This ain't no place for a kid. Kick rocks."
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Link to="/street"><button onClick={this.street}>Back To The Street</button></Link>
                    </Col>
                </Row>
            </Container>
        )
    }
    
    return (
        <Container>
            <Row>
                <Col>
                    <h3>At The Club</h3>
                </Col> 
            </Row>
            <Row>
                <hr />
            </Row>
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
                    <Link to="/street"><button>Back out to the Street</button></Link>
                </Col>
            </Row>
        </Container>
    )
}
}

export default connect(mapStateToProps)(Club);
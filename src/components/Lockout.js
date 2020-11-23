import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function mapStateToProps(state) {
    return {state}
}

class Lockout extends Component {
    
    logOut = () => {
        this.props.dispatch({ type: 'LOGOUT' });
    }

    render() {
    return (
        <Container>
            <Row>
                <Col>
                    You already got mashed to a pulp once today. Try again tomorrow, after you've laid around
                    recovering a bit.
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to="/"><button onClick={this.logOut}>Back To The Front Page</button></Link>
                </Col>
            </Row>
        </Container>
        )
    }
}

export default connect(mapStateToProps)(Lockout)
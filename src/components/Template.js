import React from 'react';
import { connect } from 'react-redux';
import { Col, Row, Container } from 'react-bootstrap';

function mapStateToProps(state) {
    return state
}

class ComponentX extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        This is the base template for Hoodlum components.
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default connect(mapStateToProps)(ComponentX)
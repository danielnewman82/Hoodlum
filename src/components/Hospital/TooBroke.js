import React from 'react';
import { connect } from 'react-redux';
import { Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function mapStateToProps(state) {
    return {state};
  }
  
function TooBroke() {

    return (
        <Container>
            <Row>
                <Col>
                    <h3>At The Hospital</h3>
                </Col> 
            </Row>
            <Row>
                <hr />
            </Row>
            <Row>
                <Col>
                    You can't afford health care. Good luck with your life.
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
export default connect(mapStateToProps)(TooBroke)
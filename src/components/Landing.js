import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//import { useAuth0 } from '@auth0/auth0-react';

function mapStateToProps(state) {
    return {state};
  }

function Landing(props) {

    const street = () => {
        props.dispatch({ type: 'CHANGE_LOCATION', payload: "Out On The Street"})
    }

/*     LoginButton = () => {
        const { loginWithRedirect } = useAuth0();
      
        return <button onClick={() => loginWithRedirect()}>Hit The Streets Running</button>;
      }; */

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Hoodlum</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>Rated M for language, violence, drug use, and gallows humor</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Experience life on the streets. Hustle, fight, do what you have to do to 
                    survive.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to="/street"><button onClick={street}>Hit The Streets Running</button></Link>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to="/about"><button>About Hoodlum</button></Link>
                </Col>
            </Row>                
        </Container>
        )
    }

export default connect(mapStateToProps)(Landing);
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function mapStateToProps(state) {
    return {state};
}

class GraffitiWall extends Component {

    street = () => {
        this.props.dispatch({ type: 'CHANGE_LOCATION', payload: "Out On The Street"})
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        This wall of a disused warehouse is always getting tagged by neighborhood artists. Someone 
                        paints over it every now and then, but it's tagged again within a day or two. Well beyond
                        the reach of any unaided human, someone has written in blue paint pen:
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <span id="wordOfGod"> Speak your mind here. I'm not going to try and censor
                        you, but spouting asinine, bigoted nonsense will get you banned. Also, keep in mind that
                        this is a gang-infested neighborhood. Write too much, and you risk going over someone else's
                        tag, and they will be REALLY mad. - God </span>
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
}

export default connect(mapStateToProps)(GraffitiWall)
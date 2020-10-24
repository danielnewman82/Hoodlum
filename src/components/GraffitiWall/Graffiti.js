import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row, Container } from 'react-bootstrap';

function mapStateToProps(state) {
    return {state}
}

class Graffiti extends Component { 
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                    {this.props.tags.length ? (
                            <div>
                                {this.props.tags.slice(0,9).reverse().map( ({text, author, _id, time}) => {
                                    return(
                                        <div key={_id}>
                                            {text} - {author} at {time}
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            <div>
                                <h2>Looks like they just repainted the wall.</h2>
                            </div>
                        )
                        }
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default connect(mapStateToProps)(Graffiti)
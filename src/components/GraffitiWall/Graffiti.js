import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row, Container } from 'react-bootstrap';

function mapStateToProps(state) {
    return {state}
}

class Graffiti extends Component {
    constructor(props) {
        super(props);
        this.state = { tags: [] }
    }

    componentDidMount() {
        this.getTags();
    }

    getTags = () => {
        fetch('/api/getTags')
        .then(res => res.json())
        .then(tags => this.setState({ tags }))
    }
    
    render() {
        const { tags } = this.state;

        return (
            <Container>
                <Row>
                    <Col>
                        Enter your tag here:
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <textarea name="grafInput" maxLength="200" cols="50" rows="4" required={true}
                        minLength="3" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <button>Write your tag</button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Other recent tags are scrawled on the wall in marker and spraypaint:
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {tags.length ? (
                            <div>
                                {tags.map( ({text, author, time}) => {
                                    return(
                                        <div>
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
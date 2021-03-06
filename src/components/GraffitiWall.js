import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function mapStateToProps(state) {
    return {state};
}

class GraffitiWall extends Component {
    constructor(props) {
        super(props);
        this.state = { tags: [], input: '', shutUp: false }
    }

    handleTagInput = (e) => {
        this.setState({ input: e.target.value })
    }

    componentDidMount() {
        this.getTags();
    }

    getTags = () => {
        fetch('/api/getTags')
        .then(res => res.json())
        .then(tags => this.setState({ tags }))
    }

    postTag = () => {
        if (this.props.state.tagsToday < 3) {
        fetch('/api/postTag', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({text: this.state.input, author: this.props.state.name, 
                time: new Date().toLocaleTimeString() + " " + new Date().toLocaleDateString() })
        })
        fetch('/api/updateCharStats', {
            method: 'PUT',
            body: JSON.stringify({ email: this.props.state.email, 
                tagsToday: this.props.state.tagsToday + 1 }),
            headers: {
              'Content-Type': 'application/json'
            }
          })
        .then( fetch('/api/getCharStats', {
            method: 'POST',
            body: JSON.stringify({email: this.props.state.email}),
            headers: {
                'Content-Type': 'application/json'
            }
        }) )
        .then(res => res.json())
        .then(res => this.props.dispatch({ type: 'GET_CHARDATA', payload: res }))
    }
        if (this.props.state.tagsToday >= 3) {
            fetch('/api/updateCharStats', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: this.props.state.email, lockedOut: true, curHitPoints: 0})
            })
            .then( fetch('/api/getCharStats', {
                method: 'POST',
                body: JSON.stringify({email: this.props.state.email}),
                headers: {
                    'Content-Type': 'application/json'
                }
            }) )
            .then(res => res.json())
            .then(this.setState({ shutUp: true }) );
        }
    };

    logOut = () => { this.props.dispatch({ type: 'LOGOUT' }) }

    render() {
        if (this.state.shutUp === true) {
            return (
                <Container>
                    <Row>
                        <Col>
                        <h3>The Beatdown</h3>
                        </Col> 
                    </Row>
                    <Row>
                        <hr />
                    </Row>
                    <Row>
                        <Col>
                            <p>As you scrawl away, covering the wall with your magnum opus, you get so absorbed in it
                            that you don't notice the crew of gang-bangers approaching. There's seven of them and one of
                            you. "The fuck you think you doin'? You going over my shit? You must be dusted, homeboy." You
                            realize, a bit too late, that you have committed a serious faux pas, and are about to pay for it. </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>Maybe three seconds later, that bill comes due, in the form of a right cross to the nose. They
                            beat you mercilessly, leaving you in a crumpled heap on the sidewalk, marker still in hand.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p><span id="wordOfGod">You just got stomped out for spamming the graffiti wall. In the future,
                            no more than three tags per day.</span></p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Link to="/"><button onClick={this.logOut}>Go Pass Out Somewhere</button></Link>
                        </Col>
                    </Row>
                </Container>
            )
        }
        return (
            <Container>
                <Row>
                    <Col>
                        <h3>Graffiti Wall</h3>
                    </Col> 
                </Row>
                <Row>
                    <hr />
                </Row>
                <Row>
                    <Col>
                        This wall of a disused warehouse is always getting tagged by neighborhood artists. Someone 
                        paints over it every now and then, but it's tagged again within a day or two. Well beyond
                        the reach of any unaided human, someone has written in blue paint pen:
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <span id="wordOfGod"> Speak your mind here. Act right or pay the price. - Trap God </span>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Enter your tag here:
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <textarea name="grafInput" id="grafInput" maxLength="140" cols="35" rows="4" required={true}
                        minLength="3" value={this.state.input} onChange={this.handleTagInput} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <button type='Submit' value='Submit' onClick={this.postTag}>Write your tag</button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Other recent tags are scrawled on the wall in marker and spraypaint:
                    </Col>
                </Row>
                <Row>
                    <Col>
                    {this.state.tags.length ? (
                            <div>
                                {this.state.tags.slice(0,9).reverse().map( ({text, author, _id, time}) => {
                                    return(
                                        <div key={_id}>
                                            {text} - {author} at {time}
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            <div>
                                <h2>Looks like they just repainted the wall.<span id="wordOfGod"> (Or the game has failed to retrieve tags.)</span></h2>
                            </div>
                        )
                        }
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
}

export default connect(mapStateToProps)(GraffitiWall)
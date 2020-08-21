import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
    state
    };
  }

class About extends Component {
    
    backToLanding = () => {
        this.props.dispatch({ type: 'CHANGE_LOCATION', payload: "landing" })
    }

    render() {
    return (
        <Container>
            <Row>
                <Col>
                    <p>Hoodlum is a browser-based text RPG, set in a bleak, dystopian urban environment. It is coded
                    in JavaScript, using <a href="https://reactjs.org/">ReactJS</a> and <a href="https://redux.js.org/">
                    Redux</a>. (Man, was that a pain in the ass to get working!) I first started development
                    in late June 2020, whilst I was in the Nucamp web / mobile development bootcamp. Previously, I 
                    implemented a simpler browser game as a project for my Bootstrap class: a remake of an old
                    C64 game I remember fondly from my childhood, "Hike" or "Forest Walk". That was all Bootstrap
                    HTML and vanilla JavaScript; not terribly elegant, but it worked as intended. After that, I 
                    wanted to make something bigger, more complex, more challenging for me as a developer 
                    and more engaging for the player.</p>
                    <p>But I did not have the time or inclination to try anything graphical. I've always been
                    more of a writer than an artist. Nor was I motivated to try and make a knockoff of a well-known
                    web app like Twitter, or whatever. So somehow I got the notion to make another, more complex
                    browser game, and got inspired by another game I remember fondly from childhood: Legend of the
                    Red Dragon. But I have long felt that the whole fantasy dragon-slaying motif has been done to 
                    death, so I took the core mechanics and applied them to a contemporary motif.</p>
                    <p>Hoodlum is not appropriate for all ages. Some parts depict truly ugly things and abhorrent 
                    behavior; part of the game is that you can choose to be a lowlife, and doing the right thing 
                    doesn't necessarily pay off. 
                    Please keep in mind that depiction does not equal endorsement. Nor is it intended to be a 100% 
                    accurate reflection of reality. It is a work of fiction, albeit intended to resemble reality 
                    closely enough to be a bit unsettling. My goals are to make people laugh, think, and feel 
                    uncomfortable.</p>
                    <p>I hope you enjoy the game. L'chaim!</p>
                    <p>- <a href="mailto:daniel.newman82@gmail.com">Daniel</a>, the implementor</p>
                    
                    Inspirations include:
                    <ul> 
                    <li><a href="http://lord.lordlegacy.com/">Legend of the Red Dragon</a>
                    (<a href="https://en.wikipedia.org/wiki/Legend_of_the_Red_Dragon">Wiki</a>)</li>
                    <li><a href="https://www.kingdomofloathing.com">Kingdom of Loathing</a></li>
                    <li><a href="http://misspentyouth.robertbohl.com/">Misspent Youth</a></li>
                    <li><a href="https://en.wikipedia.org/wiki/Kingpin:_Life_of_Crime">Kingpin: Life of Crime (1999)</a></li>
                    <li><a href="https://bluebottlegames.com/games/neo-scavenger">NEO Scavenger</a></li>
                    <li>Living in <a href="https://en.wikipedia.org/wiki/West_Oakland,_Oakland,_California">West Oakland</a> most of my adult life</li>
                    </ul>

                    This game was coded while listening to:
                    <ul>
                        <li>Oozing Wound</li>
                        <li>Masked Intruder</li>
                        <li>The Bombpops</li>
                        <li>Venom</li>
                        <li>Bad Cop / Bad Cop</li>
                        <li>The Last Resort</li>
                        <li>Evil Conduct</li>
                        <li>Cock Sparrer</li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col>
                    <button onClick={this.backToLanding}>Back to the landing page</button>
                </Col>
            </Row>
        </Container>
    )
}
}

export default connect(mapStateToProps)(About);
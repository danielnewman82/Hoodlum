import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {state};
  }

function About(props) {
    return (
        <Container>
            <Row>
                <Col>
                    <p>Hoodlum is a browser-based text RPG, set in a bleak, dystopian urban environment. It is coded
                    in JavaScript, using the <a href="https://www.mongodb.com/">M</a><a href="http://expressjs.com/">E</a> 
                    <a href="https://reactjs.org/">R</a><a href="https://nodejs.org/en/">N</a> stack.
                    I first started development
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
                    <p>I hope you enjoy the game, and welcome constructive feedback. L'chaim!</p>
                    <p>- <a href="mailto:daniel.newman82@gmail.com">Daniel</a>, the implementor</p>
                    
                    Inspirations include:
                    <ul> 
                    <li><a href="http://lord.lordlegacy.com/" target="_blank" rel="noopener noreferrer">Legend of the Red Dragon</a>
                    (<a href="https://en.wikipedia.org/wiki/Legend_of_the_Red_Dragon" target="_blank" rel="noopener noreferrer">Wiki</a>)</li>
                    <li><a href="https://www.kingdomofloathing.com" target="_blank" rel="noopener noreferrer">Kingdom of Loathing</a></li>
                    <li><a href="http://misspentyouth.robertbohl.com/" target="_blank" rel="noopener noreferrer">Misspent Youth</a></li>
                    <li><a href="https://en.wikipedia.org/wiki/Kingpin:_Life_of_Crime" target="_blank" rel="noopener noreferrer">Kingpin: Life of Crime (1999)</a></li>
                    <li><a href="https://bluebottlegames.com/games/neo-scavenger" target="_blank" rel="noopener noreferrer">NEO Scavenger</a></li>
                    <li>Living in <a href="https://en.wikipedia.org/wiki/West_Oakland,_Oakland,_California" target="_blank" rel="noopener noreferrer">West Oakland</a> most of my adult life</li>
                    </ul>

                    Recommended listening while playing this game:
                    <ul>
                        <li>"6 In Tha Morning" by Ice T</li>
                        <li>"Everyday Struggle" by Notorious BIG</li>
                        <li>"Dopeman" by NWA</li>
                        <li>"PSK (What Does It Mean)" by Schoolly D</li>
                        <li>"Tearz" by the Wu Tang Clan</li>
                    </ul>
                    This game was coded while listening to:
                    <ul>
                        <li><a href="https://oozingwound.bandcamp.com/" target="_blank" rel="noopener noreferrer">Oozing Wound</a></li>
                        <li><a href="https://maskedintruder.bandcamp.com/" target="_blank" rel="noopener noreferrer">Masked Intruder</a></li>
                        <li><a href="https://thebombpops.bandcamp.com/" target="_blank" rel="noopener noreferrer">The Bombpops</a></li>
                        <li><a href="https://www.metal-archives.com/bands/venom/" target="_blank" rel="noopener noreferrer">Venom</a></li>
                        <li><a href="https://badcopbadcop.bandcamp.com/" target="_blank" rel="noopener noreferrer">Bad Cop / Bad Cop</a></li>
                        <li><a href="https://www.facebook.com/thelastresortuk/" target="_blank" rel="noopener noreferrer">The Last Resort</a></li>
                        <li><a href="https://www.facebook.com/Evil-Conduct-Official-137898319572260/" target="_blank" rel="noopener noreferrer">Evil Conduct</a></li>
                        <li><a href="https://www.facebook.com/cocksparreruk/" target="_blank" rel="noopener noreferrer">Cock Sparrer</a></li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col>
                    <button onClick={props.about}>Back to the landing page</button>
                </Col>
            </Row>
        </Container>
    )
}

export default connect(mapStateToProps)(About);
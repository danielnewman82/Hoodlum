# Hoodlum : a dystopian-contemporary RPG

In Hoodlum, players are cast alone into a concrete jungle, where life is cheap and nobody can be trusted. Society is coming apart at the seams, authorities are apathetic or inept at best, more often corrupt and malevolent. In addition to the everyday struggle to survive, they must choose a path through the growing chaos and upheaval surrounding them: that of a thug, or that of a radical.

## History

Hoodlum's gameplay is inspired by Robinson Technologies' classic 1989 BBS door game, Legend of the Red Dragon.

## Technical

Hoodlum is a full stack MERN application. The game logic is handled by the frontend. The main responsibilities of the Node / Express backend are authenticating users, and maintaining sync between the client-side Redux store, and the MongoDB collection where user profile data is stored. The user registration / authentication process is based on https://medium.com/@faizanv/authentication-for-your-react-and-express-application-w-json-web-tokens-923515826e0 . (I tried using auth0 but wasn't happy with it, and figured I ought to learn how to roll my own.)
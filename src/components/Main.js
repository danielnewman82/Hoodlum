import React from 'react';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import Landing from './Landing';
import About from './About';
import Header from './Header';
import Street from './Street';
import TheTrack from './TheTrack';
import CharSheet from './CharSheet';
import WeaponShop from './WeaponShop';
import ArmorShop from './ArmorShop';
import Hospital from './Hospital';
import Bank from './Bank';
import GraffitiWall from './GraffitiWall';
import Gym from './Gym';
import Club from './Club';
import { Auth0Provider } from '@auth0/auth0-react';


function Main() {
    return (
    <BrowserRouter>
          <Auth0Provider
            domain="dev-voamfjoa.us.auth0.com"
            clientId="K0VmrctjLtGOExfSh2rtSX17hjtBB7qJ"
            redirectUri={window.location.origin}
            >
        <Switch>
            <Route exact path="/">
                <Landing />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/street">
                <Header />
                <Street />
            </Route>
            <Route path="/theTrack">
                <Header />
                <TheTrack />
            </Route>
            <Route path="/charSheet">
                <Header />
                <CharSheet />
            </Route>
            <Route path="/weaponShop">
                <Header />
                <WeaponShop />
            </Route>
            <Route path="/armorShop">
                <Header />
                <ArmorShop />
            </Route>
            <Route path="/hospital">
                <Header />
                <Hospital />
            </Route>
            <Route path="/bank">
                <Header />
                <Bank />
            </Route>
            <Route path="/graffitiWall">
                <Header />
                <GraffitiWall />
            </Route>
            <Route path="/gym">
                <Header />
                <Gym />
            </Route>
            <Route path="/club">
                <Header />
                <Club />
            </Route>
        </Switch>
        </Auth0Provider>
    </BrowserRouter>
    )
}

export default Main
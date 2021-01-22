import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { persistor, store } from '../redux';
import withAuth from '../withAuth';
import Street from './Street';
import TheTrack from './TheTrack/TheTrack';
import CharSheet from './CharSheet';
import WeaponShop from './WeaponShop/WeaponShop';
import ArmorShop from './ArmorShop';
import Hospital from './Hospital/Hospital';
import Bank from './Bank';
import GraffitiWall from './GraffitiWall';
import Gym from './Gym/Gym';
import Club from './Club';
import PassedOut from './PassedOut';
import Index from '../index';
import Lockout from './Lockout';
import { Component } from 'react';

class Router extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    getCharStats = () => { fetch('/api/getCharStats', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: this.state.email })
        })
        .then(res => res.json() )
        .then(res => this.setState( res ) ) }
    
    render () {
        return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <Switch>
                    <Route exact path="/" component={Index} />
                    <Route path="/lockout" component={withAuth(Lockout)} />
                    <Route path="/street" component={withAuth(Street)} />
                    <Route path="/theTrack" component={withAuth(TheTrack)} />
                    <Route path="/charSheet" component={withAuth(CharSheet)} />
                    <Route path="/weaponShop" component={withAuth(WeaponShop)} />
                    <Route path="/armorShop" component={withAuth(ArmorShop)} />
                    <Route path="/hospital" component={withAuth(Hospital)} />
                    <Route path="/bank" component={withAuth(Bank)} />
                    <Route path="/graffitiWall" component={withAuth(GraffitiWall)} />
                    <Route path="/gym" component={withAuth(Gym)} />
                    <Route path="/club" component={withAuth(Club)} />
                    <Route path="/passedOut" component={withAuth(PassedOut)} />
                    </Switch>
                </BrowserRouter>
            </PersistGate>
        </Provider>
        )
    }
}

  export default Router
import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import WeaponShopEntrance from './WeaponShopEntrance';
import PocketKnife from './PocketKnife';
import BaseballBat from './BaseballBat';
//import BaseballBat from './BaseballBat';

function mapStateToProps(state) {
    return {state};
}

function WeaponShop(props) {
    useLayoutEffect(() => { props.dispatch({ type: 'CHANGE_LOCATION', payload: "Spider's Gun Shop"}) }, [] );

    let { url, path } = useRouteMatch();
        return (
            <Switch>
                <Route exact path={path}>
                    <WeaponShopEntrance />
                </Route>
                <Route path={`${url}/pocketKnife`} component={PocketKnife}>
                    <PocketKnife />
                </Route>
                <Route path={`${url}/baseballBat`} component={BaseballBat}>
                    <BaseballBat />
                </Route>
            </Switch>
        )
    }

export default connect(mapStateToProps)(WeaponShop);
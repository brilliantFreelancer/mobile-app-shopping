// import React from "react";
// import  AppContainer from './Navigation/router'
//
//
// export default class App extends React.Component {
//     render() {
//         return <AppContainer />;
//     }
// }
//






import React, {Component} from 'react';

import AppNavigator from './Navigation/router';
import {Root} from 'native-base';
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import reducers from './Reducer'
// const AppIndex = createAppContainer(AppNavigator)
export default class App extends Component {
    render() {
        return (
            <Root>
                <Provider store={createStore(reducers, {})}>
                    <AppNavigator/>
                </Provider>
            </Root>

        );
    }
}
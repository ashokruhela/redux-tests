import React from 'react';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';
import reduxPromise from 'redux-promise';
import reducers from 'reducers'

const composeEnhancer = composeWithDevTools({trace:true})

function configureStore(initialState) {
    return createStore(reducers, initialState, 
        composeEnhancer(applyMiddleware(reduxPromise)));
}

export default ({children, initialState = {}}) => {
    return <Provider store={configureStore(initialState)}>
        {children}
    </Provider>;
}
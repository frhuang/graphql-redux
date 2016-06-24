import React from 'react';
import { render } from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { queryReducer } from "./reducers/reducers.js";
import thunkMiddleware from 'redux-thunk'

import Query from "./components/Query.js";

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware
)(createStore)

render(
    <Provider store={createStoreWithMiddleware(queryReducer)}>
        <Query />
    </Provider>,
    document.getElementById('example')
);

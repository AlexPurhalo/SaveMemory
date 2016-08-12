import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/app';
import Notes from './components/notes-page';
import Async from './middleweares/async';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(Async)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <Route path="/notes" component={Notes} />
            </Route>
        </Router>
    </Provider>
    , document.querySelector('.container'));

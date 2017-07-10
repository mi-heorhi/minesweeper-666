import React from 'react'
import {render} from 'react-dom'
import {Router, hashHistory, Redirect} from 'react-router'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import {syncHistoryWithStore, routerReducer, routerMiddleware} from 'react-router-redux'
import thunk from 'redux-thunk'
import {reducer as reduxFormReducer} from 'redux-form'
import createLogger from 'redux-logger'

import Routes from './containers/Routes.js'
import * as reducers from './reducers'
import * as actions from './actions'

const logger = createLogger({
    predicate: (getState, action) => action.type
})
const middleware = routerMiddleware(hashHistory)

const reducer = combineReducers({
    ...reducers,
    form: reduxFormReducer,
    routing: routerReducer
})

const store = createStore(reducer, applyMiddleware(thunk, logger, middleware))
const history = syncHistoryWithStore(hashHistory, store)
render(
    <Provider store={store}>
    <Router routes={Routes} history={history}/>
</Provider>, document.getElementById('root'))

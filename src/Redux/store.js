import { createStore, combineReducers, applyMiddleware } from "redux"
import thunkMiddleWare from 'redux-thunk'
import { reducer as form } from 'redux-form'
import {feed} from './feed'
import {map} from './map'

let reducers = combineReducers( { feed, map, form } )
let store = createStore( reducers, applyMiddleware( thunkMiddleWare ) )

export default store;

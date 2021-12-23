import { createStore, combineReducers, applyMiddleware } from "redux"
import thunkMiddleWare from 'redux-thunk'
import { reducer as form } from 'redux-form'

let reducers = combineReducers( { form } )
let store = createStore( reducers, applyMiddleware( thunkMiddleWare ) )

export default store;

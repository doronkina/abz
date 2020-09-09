import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import usersReducer from './reducers/usersReducer'
import positionsReducer from './reducers/positionsReducer'

let rootReducer = combineReducers({
    users: usersReducer,
    positions: positionsReducer,
    form: formReducer
})

let store = createStore( rootReducer, applyMiddleware(thunk) )

export default store
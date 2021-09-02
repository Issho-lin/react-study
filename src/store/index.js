// import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
// import logger from 'redux-logger'
import { createStore, applyMiddleware } from './myRedux'
import { thunk, logger } from './myRedux/middlewares'
import reducer from './reducer'

const store = createStore(reducer, applyMiddleware(thunk, logger))

export default store
// import { createStore } from 'redux'
import { createStore } from './myRedux'
import reducer from './reducer'

const store = createStore(reducer)

export default store
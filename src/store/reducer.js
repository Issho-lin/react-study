// import { combineReducers } from 'redux'
import { combineReducers } from './myRedux'

const countReducer = (state = 0, action) => {
    switch (action.type) {
        case 'ADD':
            return state + 1
        case 'MINUS':
            return state - 1
        default:
            return state
    }
}

const caseReducer = (state = 'REDUX', action) => {
    switch (action.type) {
        case 'LOWERCASE':
            return state.toLocaleLowerCase()
        case 'UPPERCASE':
            return state.toLocaleUpperCase()
        default:
            return state
    }
}

export default combineReducers({
    countReducer,
    caseReducer
})
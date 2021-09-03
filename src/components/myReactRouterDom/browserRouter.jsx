import React from 'react'
import { createBrowserHistory } from 'history'
import Router from './router'

const BrowserRouter = ({ children }) => {
    return (
        <Router history={createBrowserHistory()}>
            { children }
        </Router>
    )
}
export default BrowserRouter
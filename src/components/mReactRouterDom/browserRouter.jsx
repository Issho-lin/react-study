import React from 'react'
import Router from './router'
import { createBrowserHistory } from 'history'

const BrowserRouter = ({ children }) => {
    return (
        <Router history={createBrowserHistory()}>{ children }</Router>
    )
}
export default BrowserRouter
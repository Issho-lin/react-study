import React from 'react'
import Router from './router'
import { createHashHistory } from 'history'

const HashRouter = ({ children }) => {
    return (
        <Router history={createHashHistory()}>{ children }</Router>
    )
}
export default HashRouter
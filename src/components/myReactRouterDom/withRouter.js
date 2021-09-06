import React, { useContext } from 'react'
import RouterContext from './context'

const withRouter = WrapComponent => props => {
    const routerInfo = useContext(RouterContext)
    return (
        <WrapComponent {...props} {...routerInfo}/>
    )
}
export default withRouter
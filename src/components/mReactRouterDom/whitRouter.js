import React, { useContext } from 'react'
import RouterContext from './context'

const withRouter = WrapComponent => props => {
    const context = useContext(RouterContext)
    return (
        <WrapComponent {...props} {...context}/>
    )
}
export default withRouter
import React from 'react'

const withRouter = WrapComponent => props => {
    return (
        <WrapComponent {...props}/>
    )
}
export default withRouter
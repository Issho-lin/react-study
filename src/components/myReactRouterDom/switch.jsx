import React from 'react'
import RouterContext from './context'
import matchPath from './matchPath'

const Switch = ({ children }) => {

    return (
        <RouterContext.Consumer>
            {
                context => {
                    let match = null, element = null
                    React.Children.forEach(children, child => {
                        if (!match && React.isValidElement(child)) {
                            element = child
                            const { path, from } = child.props
                            const { location } = context
                            const { name } = child.type
                            if (name === 'Redirect' && from) {
                                match = matchPath(location.pathname, { path: from })
                            } else {
                                match = path ? matchPath(location.pathname, child.props) : context.match
                            }
                        }
                    })
                    return (
                        match ? React.cloneElement(element, { computedMatch: match }) : null
                    )
                }
            }
        </RouterContext.Consumer>
    )
}
export default Switch
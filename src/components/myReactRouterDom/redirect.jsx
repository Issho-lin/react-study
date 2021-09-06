import React from 'react'
import RouterContext from './context'

const Redirect = ({ to }) => {
    return (
        <RouterContext.Consumer>
            {
                context => {
                    const { history } = context
                    return (
                        <LifeCycle onMount={() => history.push(to)}/>
                    )
                }
            }
        </RouterContext.Consumer>
    )
}
export default Redirect

class LifeCycle extends React.Component {
    componentDidMount() {
        this.props.onMount?.()
    }
    render() {
        return null
    }
}
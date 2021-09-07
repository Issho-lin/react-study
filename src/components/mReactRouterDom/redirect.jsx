import React, { useContext } from 'react'
import RouterContext from './context'

const Redirect = ({ to }) => {
    const { history } = useContext(RouterContext)
    return (
        <LifeCycle onMount={() => history.push(to)}/>
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
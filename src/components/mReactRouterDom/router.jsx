import React from 'react'
import RouterContext from './context'

class Router extends React.Component {
    static compoteRootMatch = pathname => {
        return {
            url: '/',
            path: '/',
            params: {},
            isExact: pathname === '/'
        }
    }
    constructor(props) {
        super(props)
        this.state = {
            location: props.history.location
        }
        this.unlisten = props.history.listen(({ location }) => {
            this.setState({ location })
        })
    }
    componentWillUnmount() {
        this.unlisten?.()
    }
    render() {
        const { history } = this.props
        const { location } = this.state
        return (
            <RouterContext.Provider
                value={{
                    history,
                    location,
                    match: Router.compoteRootMatch(location.pathname)
                }}
            >
                { this.props.children }
            </RouterContext.Provider>
        )
    }
}
export default Router
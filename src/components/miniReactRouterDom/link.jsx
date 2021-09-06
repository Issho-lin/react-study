import React, { useContext } from 'react'
import RouterContext from './context'

const Link = ({ children, to }) => {
    const { history } = useContext(RouterContext)
    return (
        <a
            href={to}
            onClick={e => {
                e.preventDefault()
                history.push(to)
            }}
        >
            { children }
        </a>
    )
}
export default Link
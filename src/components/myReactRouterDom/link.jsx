import React from 'react'

const Link = ({to, children}) => {
    return (
        <a href={to} onClick={e => {
            e.preventDefault()
        }}>{ children }</a>
    )
}
export default Link
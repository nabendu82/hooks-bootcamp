import React from 'react'
import { UserContext } from '../App'

const Child = () => {
    return (
        <UserContext.Consumer>
            {user => {
                return (
                    <h1>Child Component - {user}</h1>
                )
            }}
        </UserContext.Consumer>
    )
}

export default Child
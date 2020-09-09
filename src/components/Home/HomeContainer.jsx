import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { getUsers } from '../../store/reducers/usersReducer'
import { getPositions } from '../../store/reducers/positionsReducer'

import Home from './Home'

const HomeContainer = props => {
    const [isInitialized, setIsInitialized] = useState(false)

    useEffect( () => {
        if(!isInitialized) {
            const count = window.innerWidth > 414 ? 6 : 3

            props.getUsers(1, count)
            props.getPositions()

            setIsInitialized(true)
        }       
    }, [isInitialized, props] )

    return <Home />
}

export default connect( null, {getUsers, getPositions} )(HomeContainer)
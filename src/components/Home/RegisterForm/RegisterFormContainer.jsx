import React from 'react'
import { connect } from 'react-redux'

import { createUser } from '../../../store/reducers/usersReducer'

import RegisterForm from './RegisterForm'

const RegisterFormContainer = props => {
    return <RegisterForm {...props} />
}

let mapStateToProps = state => {
    return {
        count: state.users.count,
        positions: state.positions.positions,
        postMessage: state.users.postMessage,
        postFails: state.users.postFails
    }
}

export default connect( mapStateToProps, {createUser} )(RegisterFormContainer)
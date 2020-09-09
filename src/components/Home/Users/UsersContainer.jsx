import React from 'react'
import { connect } from 'react-redux'

import { getUsers } from '../../../store/reducers/usersReducer'

import Users from './Users'

const UsersContainer = props => {
    return <Users {...props} />
}

let mapStateToProps = state => {
    return {
        count: state.users.count,
        page: state.users.page,
        total_pages: state.users.total_pages,
        users: state.users.users
    }
}

export default connect( mapStateToProps, {getUsers} )(UsersContainer)
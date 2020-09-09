import React from 'react'

import s from './Users.module.scss'

import User from './User/User'

const Users = props => {
    const users = props.users ? 
        props.users.map(user => <User key={`${user.id}`} user={user} />) : 
        null

    const addUsers = () => {
        props.getUsers(props.page + 1, props.count)
    }

    return (
        <>
            <div className={s.users}>
                {users}
            </div>
            <button className={props.total_pages === props.page ? s.hideBtn : null} onClick={addUsers}>Show more</button>
        </>
    )
}

export default Users
import React from 'react'

import defaultImg from '../../../../img/photo-cover.png'

import s from './User.module.scss'

const User = props => {
    const {photo, id, name, position, email, phone} = props.user

    const imgNotFound = e => {
        e.target.src = defaultImg
    }
    
    return (
        <div className={s.container}>
            <img src={photo} alt={id} onError={imgNotFound} />
            <h2>{name}</h2>
            <p>{position}</p>
            <p className={s.email} title={email}>{email}</p>
            <p>{phone}</p>
        </div>
    )
}

export default User
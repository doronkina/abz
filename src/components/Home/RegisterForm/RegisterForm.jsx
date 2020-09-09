import React, { useState, useEffect } from 'react'
import { reduxForm, Field } from 'redux-form'

import s from './RegisterForm.module.scss'

// validation
const validate = values => {
    const errors = {}

    // if (!values.name) {
    //     errors.name = 'The name field is required.'
    // } else if (values.name.length < 2) {
    //     errors.name = 'The name must be at least 2 characters.'
    // }

    // if (!values.email) {
    //     errors.email = 'The email field is required.'
    // } else if ( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) ) {
    //     errors.email = 'The email must be a valid email address.'
    // }

    // if (!values.phone) {
    //     errors.phone = 'The phone field is required.'
    // } else if ( !/^\+380[1-9]+[0-9]{8}$/i.test(values.phone) ) {
    //     errors.phone = 'The phone must be a valid phone number.'
    // }
    
    return errors
}

const RegisterForm = props => {

    useEffect(() => {
        if(props.postMessage) {
            alert(props.postMessage)
        }
    }, [props.postMessage])

    // textInput  
    const textInput = ( {input, label, placeholder, type, meta} ) => {
        return (
            <div className={s.textInput}>
                <label htmlFor={input.name}>{label}</label>
                <input id={input.name} className={ props.postFails && props.postFails[input.name] ? s.errorInput : null } {...input} placeholder={placeholder} type={type} />
                { input.name === 'phone' && <span>Enter phone number in open format</span> }
                { props.postFails && props.postFails[input.name] && <span className={s.errorMessage}>{props.postFails[input.name]}</span> }
                {/* { touched && error && <span className={s.errorMessage}>{error}</span> } */}
            </div>
        )
    }

    // radioInput
    const positions = props.positions.map(position => {
        return (
            <label key={position.id}>
                <Field id={position.id} name='position' component='input' type='radio' value={`${position.id}`} />{' '}
                <span></span>
                {position.name}
            </label>
        )
    })

    // fileInput
    const fileInput = ( {input, type, meta} ) => {
        const { mime } = props;

        return (
            <div className={s.fileInput}>
                <label htmlFor={input.name}>Phone number</label>
                <input id={input.name} name={input.name} type={type} accept={mime}
                    onChange={ e => handleChange(e) }
                />
                { props.postFails && props.postFails.photo && <span className={s.errorMessage}>{props.postFails.photo}</span> }
                {/* { props.img && !isPhoto(props.img.type) && <span className={s.errorMessage}>Select .png or .jpg file</span> } */}

                <div className={ props.postFails && props.postFails.photo ? s.pseudoErrorInput : s.pseudoInput }>
                    <p>{ props.img ? props.img.name : <span className={s.placeholder}>Upload your photo</span> }</p>
                    <button>Browse</button>
                </div>
            </div>
        )
    }

    const handleChange = e => {
        e.preventDefault()

        if (e.target.files[0]) {
            props.setImg( e.target.files[0] )
        }
    }

    // const isPhoto = imgType => {
    //     if (imgType === 'image/png' || imgType === 'image/jpeg') return true

    //     return false
    // }

    return (
        <form className={s.container} onSubmit={props.handleSubmit}>

            <Field id='name' name='name' type='text' component={textInput} label="Name" placeholder='Your name' />
            <Field id='email' name='email' type='text' component={textInput} label="Email" placeholder='Your email' />
            <Field id='phone' name='phone' type='text' component={textInput} label="Phone number" placeholder='+380 XX XXX XX XX' />

            <p>Select your position</p>
            <div className={s.radioBlock}>
                {positions}
                { props.postFails && props.postFails.position_id && <span className={s.errorMessage}>{props.postFails.position_id}</span> }
            </div>

            <Field name='photo' type='file' component={fileInput} />

            <button>Sing up now</button>
        </form>
    )
}

const Form = reduxForm({form: 'registerForm', validate})(RegisterForm)

const Registration = props => {
    const [img, setImg] = useState(null)

    const createUser = values => {
        values.img = img
        props.createUser(values, 1, props.count)
    }

    return <Form onSubmit={createUser} img={img} setImg={setImg} {...props} />
}

export default Registration
import React from 'react'

import bg from '../../img/banner-photo.jpg'
import img from '../../img/man-laptop-v1.svg'

import './Home.scss'

import UsersContainer from './Users/UsersContainer'
import RegisterFormContainer from './RegisterForm/RegisterFormContainer'

const Home = () => {
    return (
        <>
            <div className='subHeader'>
                <div className='bgContainer'>
                    <img src={bg} alt="bg"/>
                </div>
                <div className='container'>
                    <h1>Test assignment for frontend developer position</h1>
                    <p>
                        We kindly remind you that your test assignment should be submitted 
                        as a link to github/bitbucket repository. <span>Please be patient, we consider
                        and respond to every application that meets minimum requirements.
                        We look forward to your submission. Good luck! The photo has to scale
                        in the banner area on the different screens</span>
                    </p>
                    <button><a href="#registerForm">Sing up now</a></button>
                </div>
            </div>
            <div className='info'>
                <div className='container'>
                    <h1>Let's get acquainted</h1>
                    <div className='row'>
                        <div className='imgContainer'>
                            <img src={img} alt="info"/>
                        </div>
                        <div className='content'>
                            <h2>I am cool frontend developer</h2>
                            <p>
                                We will evaluate how clean your approach to writing CSS and Javascript
                                code is. You can use any CSS and Javascript 3rd party libraries without any
                                restriction.
                            </p>
                            <p>
                                If 3rd party css/javascript libraries are added to the project via
                                bower/npm/yarn you will get bonus points. If you use any task runner
                                (gulp/webpack) you will get bonus points as well. Slice service directory
                                page PSD mockup into HTML5/CSS3.
                            </p>
                            <button className='flat'><a href="#registerForm">Sing up now</a></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='users'>
                <div className='container'>
                    <h1>Our cheerful users</h1>
                    <p className='sub-header'>Attention! Sorting users by registration date</p>
                    <UsersContainer />
                </div>
            </div>
            <div className='registration' id='registerForm'>
                <div className='container'>
                    <h1>Register to get a work</h1>
                    <p className='sub-header'>Attention! After successful registration and alert, update the list of users in the block from the top</p>
                    <RegisterFormContainer />
                </div>
            </div>
        </>
    )
}

export default Home
import React from "react";
import './error.css'
import errorLogo from '../../randitError.png'

const Error = ({error}) => {
    return (
        <div id='background-container'>
            <img src={errorLogo} id='error-logo'/>
            <h2 id='error-message'>{error}</h2>
        </div>
    )
}

export default Error;
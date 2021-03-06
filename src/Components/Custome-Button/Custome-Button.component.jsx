import React from 'react';

import './Custome-Button.style.scss';


const CustomButton = ({children, isGoogleSignIn, ...otherProps}) => (
    <button class= {`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
        {...otherProps}>
        {children}

    </button>
)

export default CustomButton;



import React from 'react';
import {Link} from 'react-router-dom';

import {ReactComponent as Logo} from '../Asset/crown.svg'
import './header.style.scss';

const Header = () => (
    <div className = 'header'>
    
        <Link className='logo-continer' to='/'>
            <Logo className='logo'/>
        </Link>

        <div className = 'options'>
            <Link className='option' to='/Shop'>
                SHOP
            </Link>

            <Link className='option' to='/Shop'>
                CONTACT
            </Link>
        </div>

    </div>
)


export default Header;
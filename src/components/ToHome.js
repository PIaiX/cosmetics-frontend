import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../assets/imgs/logo.svg'

const ToHome = () => {
    return (
        <Link to='/' className='d-none d-md-block mb-5'>
            <Logo className='logo d-none d-md-block'/>
        </Link>
    );
};

export default ToHome;
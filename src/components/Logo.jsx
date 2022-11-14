import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as LogoIcon} from '../assets/images/logo.svg'

const Logo = () => {
    return (
        <Link to="/" className="d-none d-md-block mb-5">
            <LogoIcon className="logo d-none d-md-block" />
        </Link>
    )
}

export default Logo

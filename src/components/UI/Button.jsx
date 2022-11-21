import React from 'react'
import Loader from './Loader'

const Button = ({isLoading, children, ...props}) => {
    return <button {...props}>{isLoading ? <Loader size={20} color="#000" /> : children}</button>
}

export default Button

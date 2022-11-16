import React from 'react'

const Info = ({children, className, fontSize = 20, color = '#000', ...props}) => {
    return (
        <div
            className={`w-100 text-center p-5 ${className ? className : ''}`}
            style={{fontSize: `${fontSize}px`, color}}
            {...props}
        >
            {children}
        </div>
    )
}

export default Info

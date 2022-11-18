import React, {useEffect} from 'react'
import {useRouteError} from 'react-router-dom'
import Info from '../components/UI/Info'
import {FormattedMessage} from 'react-intl'

const Error = () => {
    const error = useRouteError()

    useEffect(() => {
        console.error(error?.statusText)
    }, [error])

    return (
        <main>
            <Info>
                <FormattedMessage id="errorPage" />
            </Info>
        </main>
    )
}

export default Error

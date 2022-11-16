import React from 'react'
import Container from 'react-bootstrap/Container'
import {Link} from 'react-router-dom'

const NotFound = () => {
    return (
        <main>
            <Container className="pt-5">
                <h2 className="text-center fs-40 mb-4">404</h2>
                <h1 className="text-center">Страница не найдена</h1>
                <Link to="/" className="btn-1 mx-auto">
                    Вернуться на главную
                </Link>
            </Container>
        </main>
    )
}

export default NotFound

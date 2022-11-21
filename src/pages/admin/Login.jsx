import React, {useCallback, useEffect} from 'react'
import {Row, Container, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import LoginForm from '../../components/forms/LoginForm'
import {login} from '../../store/actions/auth'

const Login = () => {
    const auth = useSelector((state) => state?.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onSubmitLogin = useCallback((data) => dispatch(login(data)), [])

    useEffect(() => {
        if (auth?.isAuth) {
            navigate('/admin')
        }
    }, [auth.isAuth])

    return (
        <main className="inner">
            <Container>
                <h1 className="text-center">Вход</h1>
                <Row>
                    <Col md={4} className="m-auto">
                        <LoginForm onSubmit={onSubmitLogin} />
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default Login

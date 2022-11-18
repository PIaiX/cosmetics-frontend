import React, {useCallback} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Logo from '../components/Logo'
import CheckoutForm from '../components/forms/CheckoutForm'
import {FormattedMessage} from 'react-intl'

const Checkout = () => {
    const onSubmit = useCallback((data = {}) => {
        console.log('data', data)
    }, [])

    return (
        <main className="inner">
            <Container>
                <Logo />
                <section className="product-page mb-8">
                    <Row className="gx-4 gx-xl-5">
                        <Col xs={12} lg={4} className="d-none d-lg-block">
                            <h2>
                                <FormattedMessage id="info" />
                            </h2>
                        </Col>
                        <Col xs={12} lg={8}>
                            <CheckoutForm onSubmit={onSubmit} />
                        </Col>
                    </Row>
                </section>
            </Container>
        </main>
    )
}

export default Checkout

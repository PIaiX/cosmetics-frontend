import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Logo from '../components/Logo'

const Contacts = () => {
    return (
        <main className="inner">
            <Container>
                <Logo />
                <section className="mb-8">
                    <h1>Контакты</h1>
                    <img src="/images/about.jpg" alt="about" className="img-fluid mb-4" />
                    <Row className="justify-content-center">
                        <Col xs={12} lg={8} xl={6} xxl={4}>
                            <h3>ПО ВОПРОСАМ СОТРУДНИЧЕСТВА:</h3>
                            <p className="mb-3">
                                <a href="mailto:HELLO@2211COSMETICS.COM​">HELLO@2211COSMETICS.COM​</a>
                            </p>
                            <p>
                                <a href="https://t.me/borninarmenia">TELEGRAM https://t.me/borninarmenia</a>
                            </p>
                        </Col>
                    </Row>
                </section>
            </Container>
        </main>
    )
}

export default Contacts

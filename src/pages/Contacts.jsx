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
                    <img src="/images/about.jpg" alt="about" className="img-fluid my-5" />
                    <Row className="justify-content-center fs-09 dark-gray">
                        <Col xs={12} lg={{span: 6, offset: 2}}>
                            <p className="blockTitle">Контакты:</p>
                            <p>
                                <strong>НАШ ТЕЛЕГРАМ-КАНАЛ:</strong>
                                <br /> <a href="https://t.me/borninarmenia2211">https://t.me/borninarmenia2211</a>
                                <br /> <strong>ПО ВОПРОСАМ СОТРУДНИЧЕСТВА:</strong>
                                <br />
                                HELLO<a href="mailto:INFO@2211COSMETICS.COM">@2211COSMETICS.COM</a>&ZeroWidthSpace;
                            </p>
                            <p>
                                TELEGRAM&nbsp;<a href="https://t.me/borninarmenia">https://t.me/borninarmenia</a>
                            </p>
                        </Col>
                    </Row>
                </section>
            </Container>
        </main>
    )
}

export default Contacts

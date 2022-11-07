import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ToHome from '../components/ToHome'

const Payment = () => {
    return (
        <main className='inner'>
            <Container>
                <ToHome />
                <section className='about-page mb-8'>
                    <h1>Оплата</h1>
                    <Row className='justify-content-center'>
                        <Col xs={12} lg={8} xl={6}>
                            <p>Вы можете оплатить заказ с помощью любой банковской карты Visa, MasterCard, а так же посредством международной платежной системы PayPal.</p>
                            <img src='imgs/payment.png' alt='payment' className='img-fluid mt-4'/>
                            <p>Платежи осуществляется через надежный и современный платежный сервис Wallet One
                            с использованием международного стандарта безопасности PCI DSS.</p>
                            <p>Данные банковских карт являются конфиденциальной информацией и обрабатываются исключительно процессинговым центром.</p>
                        </Col>
                    </Row>
                </section>
            </Container>
        </main>
    );
};

export default Payment;
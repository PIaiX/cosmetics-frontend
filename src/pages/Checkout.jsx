import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Logo from '../components/Logo'
import {Link} from 'react-router-dom'

const Checkout = () => {
    return (
        <main className="inner">
            <Container>
                <Logo />
                <section className="product-page mb-8">
                    <Row className='gx-4 gx-xl-5'>
                        <Col xs={12} lg={4} className='d-none d-lg-block'>
                            <h2>Информация</h2>
                        </Col>
                        <Col xs={12} lg={8}>
                            <form className='form-checkout'>
                                <h2>Клиент</h2>
                                <Row xs={1} md={2} className='gx-4 gx-xl-5 gy-4 mb-5'>
                                    <Col>
                                        <input type='text' placeholder='Имя' className='error'/>
                                    </Col>
                                    <Col>
                                        <input type='text' placeholder='Фамилия'/>
                                    </Col>
                                    <Col>
                                        <input type='tel' placeholder='Телефон'/>
                                        <input type='number' placeholder='Подтвердить телефон' className='mt-4'/>
                                    </Col>
                                    <Col>
                                        <input type='email' placeholder='Email'/>
                                        <input type='number' placeholder='Подтвердить email' className='mt-4'/>
                                    </Col>
                                </Row>
                                <h2>Доставка</h2>
                                <label  className='mb-5'>
                                    <input type='checkbox'  checked={true}/>
                                    <span className='ms-4'>Курьерская доставка</span>
                                </label>
                                <Row className='gx-4 gx-xl-5 gy-4 mb-5'>
                                    <Col xs={12} md={6}>
                                        <input type='text' placeholder='Улица' className='error'/>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <input type='text' placeholder='Город'/>
                                    </Col>
                                    <Col xs={12} md={4}>
                                        <input type='text' placeholder='Дом'/>
                                    </Col>
                                    <Col xs={12} md={4}>
                                        <input type='text' placeholder='Корпус'/>
                                    </Col>
                                    <Col xs={12} md={4}>
                                        <input type='text' placeholder='Квартира'/>
                                    </Col>
                                    <Col xs={12}>
                                        <input type='text' placeholder='Дополнительная информация'/>
                                    </Col>
                                </Row>
                                <h2>Оплата</h2>
                                <label  className='mb-5'>
                                    <input type='checkbox' checked={true}/>
                                    <span className='ms-4'>По карте</span>
                                </label>
                                <Row className='gx-4 gx-xl-5 gy-4 mb-5'>
                                    <Col xs={12} md={4}>
                                        <input type='text' placeholder='Введите промокод'/>
                                    </Col>
                                </Row>
                                <Row xs={1} md={2} className='gx-4 gx-xl-5'>
                                    <Col className='fs-09'>
                                        <div className='d-flex align-items-center justify-content-between mb-1'>
                                            <span>Сумма:</span>
                                            <span>4400</span>
                                        </div>
                                        <div className='d-flex align-items-center justify-content-between mb-1'>
                                            <span>Доставка:</span>
                                            <span>500</span>
                                        </div>
                                        <div className='d-flex align-items-center justify-content-between mb-4'>
                                            <span>Итого:</span>
                                            <span>4900</span>
                                        </div>
                                    </Col>
                                    <Col>
                                        <button type='submit' className='btn-1 w-100 mb-5'>Оплатить через Wallet One</button>
                                        <p className='fs-08'>Нажимая 'Оплатить', Вы соглашаетесь с <Link to='/public-offer' className='text-decoration-underline'>Публичной офертой</Link></p>
                                    </Col>
                                </Row>
                            </form>
                        </Col>
                    </Row>
                </section>
            </Container>
        </main>
    );
};

export default Checkout;
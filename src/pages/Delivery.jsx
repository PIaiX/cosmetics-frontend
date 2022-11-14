import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Logo from '../components/Logo'

const Delivery = () => {
    return (
        <main className="inner">
            <Container>
                <Logo />
                <section className="mb-8">
                    <h1>Доставка</h1>
                    <img src="/images/delivery.jpg" alt="delivery" className="img-fluid mb-5" />
                    <Row className="justify-content-center">
                        <Col xs={12} lg={8} xl={6}>
                            <h3 className="mb-4">
                                ПО ВОПРОСАМ ДОСТАВКИ,{' '}
                                <a href="https://t.me/borninarmenia" target="_blank" rel="noreferrer">
                                    TELEGRAM https://t.me/borninarmenia
                                </a>
                            </h3>

                            <h3 className="mb-1">КУРЬЕРСКОЙ СЛУЖБОЙ ПО МОСКВЕ</h3>
                            <p className="mb-4">
                                Стоимость доставки в пределах МКАД – 500 рублей.
                                <br />
                                Сроки доставки: 1-3 рабочих дня с момента подтверждения заказа.
                            </p>

                            <h3 className="mb-1">КУРЬЕРСКОЙ СЛУЖБОЙ ПО МОСКОВСКОЙ ОБЛАСТИ</h3>
                            <p className="mb-4">
                                Стоимость доставки по Московской области малогабаритных товаров - 1000 рублей.
                                <br />
                                Сроки доставки: 1-3 рабочих дня с момента подтверждения заказа.
                            </p>

                            <h3 className="mb-1">КУРЬЕРСКОЙ СЛУЖБОЙ ПО РОССИИ</h3>
                            <p className="mb-4">
                                Возможна доставка в более чем 60 городов России.
                                <br />
                                Стоимость и сроки доставки можно уточнить самостоятельно, написав нам в{' '}
                                <a href="https://t.me/borninarmenia" target="_blank" rel="noreferrer">
                                    TELEGRAM https://t.me/borninarmenia
                                </a>
                            </p>

                            <p className="mb-4">
                                + на почту: <a href="mailto:order@2211cosmetics.com">order@2211cosmetics.com</a>.
                            </p>

                            <h3 className="mb-2">МЕЖДУНАРОДНАЯ ДОСТАВКА </h3>
                            <h5>Доставка в страны Ближнего зарубежья </h5>
                            <p className="mb-4">
                                Доставка осуществляется курьером 'до двери'.
                                <br />
                                Стоимость рассчитывается индивидуально для Вашего заказа.
                                <br />
                                Доставка в Беларусь, Молдову, Казахстан составляет от 3 до 7 рабочих дней*
                                <br />
                                Срок доставки в города Абхазии - 5- 7 рабочих дней.
                            </p>

                            <h5>Доставка в страны Дальнего зарубежья </h5>
                            <p className="mb-4">
                                Доставка осуществляется курьером 'до двери'.
                                <br />
                                Стоимость и сроки доставки рассчитываются индивидуально для Вашего заказа.
                                <br />
                                Таможенные и импортные пошлины взимаются по прибытию заказа в страну назначения и
                                должны быть оплачены получателем заказа. Мы не регулируем данные пошлины и не можем
                                предсказать их размер.
                            </p>

                            <p>
                                *В связи с текущей геополитической обстановкой, сроки доставки за пределы России
                                рассчитываются индивидуально.
                            </p>
                        </Col>
                    </Row>
                </section>
            </Container>
        </main>
    )
}

export default Delivery

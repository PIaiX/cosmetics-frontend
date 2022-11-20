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
                <section className="about-page mb-8">
                    <h1>Доставка</h1>
                    <img src="/images/delivery.jpg" alt="delivery" className="img-fluid mb-5" />
                    <Row className="justify-content-center">
                        <Col  xs={12} lg={{span: 6, offset: 2}}>
                        <p className='dark-gray'><strong>ПО&nbsp;ВОПРОСАМ ДОСТАВКИ &nbsp;</strong>, <strong><a href="https://t.me/borninarmenia" target="_blank">TELEGRAM</a>&nbsp;<a href="https://t.me/borninarmenia">https://t.me/borninarmenia</a></strong></p> 
                        <p className='dark-gray'><strong>КУРЬЕРСКОЙ СЛУЖБОЙ ПО МОСКВЕ</strong><br/>
Стоимость доставки в пределах МКАД – 500 рублей.<br/>
Сроки доставки: 1-3 рабочих дня с момента подтверждения заказа.<br/> <br/> <strong>КУРЬЕРСКОЙ СЛУЖБОЙ ПО МОСКОВСКОЙ ОБЛАСТИ</strong><br/>
Стоимость доставки по Московской области малогабаритных товаров - 1000 рублей.<br/>
Сроки доставки: 1-3 рабочих дня с момента подтверждения заказа.&nbsp;<br/> <br/> <strong>КУРЬЕРСКОЙ СЛУЖБОЙ ПО РОССИИ</strong><br/>
Возможна доставка в более чем 60 городов России.<br/>
Стоимость и сроки доставки можно уточнить самостоятельно, написав нам в&nbsp;<strong><a href="https://t.me/borninarmenia" target="_blank">TELEGRAM</a>&nbsp;<a href="https://t.me/borninarmenia">https://t.me/borninarmenia</a></strong></p> 
<p className='dark-gray'>+ на почту: order@2211cosmetics.com.<br/> <br/> <strong>МЕЖДУНАРОДНАЯ ДОСТАВКА&nbsp;</strong><br/> <em>Доставка в страны Ближнего зарубежья&nbsp;</em><br/>
Доставка осуществляется курьером 'до двери'. &nbsp;<br/>
Стоимость рассчитывается индивидуально для Вашего заказа.&nbsp;&nbsp;<br/>
Доставка в Беларусь, Молдову, Казахстан составляет&nbsp;от 3 до 7 рабочих дней*&nbsp;<br/>
Срок доставки в города Абхазии -&nbsp;5- 7 рабочих дней.&nbsp;<br/> <br/> <em>Доставка в страны Дальнего зарубежья&nbsp;</em><br/>
Доставка осуществляется курьером 'до двери'.<br/>
Стоимость и сроки доставки рассчитываются&nbsp;индивидуально&nbsp;для Вашего заказа.&nbsp;<br/>
Таможенные и импортные пошлины взимаются по прибытию заказа в страну назначения<br/>
и должны быть оплачены получателем заказа. Мы не регулируем данные пошлины<br/>
и не можем предсказать их размер.</p> <p className='dark-gray'>*В связи с текущей геополитической обстановкой,&nbsp;сроки доставки за пределы России рассчитываются&nbsp;индивидуально.</p>

                        </Col>
                    </Row>
                </section>
            </Container>
        </main>
    )
}

export default Delivery

import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ToHome from '../components/ToHome';

const PointsOfSale = () => {
    return (
        <main className='inner'>
            <Container>
                <ToHome />
                <section className='mb-8'>
                    <h1>Где купить</h1>
                    <img src='imgs/where.png' alt='where to buy' className='img-fluid mb-5' />

                    <Row xs={1} md={2} lg={3} className='g-4 mb-5'>
                        <Col>
                            <div className='fst-italic mb-3'>Erevan, Armenia</div>
                            <div className='fw-5 mb-3'>Sirun Ankyun</div>
                            <div className='fw-5 mb-3'>Location:</div>
                            <div className='mb-3'>8 Vahram Papazyan St (shopping mall RIO)</div>
                            <div className='fw-5 mb-3'>Phone: </div>
                            <div className='mb-3'><a href='tel:+37(4) 11 281888'>+37(4) 11 281888</a></div>
                        </Col>
                        <Col>
                            <div className='fst-italic mb-3'>Paris, France</div>
                            <div className='fw-5 mb-3'>My Green Brands</div>
                            <div className='fw-5 mb-3'>Location:</div>
                            <div className='mb-3'>49, Rue Saint-Georges</div>
                            <div className='fw-5 mb-3'>Phone:</div>
                            <div className='mb-3'><a href='tel:+33 (0) 9 87 00 93 93'>+33 (0) 9 87 00 93 93</a></div>
                        </Col>
                        <Col>
                            <div className='fst-italic mb-3'>Prague,Czech Respublic</div>
                            <div className='fw-5 mb-3'>Naqed</div>
                            <div className='fw-5 mb-3'>Location:</div>
                            <div className='mb-3'>Husitská 107/3, 130 00 Praha 3</div>
                            <div className='fw-5 mb-3'>Phone:</div>
                            <div className='mb-3'><a href='tel:+42 06 01 56 97 57'>+42 06 01 56 97 57</a></div>
                            <div className='mb-3'><a href='www.naqed.cz' target='_blank'>www.naqed.cz</a></div>
                        </Col>
                    </Row>

                    <Row xs={1} md={2} lg={3} className='g-4 mb-5'>
                        <Col xs={12} md={12}><div className='fst-italic'>Москва,Россия</div></Col>
                        <Col>
                            <div className='fw-5 mb-3'>Veter Shop</div>
                            <div className='fw-5 mb-3'>Адрес:</div>
                            <div className='mb-3'>Кутузовский проспект, 1/7</div>
                            <div className='fw-5 mb-3'>Телефон:</div>
                            <div className='mb-3'><a href='tel:+7 (903) 739-02-07'>+7 (903) 739-02-07</a></div>
                            <div className='fw-5 mb-3'>Часы работы:</div>
                            <div className='mb-3'>11.00-20.00, ежедневно</div>
                        </Col>
                        <Col>
                            <div className='fw-5 mb-3'>Бутик Aizel</div>
                            <div className='fw-5 mb-3'>Адрес:</div>
                            <div className='mb-3'>Столешников переулок, д. 10/3</div>
                            <div className='fw-5 mb-3'>Часы работы:</div>
                            <div>Пн-Сб с 11 до 22, Вс с 12 до 22</div>
                        </Col>
                        <Col>
                            <div className='fw-5 mb-3'>Золотое Яблоко</div>
                            <div className='fw-5 mb-3'>Адрес:</div>
                            <div className='mb-3'>ТЦ МЕТРОПОЛИС, Ленинградское шоссе, 16Ас4</div>
                            <div className='fw-5 mb-3'>Часы работы:</div>
                            <div>10.00-23.00, ежедневно</div>
                        </Col>
                        <Col>
                            <div className='fw-5 mb-3'>Магазины Leform</div>
                            <div className='fw-5 mb-3'>Адреса:</div>
                            <div className='mb-3'>
                                Краснопролетарская, 30, стр. 1 (м. Новослободская)
                                <br/>Улица Поварская, дом 35/28 (м. Баррикадная)
                                <br/>Дмитровский пер., 7 (м. Театральная)
                                <br/>Дмитровскоe шоссе, 35-ый км.
                            </div>
                            <div className='fw-5 mb-3'>Часы работы:</div>
                            <div>c 11:00 до 22:00</div>
                        </Col>
                        <Col>
                            <div className='fw-5 mb-3'>Студия йоги Funny Studio</div>
                            <div className='fw-5 mb-3'>Адрес:</div>
                            <div className='mb-3'>Ермолаевсrий переулок, 4</div>
                        </Col>
                    </Row>

                    <Row xs={1} md={2} lg={3} className='g-4 mb-5'>
                        <Col>
                            <div className='fst-italic mb-3'>МО, Бузаево</div>
                            <div className='fw-5 mb-3'>Магазин Амбар</div>
                            <div className='fw-5 mb-3'>Адрес:</div>
                            <div className='mb-3'>дер.Бузаево, 100</div>
                            <div className='fw-5 mb-3'>Телефон:</div>
                            <div className='mb-3'><a href='tel:+7 985 022-16-15'>+7 985 022-16-15</a></div>
                        </Col>
                        <Col>
                            <div className='fst-italic mb-3'>МО, Сколково</div>
                            <div className='fw-5 mb-3'>Магазин Сезоны</div>
                            <div className='fw-5 mb-3'>Адрес:</div>
                            <div className='mb-3'>п.Заречье, ул. Весенняя 2с5</div>
                            <div className='fw-5 mb-3'>Телефон:</div>
                            <div className='mb-3'><a href='tel:+7 498 785-81-21'>+7 498 785-81-21</a></div>
                            <div className='fw-5 mb-3'>Часы работы:</div>
                            <div className='mb-3'>8.00-23.00, ежедневно</div>
                        </Col>
                    </Row>

                    <Row xs={1} md={2} lg={3} className='g-4 mb-5'>
                        <Col xs={12} md={12}><div className='fst-italic'>Санкт-Петербург</div></Col>
                        <Col>
                            <div className='fw-5 mb-3'>Gleam</div>
                            <div className='fw-5 mb-3'>Адрес:</div>
                            <div className='mb-3'>Моховая 45 </div>
                            <div className='fw-5 mb-3'>Телефон:</div>
                            <div className='mb-3'><a href='tel:+7(951)651-66-99'>+7(951)651-66-99</a></div>
                            <div className='fw-5 mb-3'>Часы работы:</div>
                            <div className='mb-3'>12.00-19.00</div>
                        </Col>
                        <Col>
                            <div className='fw-5 mb-3'>MORE BEAUTY</div>
                            <div className='fw-5 mb-3'>Адрес:</div>
                            <div className='mb-3'>Дальневосточный пр.12 к.2</div>
                            <div className='fw-5 mb-3'>Телефон:</div>
                            <div className='mb-3'><a href='tel:+7 911 771 90 00'>+7 911 771 90 00</a></div>
                            <div className='fw-5 mb-3'>Часы работы:</div>
                            <div className='mb-3'>10.00-22.00, ежедневно</div>
                        </Col>
                    </Row>

                    <Row xs={1} md={2} lg={3} className='g-4 mb-5'>
                        <Col>
                            <div className='fst-italic mb-3'>Самара</div>
                            <div className='fw-5 mb-3'>Цветочный дом GardenN</div>
                            <div className='fw-5 mb-3'>Адрес:</div>
                            <div className='mb-3'>ул. Льва Толстого, 44</div>
                            <div className='fw-5 mb-3'>Телефон:</div>
                            <div className='mb-3'><a href='tel:+79277258855'>+79277258855</a></div>
                            <div className='fw-5 mb-3'>Часы работы:</div>
                            <div className='mb-3'>11.00-20.00, ежедневно</div>
                        </Col>
                        <Col>
                            <div className='fst-italic mb-3'>Сочи</div>
                            <div className='fw-5 mb-3'>Paeonia</div>
                            <div className='fw-5 mb-3'>Адрес:</div>
                            <div className='mb-3'>Красная Поляна</div>
                            <div className='fw-5 mb-3'>Телефон:</div>
                            <div className='mb-3'><a href='tel:+79180073968'>+79180073968</a></div>
                            <div className='fw-5 mb-3'>Часы работы:</div>
                            <div className='mb-3'>10.00-22.00</div>
                        </Col>
                    </Row>

                    <Row xs={1} md={2} lg={3} className='g-4 mb-5'>
                        <Col>
                            <div className='fst-italic mb-3'>Минск, Беларусь</div>
                            <div className='fw-5 mb-3'>Пряная Луна</div>
                            <div className='fw-5 mb-3'>Адрес:</div>
                            <div className='mb-3'>Карла Маркса, 26</div>
                            <div className='fw-5 mb-3'>Телефон:</div>
                            <div className='mb-3'><a href='tel:+375-29-6302240'>+375-29-6302240</a></div>
                            <div className='fw-5 mb-3'>Часы работы:</div>
                            <div className='mb-3'>
                                Пн-Сб 11.00-20.00
                                <br/>Вс. 12.00-18.00
                            </div>
                        </Col>
                        <Col>
                            <div className='fst-italic mb-3'>Стокгольм, Швеция</div>
                            <div className='fw-5 mb-3'>Фаблаб</div>
                            <div className='fw-5 mb-3'>Адрес:</div>
                            <div className='mb-3'>Бондегатан, 7</div>
                            <div className='fw-5 mb-3'>Телефон:</div>
                            <div className='mb-3'><a href='tel:+46 8 420 516 37'>+46 8 420 516 37</a></div>
                        </Col>
                        <Col>
                            <div className='fst-italic mb-3'>Вильнюс, Литва</div>
                            <div className='fw-5 mb-3'>Молекула</div>
                            <div className='fw-5 mb-3'>Адрес:</div>
                            <div className='mb-3'>VOKIEČIŲ G. 5-14</div>
                            <div className='fw-5 mb-3'>Телефон:</div>
                            <div className='mb-3'><a href='tel:+370 688 88 644'>+370 688 88 644</a></div>
                            <div className='fw-5 mb-3'>Часы работы:</div>
                            <div className='mb-3'>10.00-19.00, ежедневно</div>
                        </Col>
                        <Col>
                            <div className='fst-italic mb-3'>Лондон, Великобритания</div>
                            <div className='fw-5 mb-3'>Oxygen Boutique</div>
                            <div className='fw-5 mb-3'>Адрес:</div>
                            <div className='mb-3'>51 Eastcastle str</div>
                            <div className='fw-5 mb-3'>Телефон:</div>
                            <div className='mb-3'><a href='tel:+44 20 7636 6001'>+44 20 7636 6001</a></div>
                        </Col>
                    </Row>
                </section>
            </Container>
        </main>
    );
};

export default PointsOfSale;
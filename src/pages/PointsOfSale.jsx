import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Logo from '../components/Logo'

const PointsOfSale = () => {
    return (
        <main className="inner">
            <Container>
                <Logo />
                <section className="mb-8">
                    <h1>Где купить</h1>
                    <img src="/images/where.png" alt="where to buy" className="img-fluid d-block mx-auto my-5" />
                    <Row className="justify-content-center fs-09 dark-gray">
                        <Col xs={12} lg={{span: 6, offset: 2}}>
                            <div className='mb-5'>
                                <div className="fst-italic mb-4">Erevan, Armenia</div>
                                <div className="fw-7 mb-4">Sirun Ankyun</div>
                                <div className="fw-7 mb-4">Location:</div>
                                <div className="mb-4">8 Vahram Papazyan St (shopping mall RIO)</div>
                                <div className="fw-7 mb-4">Phone: </div>
                                <div className="mb-4">
                                    <a href="tel:+37(4) 11 281888">+37(4) 11 281888</a>
                                </div>
                            </div>

                            <div className='mb-5'>
                                <div className="fst-italic mb-4">Paris, France</div>
                                <div className="fw-7 mb-4">My Green Brands</div>
                                <div className="fw-7 mb-4">Location:</div>
                                <div className="mb-4">49, Rue Saint-Georges</div>
                                <div className="fw-7 mb-4">Phone:</div>
                                <div className="mb-4">
                                    <a href="tel:+33 (0) 9 87 00 93 93">+33 (0) 9 87 00 93 93</a>
                                </div>
                            </div>

                            <div className='mb-5'>
                                <div className="fst-italic mb-4">Prague,Czech Respublic</div>
                                <div className="fw-7 mb-4">Naqed</div>
                                <div className="fw-7 mb-4">Location:</div>
                                <div className="mb-4">Husitská 107/3, 130 00 Praha 3</div>
                                <div className="fw-7 mb-4">Phone:</div>
                                <div className="mb-4">
                                    <a href="tel:+42 06 01 56 97 57">+42 06 01 56 97 57</a>
                                </div>
                                <div className="mb-4">
                                    <a href="www.naqed.cz" target="_blank">
                                        www.naqed.cz
                                    </a>
                                </div>
                            </div>

                            <div className='mb-5'>
                                <div className="fst-italic mb-4">Москва,Россия</div>
                                <div className="fw-7 mb-4">Veter Shop</div>
                                <div className="fw-7 mb-4">Адрес:</div>
                                <div className="mb-4">Кутузовский проспект, 1/7</div>
                                <div className="fw-7 mb-4">Телефон:</div>
                                <div className="mb-4">
                                    <a href="tel:+7 (903) 739-02-07">+7 (903) 739-02-07</a>
                                </div>
                                <div className="fw-7 mb-4">Часы работы:</div>
                                <div className="mb-4">11.00-20.00, ежедневно</div>
                            </div>

                            <div className='mb-5'>
                                <div className="fw-7 mb-4">Бутик Aizel</div>
                                <div className="fw-7 mb-4">Адрес:</div>
                                <div className="mb-4">Столешников переулок, д. 10/3</div>
                                <div className="fw-7 mb-4">Часы работы:</div>
                                <div>Пн-Сб с 11 до 22, Вс с 12 до 22</div>
                            </div>

                            <div className='mb-5'>
                                <div className="fw-7 mb-4">Золотое Яблоко</div>
                                <div className="fw-7 mb-4">Адрес:</div>
                                <div className="mb-4">ТЦ МЕТРОПОЛИС, Ленинградское шоссе, 16Ас4</div>
                                <div className="fw-7 mb-4">Часы работы:</div>
                                <div>10.00-23.00, ежедневно</div>
                            </div>

                            <div className='mb-5'>
                                <div className="fw-7 mb-4">Магазины Leform</div>
                                <div className="fw-7 mb-4">Адреса:</div>
                                <div className="mb-4">
                                    Краснопролетарская, 30, стр. 1 (м. Новослободская)
                                    <br />
                                    Улица Поварская, дом 35/28 (м. Баррикадная)
                                    <br />
                                    Дмитровский пер., 7 (м. Театральная)
                                    <br />
                                    Дмитровскоe шоссе, 35-ый км.
                                </div>
                                <div className="fw-7 mb-4">Часы работы:</div>
                                <div>c 11:00 до 22:00</div>
                            </div>

                            <div className='mb-5'>
                                <div className="fw-7 mb-4">Студия йоги Funny Studio</div>
                                <div className="fw-7 mb-4">Адрес:</div>
                                <div className="mb-4">Ермолаевсrий переулок, 4</div>
                            </div>

                            <div className='mb-5'>
                                <div className="fst-italic mb-4">МО, Бузаево</div>
                                <div className="fw-7 mb-4">Магазин Амбар</div>
                                <div className="fw-7 mb-4">Адрес:</div>
                                <div className="mb-4">дер.Бузаево, 100</div>
                                <div className="fw-7 mb-4">Телефон:</div>
                                <div className="mb-4">
                                    <a href="tel:+7 985 022-16-15">+7 985 022-16-15</a>
                                </div>
                            </div>

                            <div className='mb-5'>
                                <div className="fst-italic mb-4">МО, Сколково</div>
                                <div className="fw-7 mb-4">Магазин Сезоны</div>
                                <div className="fw-7 mb-4">Адрес:</div>
                                <div className="mb-4">п.Заречье, ул. Весенняя 2с5</div>
                                <div className="fw-7 mb-4">Телефон:</div>
                                <div className="mb-4">
                                    <a href="tel:+7 498 785-81-21">+7 498 785-81-21</a>
                                </div>
                                <div className="fw-7 mb-4">Часы работы:</div>
                                <div className="mb-4">8.00-23.00, ежедневно</div>
                            </div>

                            <div className='mb-5'>
                                <div className="fst-italic mb-4">Санкт-Петербург</div>
                                <div className="fw-7 mb-4">Gleam</div>
                                <div className="fw-7 mb-4">Адрес:</div>
                                <div className="mb-4">Моховая 45 </div>
                                <div className="fw-7 mb-4">Телефон:</div>
                                <div className="mb-4">
                                    <a href="tel:+7(951)651-66-99">+7(951)651-66-99</a>
                                </div>
                                <div className="fw-7 mb-4">Часы работы:</div>
                                <div className="mb-4">12.00-19.00</div>
                            </div>

                            <div className='mb-5'>
                                <div className="fw-7 mb-4">MORE BEAUTY</div>
                                <div className="fw-7 mb-4">Адрес:</div>
                                <div className="mb-4">Дальневосточный пр.12 к.2</div>
                                <div className="fw-7 mb-4">Телефон:</div>
                                <div className="mb-4">
                                    <a href="tel:+7 911 771 90 00">+7 911 771 90 00</a>
                                </div>
                                <div className="fw-7 mb-4">Часы работы:</div>
                                <div className="mb-4">10.00-22.00, ежедневно</div>
                            </div>

                            <div className='mb-5'>
                                <div className="fst-italic mb-4">Самара</div>
                                <div className="fw-7 mb-4">Цветочный дом GardenN</div>
                                <div className="fw-7 mb-4">Адрес:</div>
                                <div className="mb-4">ул. Льва Толстого, 44</div>
                                <div className="fw-7 mb-4">Телефон:</div>
                                <div className="mb-4">
                                    <a href="tel:+79277258855">+79277258855</a>
                                </div>
                                <div className="fw-7 mb-4">Часы работы:</div>
                                <div className="mb-4">11.00-20.00, ежедневно</div>
                            </div>

                            <div className='mb-5'>
                                <div className="fst-italic mb-4">Сочи</div>
                                <div className="fw-7 mb-4">Paeonia</div>
                                <div className="fw-7 mb-4">Адрес:</div>
                                <div className="mb-4">Красная Поляна</div>
                                <div className="fw-7 mb-4">Телефон:</div>
                                <div className="mb-4">
                                    <a href="tel:+79180073968">+79180073968</a>
                                </div>
                                <div className="fw-7 mb-4">Часы работы:</div>
                                <div className="mb-4">10.00-22.00</div>
                            </div>

                            <div className='mb-5'>
                                <div className="fst-italic mb-4">Минск, Беларусь</div>
                                <div className="fw-7 mb-4">Пряная Луна</div>
                                <div className="fw-7 mb-4">Адрес:</div>
                                <div className="mb-4">Карла Маркса, 26</div>
                                <div className="fw-7 mb-4">Телефон:</div>
                                <div className="mb-4">
                                    <a href="tel:+375-29-6302240">+375-29-6302240</a>
                                </div>
                                <div className="fw-7 mb-4">Часы работы:</div>
                                <div className="mb-4">
                                    Пн-Сб 11.00-20.00
                                    <br />
                                    Вс. 12.00-18.00
                                </div>
                            </div>

                            <div className='mb-5'>
                                <div className="fst-italic mb-4">Стокгольм, Швеция</div>
                                <div className="fw-7 mb-4">Фаблаб</div>
                                <div className="fw-7 mb-4">Адрес:</div>
                                <div className="mb-4">Бондегатан, 7</div>
                                <div className="fw-7 mb-4">Телефон:</div>
                                <div className="mb-4">
                                    <a href="tel:+46 8 420 516 37">+46 8 420 516 37</a>
                                </div>
                            </div>

                            <div className='mb-5'>
                                <div className="fst-italic mb-4">Вильнюс, Литва</div>
                                <div className="fw-7 mb-4">Молекула</div>
                                <div className="fw-7 mb-4">Адрес:</div>
                                <div className="mb-4">VOKIEČIŲ G. 5-14</div>
                                <div className="fw-7 mb-4">Телефон:</div>
                                <div className="mb-4">
                                    <a href="tel:+370 688 88 644">+370 688 88 644</a>
                                </div>
                                <div className="fw-7 mb-4">Часы работы:</div>
                                <div className="mb-4">10.00-19.00, ежедневно</div>
                            </div>

                            <div className='mb-5'>
                                <div className="fst-italic mb-4">Лондон, Великобритания</div>
                                <div className="fw-7 mb-4">Oxygen Boutique</div>
                                <div className="fw-7 mb-4">Адрес:</div>
                                <div className="mb-4">51 Eastcastle str</div>
                                <div className="fw-7 mb-4">Телефон:</div>
                                <div className="mb-4">
                                    <a href="tel:+44 20 7636 6001">+44 20 7636 6001</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </section>
            </Container>
        </main>
    )
}

export default PointsOfSale

import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Collapse from 'react-bootstrap/Collapse'
import ToHome from '../components/ToHome'
import Recommendations from '../components/Recommendations'
import { IoAddOutline, IoRemoveOutline } from "react-icons/io5"

const Product = () => {
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)

    return (
        <main className='inner'>
            <Container>
                <ToHome />
                <section className='product-page mb-8'>
                    <Row>
                        <Col md={6}>
                            <Row>
                                <Col xs={12} xl={3}>
                                    <h2>Лицо</h2>
                                </Col>
                                <Col xs={12} xl={9}>
                                    <img src='imgs/products/EC - КРЕМ ДЛЯ ГЛАЗ ГИНКГО + ИРИС.jpg' alt='EC - КРЕМ ДЛЯ ГЛАЗ ГИНКГО + ИРИС' className='img-fluid'/>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6} xl={5}>
                            <h1>EC - КРЕМ ДЛЯ ГЛАЗ ГИНКГО + ИРИС</h1>
                            <h6 className='mb-5'>вес нетто 0.52 унция объем 15 мл</h6>
                            <p>Специально разработанный крем для области вокруг глаз делает ее эластичной и упругой, заметно уменьшает темные круги и отечность под глазами, укрепляет стенки капилляров и борется с мелкими морщинами.Экстракт гингко обладает сильным антиоксидантным действием, снимает отечность, способствует сокращению морщин, осветлению пигментных пятен, укреплению стенок капилляров и помогает избавиться от темных кругов под глазами. Масло томану обладает заживляющими и антибактериальными свойствами, богато жирными кислотами, увлажняет кожу и придает ей эластичность и упругость.</p>

                            <ul className='info-list list-unstyled mt-5'>
                                <li>
                                    <button type='button' onClick={() => setOpen(!open)} aria-expanded={open}>
                                        <span>Показания к применению</span>
                                        {
                                            (open)
                                            ? <IoRemoveOutline/>
                                            : <IoAddOutline/>
                                        }
                                    </button>
                                    <Collapse in={open}>
                                        <div>
                                            <p className='p-3'>Небольшое количество крема нанести на кончики пальцев и легкими похлопывающими движениями нанести на область вокруг глаз.</p>
                                        </div>
                                    </Collapse>
                                </li>
                                <li>
                                    <button type='button' onClick={() => setOpen2(!open2)} aria-expanded={open2}>
                                        <span>Активные компоненты</span>
                                        {
                                            (open2)
                                            ? <IoRemoveOutline/>
                                            : <IoAddOutline/>
                                        }
                                    </button>
                                    <Collapse in={open2}>
                                        <div>
                                            <p className='p-3'>Ginkgo biloba leaf extract,coffeaarabica(coffee) seed extract ,iris pallida(dalmation iris)root oil, centella asiatica extract.</p>
                                        </div>
                                    </Collapse>
                                </li>
                            </ul>

                            <div className='d-flex justify-content-between align-items-center mt-5'>
                                <button type='button' className='btn-1'>В корзину - 3300 </button>
                            </div>
                        </Col>
                    </Row>
                    
                </section>

                <Recommendations />
            </Container>
        </main>
    );
};

export default Product;
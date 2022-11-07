import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ToHome from '../components/ToHome'
import ProductCard from '../components/ProductCard'
import Recommendations from '../components/Recommendations'

const Category = () => {
    return (
        <main className='inner'>
            <Container>
                <ToHome />
                <section className='mb-8'>
                    <h1>Лицо</h1>
                    <Row xs={1} sm={2} md={3} xl={4} className='gy-5 gx-4 g-xxl-5'>
                        <Col>
                            <ProductCard inStock={true} title={'EC - КРЕМ ДЛЯ ГЛАЗ ГИНКГО + ИРИС'} imgUrl={'imgs/products/EC - КРЕМ ДЛЯ ГЛАЗ ГИНКГО + ИРИС.jpg'} />
                        </Col>
                        <Col>
                            <ProductCard title={'EC - КРЕМ ДЛЯ ГЛАЗ ГИНКГО + ИРИС'} imgUrl={'imgs/products/EC - КРЕМ ДЛЯ ГЛАЗ ГИНКГО + ИРИС.jpg'} />
                        </Col>
                        <Col>
                            <ProductCard inStock={true} title={'EC - КРЕМ ДЛЯ ГЛАЗ ГИНКГО + ИРИС'} imgUrl={'imgs/products/EC - КРЕМ ДЛЯ ГЛАЗ ГИНКГО + ИРИС.jpg'} />
                        </Col>
                        <Col>
                            <ProductCard inStock={true} title={'EC - КРЕМ ДЛЯ ГЛАЗ ГИНКГО + ИРИС'} imgUrl={'imgs/products/EC - КРЕМ ДЛЯ ГЛАЗ ГИНКГО + ИРИС.jpg'} />
                        </Col>
                        <Col>
                            <ProductCard inStock={true} title={'EC - КРЕМ ДЛЯ ГЛАЗ ГИНКГО + ИРИС'} imgUrl={'imgs/products/EC - КРЕМ ДЛЯ ГЛАЗ ГИНКГО + ИРИС.jpg'} />
                        </Col>
                        <Col>
                            <ProductCard inStock={true} title={'EC - КРЕМ ДЛЯ ГЛАЗ ГИНКГО + ИРИС'} imgUrl={'imgs/products/EC - КРЕМ ДЛЯ ГЛАЗ ГИНКГО + ИРИС.jpg'} />
                        </Col>
                        <Col>
                            <ProductCard title={'EC - КРЕМ ДЛЯ ГЛАЗ ГИНКГО + ИРИС'} imgUrl={'imgs/products/EC - КРЕМ ДЛЯ ГЛАЗ ГИНКГО + ИРИС.jpg'} />
                        </Col>
                    </Row>
                </section>
                
                <Recommendations />
            </Container>
        </main>
    );
};

export default Category;
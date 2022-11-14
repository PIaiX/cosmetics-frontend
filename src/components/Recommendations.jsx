import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProductCard from './ProductCard'

const Recommendations = () => {
    return (
        <section className="mb-8">
            <h2>Посмотрите еще</h2>
            <Row xs={1} sm={2} md={3} xl={4} className="gy-5 gx-4 g-xxl-5">
                <Col>
                    <ProductCard
                        inStock={true}
                        title={'EC - КРЕМ ДЛЯ ГЛАЗ ГИНКГО + ИРИС'}
                        imgUrl={'/images/products/EC - КРЕМ ДЛЯ ГЛАЗ ГИНКГО + ИРИС.jpg'}
                    />
                </Col>
                <Col>
                    <ProductCard
                        inStock={true}
                        title={'SS -СЫВОРОТКА ДЛЯ КОНЧИКОВ ВОЛОС КАМЕЛИЯ + ЖИДКИЙ ШЁЛК'}
                        imgUrl={'/images/products/SS -СЫВОРОТКА ДЛЯ КОНЧИКОВ ВОЛОС КАМЕЛИЯ + ЖИДКИЙ ШЁЛК.jpg'}
                    />
                </Col>
                <Col>
                    <ProductCard
                        inStock={true}
                        title={'EC - КРЕМ ДЛЯ ГЛАЗ ГИНКГО + ИРИС'}
                        imgUrl={'/images/products/EC - КРЕМ ДЛЯ ГЛАЗ ГИНКГО + ИРИС.jpg'}
                    />
                </Col>
                <Col>
                    <ProductCard
                        inStock={false}
                        title={'EC - КРЕМ ДЛЯ ГЛАЗ ГИНКГО + ИРИС'}
                        imgUrl={'/images/products/EC - КРЕМ ДЛЯ ГЛАЗ ГИНКГО + ИРИС.jpg'}
                    />
                </Col>
            </Row>
        </section>
    )
}

export default Recommendations

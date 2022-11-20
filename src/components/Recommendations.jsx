import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProductCard from './ProductCard'

const Recommendations = ({products = [], title = ''}) => {
    return (
        products?.length && (
            <>
                <h2>{title}</h2>
                <Row xs={1} sm={2} md={3} xl={4} className="gy-5 gx-4 g-xxl-5">
                    {products.map((item) => (
                        <Col key={item?.id}>
                            <ProductCard product={item} />
                        </Col>
                    ))}
                </Row>
            </>
        )
    )
}

export default Recommendations

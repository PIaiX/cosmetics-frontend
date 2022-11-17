import React, {useEffect, useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Logo from '../components/Logo'
import ProductCard from '../components/ProductCard'
import Recommendations from '../components/Recommendations'
import {useParams} from 'react-router-dom'
import {getCategory} from '../services/category'
import Info from '../components/UI/Info'

const Category = () => {
    let {categoryId} = useParams()
    categoryId = +categoryId
    const [category, setCategory] = useState({
        isLoaded: false,
        error: null,
        item: null,
        products: [],
    })

    useEffect(() => {
        getCategory({categoryId})
            .then((res) =>
                setCategory((prev) => ({...prev, isLoaded: true, item: res?.category, products: res?.products}))
            )
            .catch((error) => setCategory((prev) => ({...prev, isLoaded: true, error})))
    }, [categoryId])

    return (
        <main className="inner">
            <Container>
                <Logo />
                {!category?.error ? (
                    <section className="mb-8">
                        {category?.products?.length > 0 && category?.item?.title && <h1>{category?.item?.title}</h1>}
                        {category?.products?.length > 0 ? (
                            <Row xs={1} sm={2} md={3} xl={4} className="gy-5 gx-4 g-xxl-5">
                                {category.products.map((item) => (
                                    <Col key={item?.id}>
                                        <ProductCard product={item} />
                                    </Col>
                                ))}
                            </Row>
                        ) : (
                            <Info>В данной котегории нет товаров</Info>
                        )}
                    </section>
                ) : (
                    <Info>Не удалось загрузить товары в данной категории</Info>
                )}
            </Container>
        </main>
    )
}

export default Category

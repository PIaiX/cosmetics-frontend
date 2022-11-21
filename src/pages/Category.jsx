import React, {useEffect, useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Logo from '../components/Logo'
import ProductCard from '../components/ProductCard'
import {useParams} from 'react-router-dom'
import {getCategory, getCategoryRecommendations} from '../services/category'
import Info from '../components/UI/Info'
import Recommendations from '../components/Recommendations'
import Loader from '../components/UI/Loader'

const Category = () => {
    let {categoryId} = useParams()
    categoryId = +categoryId
    const [category, setCategory] = useState({
        isLoaded: false,
        error: null,
        item: null,
        products: [],
    })
    const [categoryRecommendations, setCategoryRecommendations] = useState({
        isLoaded: false,
        error: null,
        items: [],
    })

    useEffect(() => {
        getCategory({categoryId})
            .then((res) =>
                setCategory((prev) => ({...prev, isLoaded: true, item: res?.category, products: res?.products}))
            )
            .catch((error) => setCategory((prev) => ({...prev, isLoaded: true, error})))
    }, [categoryId])

    useEffect(() => {
        if (category?.products?.length) {
            getCategoryRecommendations({categoryId})
                .then((res) =>
                    setCategoryRecommendations((prev) => ({...prev, isLoaded: true, items: res?.recommends}))
                )
                .catch((error) => setCategoryRecommendations((prev) => ({...prev, isLoaded: true, error})))
        }
    }, [categoryId, category?.item])

    return (
        <main className="inner">
            <Container>
                <Logo />
                {!category?.error ? (
                    category?.isLoaded ? (
                        <section className="mb-8">
                            <div className="mb-8">
                                {category?.products?.length > 0 && category?.item?.title && (
                                    <h1>{category?.item?.title}</h1>
                                )}
                                {category?.products?.length > 0 ? (
                                    <Row xs={1} sm={2} md={3} xl={4} className="gy-5 gx-4 g-xxl-5">
                                        {category.products.map((item) => (
                                            <Col key={item?.id}>
                                                <ProductCard product={item} />
                                            </Col>
                                        ))}
                                    </Row>
                                ) : (
                                    <Info>В данной категории нет товаров</Info>
                                )}
                            </div>

                            {!categoryRecommendations?.error ? (
                                categoryRecommendations?.isLoaded ? (
                                    categoryRecommendations?.items?.length > 0 ? (
                                        <Recommendations
                                            products={categoryRecommendations?.items}
                                            title="Посмотрите еще"
                                        />
                                    ) : null
                                ) : (
                                    <div className="d-flex justify-content-center align-items-center">
                                        <Loader />
                                    </div>
                                )
                            ) : null}
                        </section>
                    ) : (
                        <div className="p-5 d-flex justify-content-center align-items-center">
                            <Loader color="#000" />
                        </div>
                    )
                ) : (
                    <Info>Не удалось загрузить товары данной категории</Info>
                )}
            </Container>
        </main>
    )
}

export default Category

import React, {useEffect, useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Collapse from 'react-bootstrap/Collapse'
import Logo from '../components/Logo'
import Recommendations from '../components/Recommendations'
import {IoAddOutline, IoRemoveOutline} from 'react-icons/io5'
import {useParams} from 'react-router-dom'
import {getProduct} from '../services/product'
import {getImageURL} from '../helpers/image'
import {dispatchAlert} from '../helpers/alert'
import {apiRejectMessages} from '../config/api'

const Product = () => {
    let {productId} = useParams()
    productId = +productId
    const [isShowCollapse, setIsShowCollapse] = useState({
        indicationsForUse: false,
        activeIngredients: false,
    })
    const [product, setProduct] = useState({
        isLoaded: false,
        error: null,
        item: null,
    })

    useEffect(() => {
        getProduct({productId})
            .then((res) => setProduct((prev) => ({...prev, isLoaded: true, item: res?.product})))
            .catch((error) => setProduct((prev) => ({...prev, isLoaded: true, error})))
    }, [productId])

    return (
        <main className="inner">
            <Container>
                <Logo />
                <section className="product-page mb-8">
                    <Row>
                        <Col md={6}>
                            <Row>
                                <Col xs={12} xl={3}>
                                    <h2>{product?.item?.category}</h2>
                                </Col>
                                <Col xs={12} xl={9}>
                                    {/* todo: need to add swiper */}
                                    <img src={getImageURL()} alt={product?.item?.title} className="img-fluid" />
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6} xl={5}>
                            <h1>{product?.item?.title}</h1>
                            <h6 className="mb-5">{product?.item?.miniDescription}</h6>
                            <p>{product?.item?.description}</p>

                            <ul className="info-list list-unstyled mt-5">
                                <li>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setIsShowCollapse((prev) => ({
                                                ...prev,
                                                indicationsForUse: !prev.indicationsForUse,
                                            }))
                                        }
                                        aria-expanded={isShowCollapse.indicationsForUse}
                                    >
                                        <span>Показания к применению</span>
                                        {isShowCollapse.indicationsForUse ? <IoRemoveOutline /> : <IoAddOutline />}
                                    </button>
                                    <Collapse in={isShowCollapse.indicationsForUse}>
                                        <div>
                                            <p className="p-3">
                                                Небольшое количество крема нанести на кончики пальцев и легкими
                                                похлопывающими движениями нанести на область вокруг глаз.
                                            </p>
                                        </div>
                                    </Collapse>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setIsShowCollapse((prev) => ({
                                                ...prev,
                                                activeIngredients: !prev.activeIngredients,
                                            }))
                                        }
                                        aria-expanded={isShowCollapse.activeIngredients}
                                    >
                                        <span>Активные компоненты</span>
                                        {isShowCollapse.activeIngredients ? <IoRemoveOutline /> : <IoAddOutline />}
                                    </button>
                                    <Collapse in={isShowCollapse.activeIngredients}>
                                        <div>
                                            <p className="p-3">
                                                Ginkgo biloba leaf extract,coffeaarabica(coffee) seed extract ,iris
                                                pallida(dalmation iris)root oil, centella asiatica extract.
                                            </p>
                                        </div>
                                    </Collapse>
                                </li>
                            </ul>

                            <div className="d-flex justify-content-between align-items-stretch mt-5">
                                <div className="count-input">
                                    <button type="button">
                                        <IoRemoveOutline />
                                    </button>
                                    <input type="number" placeholder="0" />
                                    <button type="button">
                                        <IoAddOutline />
                                    </button>
                                </div>
                                <button type="button" className="btn-1 flex-1 ms-5">
                                    В корзину {`- ${product?.item?.price}` || ''}
                                </button>
                            </div>

                            <div className="d-flex justify-content-between align-items-stretch mt-5">
                                <div className="count-input">
                                    <button type="button">
                                        <IoRemoveOutline />
                                    </button>
                                    <input type="number" placeholder="0" />
                                    <button type="button">
                                        <IoAddOutline />
                                    </button>
                                </div>
                                <button type="button" disabled className="btn-2 flex-1 ms-5">
                                    В корзине
                                </button>
                            </div>

                            <button type="button" disabled className="btn-3 fw-7 w-100 mt-2 mt-sm-4">
                                OUT OF STOCK
                            </button>
                        </Col>
                    </Row>
                </section>

                <Recommendations />
            </Container>
        </main>
    )
}

export default Product

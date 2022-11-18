import React, {useCallback, useEffect, useMemo, useState, useTransition} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Collapse from 'react-bootstrap/Collapse'
import Logo from '../components/Logo'
import Recommendations from '../components/Recommendations'
import {IoAddOutline, IoRemoveOutline} from 'react-icons/io5'
import {useParams} from 'react-router-dom'
import {getProduct, getProductRecommendations} from '../services/product'
import {getImageURL} from '../helpers/image'
import {useDispatch, useSelector} from 'react-redux'
import {cartCreate, cartDelete, cartEdit} from '../store/actions/cart'

import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import {Pagination} from 'swiper'
import Loader from '../components/UI/Loader'
import {FormattedMessage, useIntl} from 'react-intl'

const Product = () => {
    const intl = useIntl()
    const dispatch = useDispatch()
    let {productId} = useParams()
    productId = +productId
    const cart = useSelector((state) => state?.cart?.items)
    const cartItem = useMemo(() => {
        return cart?.length && cart.find((item) => +item?.id === productId)
    }, [cart, productId])
    const [isPending, startTransition] = useTransition()
    const [isShowCollapse, setIsShowCollapse] = useState({
        indicationsForUse: false,
        activeIngredients: false,
    })
    const [product, setProduct] = useState({
        isLoaded: false,
        error: null,
        item: null,
    })
    const [productRecommendations, setProductRecommendations] = useState({
        isLoaded: false,
        error: null,
        items: [],
    })

    const updateCart = useCallback(
        (mode = 'plus') => {
            startTransition(() => {
                const count = product?.item?.count
                const isCartCreate = count === 0 && mode === 'plus'
                const isCartDelete = count === 1 && mode === 'minus'

                if (isCartCreate) {
                    dispatch(cartCreate({product: product?.item}))
                } else if (isCartDelete) {
                    dispatch(cartDelete({productId}))
                } else {
                    dispatch(
                        cartEdit({
                            productId,
                            count: mode === 'plus' ? count + 1 : count - 1,
                        })
                    )
                }
            })
        },
        [product, productId]
    )

    const onSelectProduct = useCallback(() => {
        if (cartItem) {
            dispatch(cartDelete({productId}))
        } else {
            dispatch(cartCreate({product: product?.item}))
        }
    }, [cartItem, product?.item, productId])

    const inputUpdateCart = useCallback(
        (newCount) => {
            startTransition(() => {
                const isCorrectValue = +newCount >= 1

                if (isCorrectValue) {
                    dispatch(cartEdit({productId, count: +newCount}))
                } else {
                    dispatch(cartEdit({productId, count: 1}))
                }
            })
        },
        [productId]
    )

    useEffect(() => {
        // redefine product count from redux
        if (cartItem) {
            setProduct((prev) => ({...prev, isLoaded: true, item: cartItem}))
        } else {
            // redefine product count from api
            getProduct({productId})
                .then((res) => res && setProduct((prev) => ({...prev, isLoaded: true, item: res?.product})))
                .catch((error) => error && setProduct((prev) => ({...prev, isLoaded: true, error})))
        }
    }, [cartItem, productId])

    useEffect(() => {
        getProductRecommendations({productId})
            .then((res) => setProductRecommendations((prev) => ({...prev, isLoaded: true, items: res?.recommends})))
            .catch((error) => setProductRecommendations((prev) => ({...prev, isLoaded: true, error})))
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
                                    <Swiper
                                        loop={false}
                                        modules={[Pagination]}
                                        pagination={{clickable: true}}
                                        className="photo-slider"
                                    >
                                        <SwiperSlide>
                                            <img src={getImageURL()} alt={product?.item?.title} />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={getImageURL()} alt={product?.item?.title} />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={getImageURL()} alt={product?.item?.title} />
                                        </SwiperSlide>
                                    </Swiper>
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
                                {product?.item?.leftovers > 0 && (
                                    <div className="count-input">
                                        <button type="button" onClick={() => updateCart('minus')}>
                                            <IoRemoveOutline />
                                        </button>
                                        <input
                                            type="number"
                                            value={product?.item?.count || 0}
                                            onChange={(e) => inputUpdateCart(e.target.value)}
                                        />
                                        <button type="button" onClick={() => updateCart()}>
                                            <IoAddOutline />
                                        </button>
                                    </div>
                                )}
                                {product?.item?.leftovers > 0 ? (
                                    <button
                                        type="button"
                                        className={`${cartItem ? 'btn-2' : 'btn-1'} flex-1 ms-5`}
                                        onClick={onSelectProduct}
                                    >
                                        {cartItem ? (
                                            <FormattedMessage id="addedToCart" />
                                        ) : product?.item?.price ? (
                                            `${intl.formatMessage({id: 'addToCart'})} - ${product?.item?.price}`
                                        ) : (
                                            <FormattedMessage id="addToCart" />
                                        )}
                                    </button>
                                ) : (
                                    <button type="button" disabled className="btn-3 fw-7 w-100 mt-2 mt-sm-4">
                                        OUT OF STOCK
                                    </button>
                                )}
                            </div>
                        </Col>
                    </Row>
                </section>

                {!productRecommendations?.error ? (
                    productRecommendations?.isLoaded ? (
                        productRecommendations?.items?.length > 0 ? (
                            <Recommendations products={productRecommendations?.items} title="Посмотрите еще" />
                        ) : null
                    ) : (
                        <div className="d-flex justify-content-center align-items-center">
                            <Loader />
                        </div>
                    )
                ) : null}
            </Container>
        </main>
    )
}

export default Product

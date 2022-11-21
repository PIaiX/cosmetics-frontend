import React, {useCallback, useEffect, useMemo, useState, useTransition} from 'react'
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
import {useDispatch, useSelector} from 'react-redux'
import {cartCreate, cartDelete, cartEdit} from '../store/actions/cart'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import {Pagination} from 'swiper'
import Loader from '../components/UI/Loader'
import {FormattedMessage, useIntl} from 'react-intl'
import {getCategoryRecommendations} from '../services/category'
import LOCALES from '../assets/i18n/locales'
import ReactPlayer from 'react-player'
import Info from '../components/UI/Info'

const Product = () => {
    const intl = useIntl()
    const dispatch = useDispatch()
    let {productId} = useParams()
    productId = +productId
    const locale = useSelector((state) => state?.locale?.value)
    const currency = useSelector((state) => state?.locale?.currency)
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
    const [categoryRecommendations, setCategoryRecommendations] = useState({
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
        if (product?.item?.categoryId) {
            getCategoryRecommendations({categoryId: +product?.item?.categoryId})
                .then((res) =>
                    setCategoryRecommendations((prev) => ({...prev, isLoaded: true, items: res?.recommends}))
                )
                .catch((error) => setCategoryRecommendations((prev) => ({...prev, isLoaded: true, error})))
        }
    }, [product?.item])

    return (
        <main className="inner">
            <Container>
                <Logo />
                {!product?.error ? (
                    product?.isLoaded ? (
                        <section className="product-page mb-8">
                            <Row className="mb-8">
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
                                                {Array.isArray(product?.item?.images) &&
                                                product?.item?.images?.length ? (
                                                    product.item.images.map((item, index) =>
                                                        item?.type === 'video' ? (
                                                            <SwiperSlide className="video-slide" key={index}>
                                                                <ReactPlayer
                                                                    url={getImageURL(item?.media)}
                                                                    className="react-player"
                                                                    width="100%"
                                                                    height="220px"
                                                                    controls={true}
                                                                />
                                                            </SwiperSlide>
                                                        ) : (
                                                            <SwiperSlide key={index}>
                                                                <img src={getImageURL(item?.media)} alt="photo" />
                                                            </SwiperSlide>
                                                        )
                                                    )
                                                ) : (
                                                    <SwiperSlide>
                                                        <img src={getImageURL()} alt="no-photo" />
                                                    </SwiperSlide>
                                                )}
                                            </Swiper>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={6} xl={5}>
                                    <h1>
                                        {locale === LOCALES.RUSSIAN && product?.item?.title}
                                        {locale === LOCALES.ENGLISH && product?.item?.title_us}
                                        {locale === LOCALES.ENGLAND && product?.item?.title_uk}
                                        {locale === LOCALES.JAPANESE && product?.item?.title_ja}
                                    </h1>
                                    <h6 className="mb-5">
                                        {locale === LOCALES.RUSSIAN && product?.item?.miniDescription}
                                        {locale === LOCALES.ENGLISH && product?.item?.miniDescription_us}
                                        {locale === LOCALES.ENGLAND && product?.item?.miniDescription_uk}
                                        {locale === LOCALES.JAPANESE && product?.item?.miniDescription_ja}
                                    </h6>
                                    <p>
                                        {locale === LOCALES.RUSSIAN && product?.item?.description}
                                        {locale === LOCALES.ENGLISH && product?.item?.description_us}
                                        {locale === LOCALES.ENGLAND && product?.item?.description_uk}
                                        {locale === LOCALES.JAPANESE && product?.item?.description_ja}
                                    </p>

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
                                                <span>
                                                    <FormattedMessage id="indicationsForUse" />
                                                </span>
                                                {isShowCollapse.indicationsForUse ? (
                                                    <IoRemoveOutline />
                                                ) : (
                                                    <IoAddOutline />
                                                )}
                                            </button>
                                            <Collapse in={isShowCollapse.indicationsForUse}>
                                                <div>
                                                    <p className="p-3">
                                                        {locale === LOCALES.RUSSIAN &&
                                                            product?.item?.indicationsForUse}
                                                        {locale === LOCALES.ENGLISH &&
                                                            product?.item?.indicationsForUse_us}
                                                        {locale === LOCALES.ENGLAND &&
                                                            product?.item?.indicationsForUse_uk}
                                                        {locale === LOCALES.JAPANESE &&
                                                            product?.item?.indicationsForUse_ja}
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
                                                <span>
                                                    <FormattedMessage id="activeIngredients" />
                                                </span>
                                                {isShowCollapse.activeIngredients ? (
                                                    <IoRemoveOutline />
                                                ) : (
                                                    <IoAddOutline />
                                                )}
                                            </button>
                                            <Collapse in={isShowCollapse.activeIngredients}>
                                                <div>
                                                    <p className="p-3">
                                                        {locale === LOCALES.RUSSIAN &&
                                                            product?.item?.activeIngredients}
                                                        {locale === LOCALES.ENGLISH &&
                                                            product?.item?.activeIngredients_us}
                                                        {locale === LOCALES.ENGLAND &&
                                                            product?.item?.activeIngredients_uk}
                                                        {locale === LOCALES.JAPANESE &&
                                                            product?.item?.activeIngredients_ja}
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
                                                {!cartItem &&
                                                    product?.item?.price > 0 &&
                                                    `${intl.formatMessage({id: 'addToCart'})} - `}
                                                {!cartItem &&
                                                    product?.item?.price > 0 &&
                                                    locale === LOCALES.RUSSIAN &&
                                                    product?.item?.price}
                                                {!cartItem &&
                                                    product?.item?.price_us > 0 &&
                                                    locale === LOCALES.ENGLISH &&
                                                    product?.item?.price_us}
                                                {!cartItem &&
                                                    product?.item?.price_uk > 0 &&
                                                    locale === LOCALES.ENGLAND &&
                                                    product?.item?.price_uk}
                                                {!cartItem &&
                                                    product?.item?.price_ja > 0 &&
                                                    locale === LOCALES.JAPANESE &&
                                                    product?.item?.price_ja}
                                                {!cartItem && product?.item?.price > 0 && ` ${currency}`}
                                                {!!cartItem && <FormattedMessage id="addedToCart" />}
                                            </button>
                                        ) : (
                                            <button type="button" disabled className="btn-3 fw-7 w-100 mt-2 mt-sm-4">
                                                OUT OF STOCK
                                            </button>
                                        )}
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                {!categoryRecommendations?.error ? (
                                    categoryRecommendations?.isLoaded ? (
                                        categoryRecommendations?.items?.length > 0 ? (
                                            <Recommendations
                                                products={categoryRecommendations?.items}
                                                title={intl.formatMessage({id: 'seeMore'})}
                                            />
                                        ) : null
                                    ) : (
                                        <div className="d-flex justify-content-center align-items-center">
                                            <Loader />
                                        </div>
                                    )
                                ) : null}
                            </Row>
                        </section>
                    ) : (
                        <div className="p-5 d-flex justify-content-center align-items-center">
                            <Loader color="#000" />
                        </div>
                    )
                ) : (
                    <Info>Не удалось загрузить данный товар</Info>
                )}
            </Container>
        </main>
    )
}

export default Product

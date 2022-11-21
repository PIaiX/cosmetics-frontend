import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react'
import {Link, useNavigate, useSearchParams} from 'react-router-dom'
import Accordion from 'react-bootstrap/Accordion'
import Container from 'react-bootstrap/Container'
import Offcanvas from 'react-bootstrap/Offcanvas'
import {IoCloseSharp} from 'react-icons/io5'
import {SlMenu} from 'react-icons/sl'
import {TfiArrowRight, TfiClose} from 'react-icons/tfi'
import {useDispatch, useSelector} from 'react-redux'
import {ReactComponent as Logo} from '../assets/images/logo.svg'
import {getCategories} from '../services/category'
import useDebounce from '../hooks/useDebounce'
import {getSearch} from '../services/search'
import CartItem from './CartItem'
import Info from './UI/Info'
import {FormattedMessage, useIntl} from 'react-intl'
import {setCurrency, setLocale} from '../store/reducers/localeSlice'
import LOCALES from '../assets/i18n/locales'
import CURRENCY from '../assets/i18n/currency'

const Header = () => {
    const sumForFreeDelivery = 8000
    const intl = useIntl()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const cart = useSelector((state) => state?.cart)
    const locale = useSelector((state) => state?.locale?.value)
    const currency = useSelector((state) => state?.locale?.currency)
    const initialOffcanvas = {
        shop: false,
        search: false,
        cart: false,
    }
    const [isShowOffcanvas, setIsShowOffcanvas] = useState(initialOffcanvas)
    const [categories, setCategories] = useState({
        isLoaded: false,
        error: null,
        items: [],
    })
    const [searchParams, setSearchParams] = useSearchParams()
    const searchText = useDebounce(searchParams.get('text') ?? '')
    const [data, setData] = useState({
        isLoaded: false,
        error: null,
        items: [],
    })
    const isShowHeader = useRef()
    const scrollTop = useRef(0)
    const inputSearch = useRef()

    const handleScroll = () => {
        let currentScrollTop = window.pageYOffset
        if (scrollTop.current <= currentScrollTop) {
            isShowHeader.current.className = 'h-hide'
        } else {
            isShowHeader.current.className = 'h-show'
        }
        scrollTop.current = currentScrollTop
    }

    useEffect(() => {
        if (isShowOffcanvas.search) {
            setTimeout(() => {
                inputSearch?.current?.focus()
            }, 150)
        }
    }, [isShowOffcanvas.search])

    const defineLocaleSum = useCallback(
        (item = {}) => {
            if (item?.count) {
                if (locale === LOCALES.RUSSIAN) return item?.price * item?.count
                if (locale === LOCALES.ENGLISH) return item?.price_us * item?.count
                if (locale === LOCALES.ENGLAND) return item?.price_uk * item?.count
                if (locale === LOCALES.JAPANESE) return item?.price_ja * item?.count
            } else {
                if (locale === LOCALES.RUSSIAN) return item?.price
                if (locale === LOCALES.ENGLISH) return item?.price_us
                if (locale === LOCALES.ENGLAND) return item?.price_uk
                if (locale === LOCALES.JAPANESE) return item?.price_ja
            }
        },
        [locale]
    )

    const computedCartSum = useMemo(() => {
        if (cart?.items?.length)
            return cart.items.reduce((acc, item) => {
                return acc + defineLocaleSum(item)
            }, 0)
    }, [cart?.items])

    useEffect(() => {
        getCategories()
            .then((res) => res && setCategories((prev) => ({...prev, isLoaded: true, items: res?.categories})))
            .catch((error) => error && setCategories((prev) => ({...prev, isLoaded: true, error})))
    }, [])

    useEffect(() => {
        document.addEventListener('scroll', handleScroll, true)
        return () => {
            document.removeEventListener('scroll', handleScroll, true)
        }
    }, [])

    const getData = () => {
        getSearch(searchText)
            .then(
                (res) =>
                    res &&
                    setData((prev) => ({
                        ...prev,
                        isLoaded: true,
                        items: res?.products?.rows,
                    }))
            )
            .catch((error) => error && setData((prev) => ({...prev, isLoaded: true, error, items: []})))
    }

    useEffect(() => {
        getData()
    }, [searchText])

    return (
        <>
            <header ref={isShowHeader} className="h-show">
                <Container className="gx-0">
                    <Link to="/" className="d-md-none">
                        <Logo className="logo" />
                    </Link>
                    <nav className="d-none d-md-block">
                        <ul className="list-unstyled">
                            <li>
                                <button
                                    className="active"
                                    type="button"
                                    onClick={() => setIsShowOffcanvas({...initialOffcanvas, shop: true})}
                                >
                                    <FormattedMessage id="shop" />
                                </button>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    onClick={() => setIsShowOffcanvas({...initialOffcanvas, search: true})}
                                >
                                    <FormattedMessage id="search" />
                                </button>
                            </li>
                        </ul>
                    </nav>
                    <div className="d-flex align-items-center">
                        <button
                            type="button"
                            className="btn-cart"
                            onClick={() => setIsShowOffcanvas({...initialOffcanvas, cart: true})}
                        >
                            <span>{cart?.items?.length || 0}</span>
                        </button>
                        <button
                            type="button"
                            onClick={
                                isShowOffcanvas.shop
                                    ? () => setIsShowOffcanvas((prev) => ({...prev, shop: false}))
                                    : () => setIsShowOffcanvas({...initialOffcanvas, shop: true})
                            }
                            className="btn-menu d-md-none ms-4"
                        >
                            {isShowOffcanvas.shop ? <TfiClose /> : <SlMenu />}
                        </button>
                    </div>
                </Container>
            </header>
            <Offcanvas
                show={isShowOffcanvas.cart}
                onHide={() => setIsShowOffcanvas((prev) => ({...prev, cart: false}))}
                placement={'end'}
            >
                {!cart?.error ? (
                    <Offcanvas.Body>
                        <div className="d-flex align-items-center justify-content-between mb-4 mb-md-0">
                            <Link to="/" className="d-md-none">
                                <Logo className="logo" />
                            </Link>
                            <button
                                type="button"
                                className="close"
                                onClick={() => setIsShowOffcanvas((prev) => ({...prev, cart: false}))}
                            >
                                <IoCloseSharp />
                            </button>
                        </div>
                        {cart?.items?.length > 0 ? (
                            <>
                                <div className="cart">
                                    <div className="cart-item">
                                        <div className="title">
                                            <span className="d-md-none">
                                                <FormattedMessage id="cart" />
                                            </span>
                                            <span className="d-none d-md-block">
                                                <FormattedMessage id="item" />:
                                            </span>
                                        </div>
                                        <div className="img" />
                                        <div className="count">
                                            <FormattedMessage id="qty" />:
                                        </div>
                                        <div className="price">
                                            <FormattedMessage id="price" />:
                                        </div>
                                        <div className="btns" />
                                    </div>

                                    {cart.items.map((item) => (
                                        <CartItem
                                            key={item?.id}
                                            item={item}
                                            onClickLink={() =>
                                                setIsShowOffcanvas((prev) => ({...prev, cart: false}))
                                            }
                                        />
                                    ))}

                                    <div className="cart-item">
                                        {computedCartSum > sumForFreeDelivery && (
                                            <div className="title">
                                                <FormattedMessage id="freeDelivery" />
                                            </div>
                                        )}
                                        <div className="img" />
                                        <div className="count">{<FormattedMessage id="total" />}:</div>
                                        <div className="price">{computedCartSum}&nbsp;₽</div>
                                        <div className="btns" />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center d-md-none fw-7">
                                    <div>
                                        <FormattedMessage id="total" />:
                                    </div>
                                    <div>{computedCartSum}&nbsp;₽</div>
                                </div>
                                <button
                                    type="button"
                                    className="m-w-100 btn-1 fs-09 ms-auto mt-3 px-5"
                                    onClick={() => {
                                        navigate('/checkout')
                                        setIsShowOffcanvas((prev) => ({...prev, cart: false}))
                                    }}
                                >
                                    <FormattedMessage id="checkout" />
                                </button>
                            </>
                        ) : (
                            <Info>
                                <FormattedMessage id="emptyCart" />
                            </Info>
                        )}
                    </Offcanvas.Body>
                ) : (
                    <Info>
                        <FormattedMessage id="errorCart" />
                    </Info>
                )}
            </Offcanvas>

            <Offcanvas
                show={isShowOffcanvas.shop}
                onHide={() => setIsShowOffcanvas((prev) => ({...prev, shop: false}))}
                placement={'start'}
            >
                <Offcanvas.Body className="shop-menu">
                    <nav>
                        <Accordion>
                            {categories?.items?.length > 0
                                ? categories.items.map((item, index) => (
                                      <Accordion.Item key={item?.category?.id} eventKey={index}>
                                          <Accordion.Header>{item?.category?.title}</Accordion.Header>
                                          <Accordion.Body>
                                              <ul className="list-unstyled">
                                                  <li
                                                      className="mb-2"
                                                      onClick={() =>
                                                          setIsShowOffcanvas((prev) => ({...prev, shop: false}))
                                                      }
                                                  >
                                                      <Link to={`/category/${item?.category?.id}`}>
                                                          <FormattedMessage id="allProducts" />
                                                      </Link>
                                                  </li>
                                                  {item?.products?.length > 0
                                                      ? item.products.map((product) => (
                                                            <li
                                                                className="mb-2"
                                                                key={product?.id}
                                                                onClick={() =>
                                                                    setIsShowOffcanvas((prev) => ({
                                                                        ...prev,
                                                                        shop: false,
                                                                    }))
                                                                }
                                                            >
                                                                <Link to={`/product/${product?.id}`}>
                                                                    {product?.title}
                                                                </Link>
                                                            </li>
                                                        ))
                                                      : null}
                                              </ul>
                                          </Accordion.Body>
                                      </Accordion.Item>
                                  ))
                                : null}
                        </Accordion>
                    </nav>
                    <ul className="flags">
                        <li>
                            <button
                                type="button"
                                onClick={() => {
                                    dispatch(setLocale({value: LOCALES.RUSSIAN}))
                                    dispatch(setCurrency({currency: CURRENCY.RUSSIAN}))
                                    setIsShowOffcanvas((prev) => ({...prev, shop: false}))
                                }}
                            >
                                <img src="/images/flags/flagRussia.jpg" alt="russian" />
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                onClick={() => {
                                    dispatch(setLocale({value: LOCALES.ENGLISH}))
                                    dispatch(setCurrency({currency: CURRENCY.ENGLISH}))
                                    setIsShowOffcanvas((prev) => ({...prev, shop: false}))
                                }}
                            >
                                <img src="/images/flags/flagUsa.jpg" alt="usa-english" />
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                onClick={() => {
                                    dispatch(setLocale({value: LOCALES.ENGLAND}))
                                    dispatch(setCurrency({currency: CURRENCY.ENGLAND}))
                                    setIsShowOffcanvas((prev) => ({...prev, shop: false}))
                                }}
                            >
                                <img src="/images/flags/flagGbp.jpg" alt="gb-english" />
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                onClick={() => {
                                    dispatch(setLocale({value: LOCALES.JAPANESE}))
                                    dispatch(setCurrency({currency: CURRENCY.JAPANESE}))
                                    setIsShowOffcanvas((prev) => ({...prev, shop: false}))
                                }}
                            >
                                <img src="/images/flags/flagJp.jpg" alt="japanese" />
                            </button>
                        </li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>

            <Offcanvas
                show={isShowOffcanvas.search}
                onHide={() => setIsShowOffcanvas((prev) => ({...prev, search: false}))}
                placement={'start'}
                autoFocus={false}
                enforceFocus={false}
            >
                <Offcanvas.Body>
                    <form className="search">
                        <input
                            ref={inputSearch}
                            type="text"
                            // placeholder={intl.formatMessage({id: 'search'})}
                            value={searchParams.get('text')}
                            onChange={(e) => setSearchParams({text: e.target.value})}
                        />
                        <button type="button">
                            <TfiArrowRight />
                        </button>
                    </form>
                </Offcanvas.Body>
            </Offcanvas>
            <Offcanvas
                show={isShowOffcanvas.search && data?.items?.length > 0}
                className={'search-results'}
                onHide={() => setIsShowOffcanvas((prev) => ({...prev, search: false}))}
                placement={'start'}
                autoFocus={false}
                enforceFocus={false}
            >
                <Offcanvas.Body>
                    <ul className="list-unstyled">
                        {!data.isLoaded && searchText.length > 0 ? (
                            <p>Загрузка...</p>
                        ) : !data.items || data.items.length == 0 ? (
                            <p className="d-flex flex-column align-items-center justify-content-center account-info">
                                {searchText.length > 0 ? 'Ничего не найдено' : 'Начните вводить текст'}
                            </p>
                        ) : (
                            <>
                                {data?.items?.length > 0 &&
                                    data.items.map(
                                        (item) =>
                                            item && (
                                                <li key={item.id}>
                                                    <Link to="/" className="mb-3">
                                                        <div className="title">{item.title}</div>
                                                        <div className="info">{item.miniDescription}</div>
                                                    </Link>
                                                </li>
                                            )
                                    )}
                            </>
                        )}
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default Header

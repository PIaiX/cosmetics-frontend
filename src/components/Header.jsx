import React, {useEffect, useState} from 'react'
import Container from 'react-bootstrap/Container'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Accordion from 'react-bootstrap/Accordion'
import {TfiArrowRight, TfiClose} from 'react-icons/tfi'
import {SlClose, SlMenu} from 'react-icons/sl'
import {ReactComponent as Logo} from '../assets/images/logo.svg'
import CartItem from './CartItem'
import {Link} from 'react-router-dom'
import {getCategories} from '../services/category'
import { IoCloseSharp } from "react-icons/io5"

const Header = () => {
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

    useEffect(() => {
        getCategories()
            .then((res) => res && setCategories((prev) => ({...prev, isLoaded: true, items: res?.categories})))
            .catch((error) => error && setCategories((prev) => ({...prev, isLoaded: true, error})))
    }, [])


    const [header, setHeader] = useState(true)
    const [st, setST] = useState(0)
    const handleScroll = (event) => {
        let currentST = window.pageYOffset;
        console.log ('currentST:'+currentST)
        console.log ('st:'+st)
        if ( st <= currentST ) {
            setHeader(false)
        } else {
            setHeader(true)
        }
        setST(currentST)
    }
    useEffect(() => {
        document.addEventListener('scroll', handleScroll, true);
        return () => {
            document.removeEventListener('scroll', handleScroll, true);
        }
    })


    return (
        <>
            <header className={(header) ? 'h-show' : 'h-hide'}>
                <Container>
                    <Link to="/" className="d-md-none">
                        <Logo className="logo" />
                    </Link>
                    <nav className="d-none d-md-block">
                        <ul className="list-unstyled">
                            <li>
                                <button
                                    type="button"
                                    onClick={() => setIsShowOffcanvas({...initialOffcanvas, shop: true})}
                                >
                                    Магазин
                                </button>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    onClick={() => setIsShowOffcanvas({...initialOffcanvas, search: true})}
                                >
                                    Поиск
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
                            <span>25</span>
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
                <Offcanvas.Body>
                    <div className='d-flex align-items-center justify-content-between mb-4 mb-md-0'>
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
                    <div className="cart">
                        <div className="cart-item">
                            <div className="title">
                                <span className="d-md-none">Корзина</span>
                                <span className="d-none d-md-block">Товар:</span>
                            </div>
                            <div className="img" />
                            <div className="count">Кол-во:</div>
                            <div className="price">Цена:</div>
                            <div className="btns" />
                        </div>

                        <CartItem
                            title={'SS -СЫВОРОТКА ДЛЯ КОНЧИКОВ ВОЛОС КАМЕЛИЯ + ЖИДКИЙ ШЁЛК'}
                            imgUrl={'/images/products/SS -СЫВОРОТКА ДЛЯ КОНЧИКОВ ВОЛОС КАМЕЛИЯ + ЖИДКИЙ ШЁЛК.jpg'}
                            price={1500}
                            count={1}
                        />
                        <CartItem
                            title={'EC - КРЕМ ДЛЯ ГЛАЗ ГИНКГО + ИРИС'}
                            imgUrl={'/images/products/EC - КРЕМ ДЛЯ ГЛАЗ ГИНКГО + ИРИС.jpg'}
                            price={1100}
                            count={1}
                        />

                        <div className="cart-item">
                            <div className="title">Вам доступна бесплатная доставка</div>
                            <div className="img"></div>
                            <div className="count">Всего:</div>
                            <div className="price">2500&nbsp;₽</div>
                            <div className="btns"></div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center d-md-none fw-7'>
                        <div>Всего:</div>
                        <div>2500&nbsp;₽</div>
                    </div>
                    <Link to="/checkout" className="m-w-100 btn-1 ms-auto mt-3 px-5">
                        Оформить заказ
                    </Link>
                </Offcanvas.Body>
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
                                                  <li className="mb-2">
                                                      <Link to={`/category/${item?.category?.id}`}>
                                                          Вся продукция
                                                      </Link>
                                                  </li>
                                                  {item?.products?.length > 0
                                                      ? item.products.map((product) => (
                                                            <li className="mb-2" key={product?.id}>
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
                            <button type="button">
                                <img src="/images/flags/flagRussia.jpg" alt="russian" />
                            </button>
                        </li>
                        <li>
                            <button type="button">
                                <img src="/images/flags/flagUsa.jpg" alt="usa-english" />
                            </button>
                        </li>
                        <li>
                            <button type="button">
                                <img src="/images/flags/flagGbp.jpg" alt="gb-english" />
                            </button>
                        </li>
                        <li>
                            <button type="button">
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
            >
                <Offcanvas.Body>
                    <form className="search">
                        <input type="email" placeholder="email адрес" />
                        <button type="submit">
                            <TfiArrowRight />
                        </button>
                    </form>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default Header

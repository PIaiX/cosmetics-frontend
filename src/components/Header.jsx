import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Accordion from 'react-bootstrap/Accordion'

import {TfiClose, TfiArrowRight} from 'react-icons/tfi'
import {SlClose, SlMenu} from 'react-icons/sl'
import {ReactComponent as Logo} from '../assets/images/logo.svg'
import CartItem from './CartItem'
import {Link} from 'react-router-dom'

const Header = () => {
    const [cart, setCart] = useState(false)
    const handleCloseCart = () => setCart(false)
    const handleShowCart = () => {
        setShop(false)
        setSearch(false)
        setCart(true)
    }

    const [shop, setShop] = useState(false)
    const handleCloseShop = () => setShop(false)
    const handleShowShop = () => {
        setSearch(false)
        setCart(false)
        setShop(true)
    }

    const [search, setSearch] = useState(false)
    const handleCloseSearch = () => setSearch(false)
    const handleShowSearch = () => {
        setCart(false)
        setShop(false)
        setSearch(true)
    }

    return (
        <>
            <header>
                <Container>
                    <Link to="/" className="d-md-none">
                        <Logo className="logo" />
                    </Link>
                    <nav className="d-none d-md-block">
                        <ul className="list-unstyled">
                            <li>
                                <button type="button" onClick={handleShowShop}>
                                    Магазин
                                </button>
                            </li>
                            <li>
                                <button type="button" onClick={handleShowSearch}>
                                    Поиск
                                </button>
                            </li>
                        </ul>
                    </nav>
                    <div className="d-flex align-items-center">
                        <button type="button" onClick={handleShowCart} className="btn-cart">
                            <span>25</span>
                        </button>
                        <button
                            type="button"
                            onClick={shop ? handleCloseShop : handleShowShop}
                            className="btn-menu d-md-none ms-4"
                        >
                            {shop ? <TfiClose /> : <SlMenu />}
                        </button>
                    </div>
                </Container>
            </header>
            <Offcanvas show={cart} onHide={handleCloseCart} placement={'end'}>
                <Offcanvas.Body>
                    <button type="button" className="close" onClick={handleCloseCart}>
                        <SlClose />
                    </button>
                    <div className="cart">
                        <div className="cart-item">
                            <div className="title">
                                <span className="d-md-none">Корзина</span>
                                <span className="d-none d-md-block">Товар:</span>
                            </div>
                            <div className="img"></div>
                            <div className="count">Кол-во:</div>
                            <div className="price">Цена:</div>
                            <div className="btns"></div>
                        </div>

                        <CartItem
                            title={'SS -СЫВОРОТКА ДЛЯ КОНЧИКОВ ВОЛОС КАМЕЛИЯ + ЖИДКИЙ ШЁЛК'}
                            imgUrl={'images/products/SS -СЫВОРОТКА ДЛЯ КОНЧИКОВ ВОЛОС КАМЕЛИЯ + ЖИДКИЙ ШЁЛК.jpg'}
                            price={1500}
                            count={1}
                        />
                        <CartItem
                            title={'EC - КРЕМ ДЛЯ ГЛАЗ ГИНКГО + ИРИС'}
                            imgUrl={'images/products/EC - КРЕМ ДЛЯ ГЛАЗ ГИНКГО + ИРИС.jpg'}
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
                    <button type="button" className="btn-1 ms-auto mt-3 px-5">
                        Оформить заказ
                    </button>
                </Offcanvas.Body>
            </Offcanvas>

            <Offcanvas show={shop} onHide={handleCloseShop} placement={'start'}>
                <Offcanvas.Body className="shop-menu">
                    <nav>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Вода</Accordion.Header>
                                <Accordion.Body>
                                    <ul className="list-unstyled">
                                        <li className="mb-2">
                                            <Link to="/category">Вся продукция</Link>
                                        </li>
                                        <li className="mb-2">
                                            <Link to="/">Товар</Link>
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Лицо</Accordion.Header>
                                <Accordion.Body>
                                    <ul className="list-unstyled">
                                        <li className="mb-2">
                                            <Link to="/category">Вся продукция</Link>
                                        </li>
                                        <li className="mb-2">
                                            <Link to="/">Товар</Link>
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Волосы</Accordion.Header>
                                <Accordion.Body>
                                    <ul className="list-unstyled">
                                        <li className="mb-2">
                                            <Link to="/category">Вся продукция</Link>
                                        </li>
                                        <li className="mb-2">
                                            <Link to="/">Товар</Link>
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Тело</Accordion.Header>
                                <Accordion.Body>
                                    <ul className="list-unstyled">
                                        <li className="mb-2">
                                            <Link to="/category">Вся продукция</Link>
                                        </li>
                                        <li className="mb-2">
                                            <Link to="/">Товар</Link>
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Гигиена</Accordion.Header>
                                <Accordion.Body>
                                    <ul className="list-unstyled">
                                        <li className="mb-2">
                                            <Link to="/category">Вся продукция</Link>
                                        </li>
                                        <li className="mb-2">
                                            <Link to="/">Товар</Link>
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>Наборы</Accordion.Header>
                                <Accordion.Body>
                                    <ul className="list-unstyled">
                                        <li className="mb-2">
                                            <Link to="/category">Вся продукция</Link>
                                        </li>
                                        <li className="mb-2">
                                            <Link to="/">Товар</Link>
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
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

            <Offcanvas show={search} onHide={handleCloseSearch} placement={'start'}>
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

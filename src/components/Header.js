import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { SlHandbag, SlClose, SlMenu } from "react-icons/sl"
import {ReactComponent as Logo} from '../assets/imgs/logo.svg'

function Header() {
    const [cart, setCart] = useState(false)
    const handleCloseCart = () => setCart(false)
    const handleShowCart = () => setCart(true)

    return (
        <>
        <header>
            <Container>
                <Logo className='logo d-md-none'/>
                <nav className='d-none d-md-block'>
                    <ul className='list-unstyled'>
                        <li>
                            <button type='button'>Магазин</button>
                        </li>
                        <li>
                            <button type='button'>Поиск</button>
                        </li>
                    </ul>
                </nav>
                <div className='d-flex aligh-items-center'>
                    <button type='button' className='btn-cart'>
                        <SlHandbag/>
                        <span>25</span>
                    </button>
                    <button type='button' className='btn-menu d-md-none ms-4'>
                        <SlMenu/>
                    </button>
                </div>
            </Container>
        </header>
        <Offcanvas show={cart} onHide={handleCloseCart} placement={'end'}>
            <Offcanvas.Body>
                <button type='button' className='close' onClick={handleCloseCart}>
                    <SlClose/>
                </button>
                <div className='cart'>
                    <div className='cart-item'>
                        <div className='title'></div>
                        <div className='img'></div>
                        <div className='count'></div>
                        <div className='price'></div>
                        <div className='btn'></div>
                    </div>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
        </>
    );
}

export default Header;
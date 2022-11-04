import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { SlHandbag } from "react-icons/sl"

function Header() {
    const [cart, setCart] = useState(false)
    const handleCloseCart = () => setCart(false)
    const handleShowCart = () => setCart(true)

    return (
        <>
        <header>
            <Container>
                <nav>
                    <ul className='list-unstyled'>
                        <li>
                            <button type='button'>Магазин</button>
                        </li>
                        <li>
                            <button type='button'>Поиск</button>
                        </li>
                    </ul>
                </nav>
                <button type='button' onClick={handleShowCart} className='cart'>
                    <SlHandbag/>
                    <span>25</span>
                </button>
            </Container>
        </header>
        <Offcanvas show={cart} onHide={handleCloseCart} placement={'end'}>
            <Offcanvas.Body>
                Cart
            </Offcanvas.Body>
        </Offcanvas>
        </>
    );
}

export default Header;
import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import { TfiArrowRight } from "react-icons/tfi"
import { SlSocialInstagram } from "react-icons/sl"
import useIsMobile from '../hooks/isMobile'
import Collapse from 'react-bootstrap/Collapse'

const Footer = () => {
    const {mobile} = useIsMobile()
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)

    return (
        (mobile)
        ? <footer className='mobile'>
            <div>
                <button type='button' onClick={() => setOpen(!open)} aria-expanded={open}>Выбор языка:</button>
                <Collapse in={open}>
                    <ul className='list-unstyled mt-3'>
                        <li>Русский</li>
                        <li>English</li>
                        <li>日本語</li>
                    </ul>
                </Collapse>
            </div>
            <div>
                <button type='button' onClick={() => setOpen2(!open2)} aria-expanded={open2}>Информация:</button>
                <Collapse in={open2}>
                    <ul className='list-unstyled mt-3'>
                        <li><a href='/'>О Компании</a></li>
                        <li><a href='/'>Точки продаж</a></li>
                        <li><a href='/'>Оплата</a></li>
                        <li><a href='/'>Доставка</a></li>
                        <li><a href='/'>Публичная оферта</a></li>
                        <li><a href='/'>Контакты</a></li>
                    </ul>
                </Collapse>
            </div>
            <div className='d-flex justify-content-between'>
                <div>© 22|11 Cosmetics</div>
                <div>
                    <a href='https://www.instagram.com/2211cosmetics/' target='_blank' rel="noreferrer">
                        <SlSocialInstagram className='fs-15'/>
                    </a>
                </div>
            </div>
        </footer>
        : <footer className='desktop'>
            <Container>
                <div className='d-flex justify-content-between'>
                    <div>
                        <div className='d-block mb-3'>Подписаться на рассылку:</div>
                        <form>
                            <input type='email' placeholder='email адрес' className='inverse'/>
                            <button type='submit'><TfiArrowRight/></button>
                        </form>
                    </div>
                    <nav>
                        <ul className='list-unstyled'>
                            <li><a href='/'>О Компании</a></li>
                            <li><a href='/'>Точки продаж</a></li>
                            <li><a href='/'>Оплата</a></li>
                            <li><a href='/'>Доставка</a></li>
                            <li><a href='/'>Публичная оферта</a></li>
                            <li><a href='/'>Контакты</a></li>
                        </ul>
                    </nav>
                </div>
                <div className='d-flex justify-content-between'>
                    <div>© 22|11 Cosmetics</div>
                    <div>
                        <a href='https://www.instagram.com/2211cosmetics/' target='_blank' rel="noreferrer">
                            <SlSocialInstagram className='fs-20'/>
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
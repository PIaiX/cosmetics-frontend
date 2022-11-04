import React from 'react'
import Container from 'react-bootstrap/Container'
import { TfiArrowRight } from "react-icons/tfi"
import { SlSocialInstagram } from "react-icons/sl"

const Footer = () => {
    return (
        <footer>
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
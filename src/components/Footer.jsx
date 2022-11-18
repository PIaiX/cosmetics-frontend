import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import {TfiArrowRight} from 'react-icons/tfi'
import {SlSocialInstagram} from 'react-icons/sl'
import {IoAddOutline, IoRemoveOutline} from 'react-icons/io5'
import useIsMobile from '../hooks/isMobile'
import Collapse from 'react-bootstrap/Collapse'
import {Link} from 'react-router-dom'
import {FormattedMessage, useIntl} from 'react-intl'

const Footer = () => {
    const intl = useIntl()
    const {mobile} = useIsMobile()
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)

    return mobile ? (
        <footer className="mobile">
            <div className="d-flex flex-column justify-content-center align-items-stretch">
                <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    aria-expanded={open}
                    className="w-100 d-flex justify-content-between align-items-center"
                >
                    <span>Русский</span>
                    {open ? <IoRemoveOutline /> : <IoAddOutline />}
                </button>
                <Collapse in={open}>
                    <ul className="list-unstyled mt-3">
                        <li>Русский</li>
                        <li>English</li>
                        <li>日本語</li>
                    </ul>
                </Collapse>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-stretch">
                <button
                    type="button"
                    onClick={() => setOpen2(!open2)}
                    aria-expanded={open2}
                    className="w-100 d-flex justify-content-between align-items-center"
                >
                    <span>
                        <FormattedMessage id="info" />:
                    </span>
                    {open2 ? <IoRemoveOutline /> : <IoAddOutline />}
                </button>
                <Collapse in={open2}>
                    <ul className="list-unstyled mt-3">
                        <li>
                            <Link to="/about">
                                <FormattedMessage id="about" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/sales">
                                <FormattedMessage id="stockist" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/payment">
                                <FormattedMessage id="payment" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/delivery">
                                <FormattedMessage id="delivery" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/public-offer">
                                <FormattedMessage id="termsAndConditions" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/contacts">
                                <FormattedMessage id="contact" />
                            </Link>
                        </li>
                    </ul>
                </Collapse>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    © 22|11 Cosmetics х{' '}
                    <a href="https://asmpromo.ru/" target="_blank" rel="noreferrer">
                        Created by AsmPromo
                    </a>
                </div>
                <div>
                    <a href="https://www.instagram.com/2211cosmetics/" target="_blank" rel="noreferrer">
                        <SlSocialInstagram className="fs-15" />
                    </a>
                </div>
            </div>
        </footer>
    ) : (
        <footer className="desktop">
            <Container>
                <div className="d-flex justify-content-between">
                    <div>
                        <div className="d-block mb-3">
                            <FormattedMessage id="signUpForNewsletter" />:
                        </div>
                        <form className="search">
                            <input
                                type="email"
                                placeholder={intl.formatMessage({id: 'emailAddress'})}
                                className="inverse"
                            />
                            <button type="submit">
                                <TfiArrowRight />
                            </button>
                        </form>
                    </div>
                    <nav>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/about">
                                    <FormattedMessage id="about" />
                                </Link>
                            </li>
                            <li>
                                <Link to="/sales">
                                    <FormattedMessage id="stockist" />
                                </Link>
                            </li>
                            <li>
                                <Link to="/payment">
                                    <FormattedMessage id="payment" />
                                </Link>
                            </li>
                            <li>
                                <Link to="/delivery">
                                    <FormattedMessage id="delivery" />
                                </Link>
                            </li>
                            <li>
                                <Link to="/public-offer">
                                    <FormattedMessage id="termsAndConditions" />
                                </Link>
                            </li>
                            <li>
                                <Link to="/contacts">
                                    <FormattedMessage id="contact" />
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="d-flex justify-content-between">
                    <div>© 22|11 Cosmetics</div>
                    <div>
                        <a href="https://www.instagram.com/2211cosmetics/" target="_blank" rel="noreferrer">
                            <SlSocialInstagram className="fs-20" />
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer

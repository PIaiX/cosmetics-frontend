import React, {useCallback, useState} from 'react'
import Container from 'react-bootstrap/Container'
import {TfiArrowRight} from 'react-icons/tfi'
import {SlSocialInstagram} from 'react-icons/sl'
import {IoAddOutline, IoRemoveOutline} from 'react-icons/io5'
import useIsMobile from '../hooks/isMobile'
import Collapse from 'react-bootstrap/Collapse'
import {Link} from 'react-router-dom'
import {FormattedMessage, useIntl} from 'react-intl'
import {useDispatch, useSelector} from 'react-redux'
import LOCALES from '../assets/i18n/locales'
import {setCurrency, setLocale} from '../store/reducers/localeSlice'
import CURRENCY from '../assets/i18n/currency'

const Footer = () => {
    const intl = useIntl()
    const dispatch = useDispatch()
    const {mobile} = useIsMobile()
    const locale = useSelector((state) => state?.locale?.value)
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)

    const onChooseLocale = useCallback((locale, currency) => {
        dispatch(setLocale({value: locale}))
        dispatch(setCurrency({currency}))
        setOpen(false)
    }, [])

    return mobile ? (
        <footer className="mobile">
            <div className="d-flex flex-column justify-content-center align-items-stretch">
                <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    aria-expanded={open}
                    className="w-100 d-flex justify-content-between align-items-center"
                >
                    <span>
                        {locale === LOCALES.RUSSIAN && 'Русский'}
                        {(locale === LOCALES.ENGLISH || locale === LOCALES.ENGLAND) && 'English'}
                        {locale === LOCALES.JAPANESE && '日本語'}
                    </span>
                    {open ? <IoRemoveOutline /> : <IoAddOutline />}
                </button>
                <Collapse in={open}>
                    <ul className="locales-list list-unstyled mt-3">
                        <li onClick={() => onChooseLocale(LOCALES.RUSSIAN, CURRENCY.RUSSIAN)}>Русский</li>
                        <li onClick={() => onChooseLocale(LOCALES.ENGLISH, CURRENCY.ENGLISH)}>English</li>
                        <li onClick={() => onChooseLocale(LOCALES.JAPANESE, CURRENCY.JAPANESE)}>日本語</li>
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
            <Container className="gx-0">
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

import React, {useCallback, useEffect, useState} from 'react'
import {IntlProvider} from 'react-intl'
import AppRouter from './routes/AppRouter'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/style.css'
import './assets/fonts/stylesheet.css'
import {useDispatch, useSelector} from 'react-redux'
import CustomModal from './components/utils/CustomModal'
import {setCurrency, setLocale} from './store/reducers/localeSlice'
import messages from './assets/i18n/messages'
import LOCALES from './assets/i18n/locales'
import CURRENCY from './assets/i18n/currency'
import {checkAuth} from './store/actions/auth'
import {setLoadingRefresh} from './store/reducers/authSlice'
import Loader from './components/UI/Loader'

const App = () => {
    const dispatch = useDispatch()
    const locale = useSelector((state) => state?.locale?.value)
    const isLoadingRefresh = useSelector((state) => state?.auth?.isLoadingRefresh)
    const [isShowLocaleModal, setIsShowLocaleModal] = useState(false)

    const onChooseLocale = useCallback((locale, currency) => {
        dispatch(setLocale({value: locale}))
        dispatch(setCurrency({currency}))
        setIsShowLocaleModal(false)
    }, [])

    useEffect(() => {
        if (!locale) setIsShowLocaleModal(true)
    }, [locale])

    // initial auth check
    useEffect(() => {
        if (localStorage.getItem('token')) {
            dispatch(checkAuth())
        } else {
            dispatch(setLoadingRefresh(false))
        }
    }, [])

    return !isLoadingRefresh ? (
        <IntlProvider locale={locale} messages={messages[locale]} defaultLocale={LOCALES.ENGLISH}>
            <AppRouter />

            <CustomModal className="locale-modal" isShow={isShowLocaleModal} setIsShow={setIsShowLocaleModal}>
                <>
                    <div className="locale-modal__inner">
                        <div className="text">Выберите страну, в которой хотите совершить покупку</div>
                        <div className="text gray">
                            Please choose your billing country
                            <br />
                            ご請求先住所の国 を選 択してください。
                        </div>
                    </div>
                    <ul className="flags">
                        <li>
                            <button type="button" onClick={() => onChooseLocale(LOCALES.RUSSIAN, CURRENCY.RUSSIAN)}>
                                <img src="/images/flags/flagRussia.jpg" alt="russian" />
                            </button>
                        </li>
                        <li>
                            <button type="button" onClick={() => onChooseLocale(LOCALES.ENGLISH, CURRENCY.ENGLISH)}>
                                <img src="/images/flags/flagUsa.jpg" alt="usa-english" />
                            </button>
                        </li>
                        <li>
                            <button type="button" onClick={() => onChooseLocale(LOCALES.ENGLAND, CURRENCY.ENGLAND)}>
                                <img src="/images/flags/flagGbp.jpg" alt="gb-england" />
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                onClick={() => onChooseLocale(LOCALES.JAPANESE, CURRENCY.JAPANESE)}
                            >
                                <img src="/images/flags/flagJp.jpg" alt="japanese" />
                            </button>
                        </li>
                    </ul>
                </>
            </CustomModal>
        </IntlProvider>
    ) : (
        <Loader full />
    )
}

export default App

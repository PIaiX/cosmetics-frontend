import React, {useCallback, useEffect, useState} from 'react'
import {IntlProvider} from 'react-intl'
import AppRouter from './routes/AppRouter'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/style.css'
import './assets/fonts/stylesheet.css'
import {useDispatch, useSelector} from 'react-redux'
import CustomModal from './components/utils/CustomModal'
import {setLocale} from './store/reducers/localeSlice'
import messages from './assets/i18n/messages'
import LOCALES from './assets/i18n/locales'

const App = () => {
    const dispatch = useDispatch()
    const locale = useSelector((state) => state?.locale?.value)
    const [isShowLocaleModal, setIsShowLocaleModal] = useState(false)

    const onChooseLocale = useCallback((locale) => {
        dispatch(setLocale({value: locale}))
        setIsShowLocaleModal(false)
    }, [])

    useEffect(() => {
        if (!locale) setIsShowLocaleModal(true)
    }, [locale])

    return (
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
                            <button type="button" onClick={() => onChooseLocale(LOCALES.RUSSIAN)}>
                                <img src="/images/flags/flagRussia.jpg" alt="russian" />
                            </button>
                        </li>
                        <li>
                            <button type="button" onClick={() => onChooseLocale(LOCALES.ENGLISH)}>
                                <img src="/images/flags/flagUsa.jpg" alt="usa-english" />
                            </button>
                        </li>
                        <li>
                            <button type="button" onClick={() => onChooseLocale(LOCALES.ENGLAND)}>
                                <img src="/images/flags/flagGbp.jpg" alt="gb-england" />
                            </button>
                        </li>
                        <li>
                            <button type="button" onClick={() => onChooseLocale(LOCALES.JAPANESE)}>
                                <img src="/images/flags/flagJp.jpg" alt="japanese" />
                            </button>
                        </li>
                    </ul>
                </>
            </CustomModal>
        </IntlProvider>
    )
}

export default App

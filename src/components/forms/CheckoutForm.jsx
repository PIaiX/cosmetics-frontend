import React, {useCallback, useEffect, useState} from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Link} from 'react-router-dom'
import {Controller, useForm} from 'react-hook-form'
import {Form} from 'react-bootstrap'
import PhoneInput from 'react-phone-input-2'
import CitySelect from '../UI/CitySelect'
import {FormattedMessage, useIntl} from 'react-intl'
import {useSelector} from 'react-redux'
import useDebounce from '../../hooks/useDebounce'
import {getPromoDiscount} from '../../services/promo'
import {dispatchAlert, dispatchApiErrorAlert} from '../../helpers/alert'
import {apiResponseMessages} from '../../config/api'
import LOCALES from '../../assets/i18n/locales'

const CheckoutForm = ({onSubmit}) => {
    const initialDeliveryPrice = 500
    const cart = useSelector((state) => state?.cart)
    const locale = useSelector((state) => state?.locale?.value)
    const currency = useSelector((state) => state?.locale?.currency)
    const intl = useIntl()
    const {
        register,
        formState: {errors, isValid},
        handleSubmit,
        control,
        getValues,
        watch,
        setValue,
    } = useForm({mode: 'all', reValidateMode: 'onSubmit'})
    const debouncedApplyCodeInput = useDebounce(watch('applyCode'))
    const [cartSum, setCartSum] = useState(0)

    const defineLocaleDiscount = useCallback(
        (item = {}, data = {}) => {
            if (data?.procent) {
                if (locale === LOCALES.RUSSIAN)
                    return (item?.price - (item.price * +data?.procent) / 100) * item?.count
                if (locale === LOCALES.ENGLISH)
                    return (item?.price_us - (item.price_us * +data?.procent) / 100) * item?.count
                if (locale === LOCALES.ENGLAND)
                    return (item?.price_uk - (item.price_uk * +data?.procent) / 100) * item?.count
                if (locale === LOCALES.JAPANESE)
                    return (item?.price_ja - (item.price_ja * +data?.procent) / 100) * item?.count
            } else {
                if (locale === LOCALES.RUSSIAN) return item?.price * item?.count
                if (locale === LOCALES.ENGLISH) return item?.price_us * item?.count
                if (locale === LOCALES.ENGLAND) return item?.price_uk * item?.count
                if (locale === LOCALES.JAPANESE) return item?.price_ja * item?.count
            }
        },
        [locale]
    )

    const computeCartSum = useCallback(
        (data = {}) => {
            const cartItems = cart?.items

            if (data?.procent) {
                const discountSum =
                    cartItems?.length &&
                    cartItems.reduce((acc, item) => {
                        if (item?.categoryId === data?.categoryId) {
                            return acc + defineLocaleDiscount(item, data)
                        } else if (item?.productId === data?.productId) {
                            return acc + defineLocaleDiscount(item, data)
                        } else return acc + defineLocaleDiscount(item, data)
                    }, 0)

                setCartSum(discountSum)
            } else {
                const sum =
                    cartItems?.length &&
                    cartItems.reduce((acc, item) => {
                        return acc + defineLocaleDiscount(item)
                    }, 0)

                setCartSum(sum)
            }
        },
        [cart?.items, defineLocaleDiscount]
    )

    useEffect(() => {
        if (debouncedApplyCodeInput) {
            getPromoDiscount({promo: debouncedApplyCodeInput})
                .then((res) => {
                    if (res?.type === 'SUCCESS') {
                        computeCartSum(res?.promo)
                        dispatchAlert('success', apiResponseMessages.PROMO_APPLY)
                    }
                })
                .catch((error) => {
                    if (error) {
                        dispatchApiErrorAlert(error)
                    }
                })
        } else setCartSum(0)
    }, [computeCartSum, debouncedApplyCodeInput])

    useEffect(() => {
        // define initial sum
        cart?.items?.length && computeCartSum()
    }, [cart?.items])

    return (
        <Form className="form-checkout" onSubmit={handleSubmit(onSubmit)}>
            <h2>
                <FormattedMessage id="client" />
            </h2>
            <Row xs={1} md={2} className="gx-4 gx-xl-5 gy-4 mb-5">
                <Col>
                    <Form.Group>
                        <Form.Control
                            className={errors?.firstName ? 'error' : ''}
                            type="text"
                            placeholder={intl.formatMessage({id: 'name'})}
                            {...register('firstName', {
                                required: true,
                            })}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Control
                            className={errors?.lastName ? 'error' : ''}
                            type="text"
                            placeholder={intl.formatMessage({id: 'surname'})}
                            {...register('lastName', {
                                required: true,
                            })}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Controller
                            name="phone"
                            control={control}
                            render={({field}) => (
                                <PhoneInput
                                    inputClass={errors?.phone ? 'error' : ''}
                                    placeholder={intl.formatMessage({id: 'phone'})}
                                    specialLabel={null}
                                    value={getValues('phone')}
                                    onChange={(phone) => field.onChange(phone)}
                                />
                            )}
                            rules={{
                                required: true,
                                minLength: 11,
                            }}
                        />
                    </Form.Group>
                    <Form.Group className="mt-4">
                        <Controller
                            name="confirmPhone"
                            control={control}
                            render={({field}) => (
                                <PhoneInput
                                    inputClass={errors?.confirmPhone ? 'error' : ''}
                                    placeholder={intl.formatMessage({id: 'confirmPhone'})}
                                    specialLabel={null}
                                    value={getValues('confirmPhone')}
                                    onChange={(phone) => field.onChange(phone)}
                                />
                            )}
                            rules={{
                                required: true,
                                minLength: 11,
                                validate: (value) => value === getValues('phone') || 'err',
                            }}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Control
                            className={errors?.email ? 'error' : ''}
                            type="text"
                            placeholder={intl.formatMessage({id: 'email'})}
                            {...register('email', {
                                required: true,
                                pattern:
                                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            })}
                        />
                    </Form.Group>
                    <Form.Group className="mt-4">
                        <Form.Control
                            className={errors?.confirmEmail ? 'error' : ''}
                            type="text"
                            placeholder={intl.formatMessage({id: 'confirmEmail'})}
                            {...register('confirmEmail', {
                                required: true,
                                validate: (value) => value === getValues('email') || 'err',
                                pattern:
                                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            })}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <h2>
                <FormattedMessage id="delivery" />
            </h2>
            <label className="mb-5">
                <input type="checkbox" defaultChecked disabled />
                <span className="ms-4">
                    <FormattedMessage id="courierDeliver" />
                </span>
            </label>
            <Row className="gx-4 gx-xl-5 gy-4 mb-5">
                <Col xs={12} md={6}>
                    <Form.Group>
                        <Form.Control
                            className={errors?.street ? 'error' : ''}
                            type="text"
                            placeholder={intl.formatMessage({id: 'street'})}
                            {...register('street', {
                                required: true,
                            })}
                        />
                    </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                    <CitySelect register={register} errors={errors} />
                </Col>
                <Col xs={12} md={4}>
                    <Form.Group>
                        <Form.Control
                            className={errors?.home ? 'error' : ''}
                            type="text"
                            placeholder={intl.formatMessage({id: 'home'})}
                            {...register('home', {
                                required: true,
                            })}
                        />
                    </Form.Group>
                </Col>
                <Col xs={12} md={4}>
                    <Form.Group>
                        <Form.Control
                            className={errors?.building ? 'error' : ''}
                            type="text"
                            placeholder={intl.formatMessage({id: 'building'})}
                            {...register('building')}
                        />
                    </Form.Group>
                </Col>
                <Col xs={12} md={4}>
                    <Form.Group>
                        <Form.Control
                            className={errors?.apartment ? 'error' : ''}
                            type="text"
                            placeholder={intl.formatMessage({id: 'apartment'})}
                            {...register('apartment', {
                                required: true,
                            })}
                        />
                    </Form.Group>
                </Col>
                <Col xs={12}>
                    <Form.Group>
                        <Form.Control
                            className={errors?.additionalInformation ? 'error' : ''}
                            type="text"
                            placeholder={intl.formatMessage({id: 'additionalInformation'})}
                            {...register('additionalInformation')}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <h2>Оплата</h2>
            <label className="mb-5">
                <input type="checkbox" defaultChecked disabled />
                <span className="ms-4">
                    <FormattedMessage id="byCard" />
                </span>
            </label>
            <Row className="gx-4 gx-xl-5 gy-4 mb-5">
                <Col xs={12} md={4}>
                    <Form.Group>
                        <Form.Control
                            className={errors?.applyCode ? 'error' : ''}
                            type="text"
                            placeholder={intl.formatMessage({id: 'applyCode'})}
                            onChange={(e) => setValue('applyCode', e.target.value)}
                            value={watch('applyCode') || ''}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row xs={1} md={2} className="gx-4 gx-xl-5">
                <Col className="fs-09">
                    <div className="d-flex align-items-center justify-content-between mb-1">
                        <span>
                            <FormattedMessage id="sum" />:
                        </span>
                        <span>{cartSum}</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-1">
                        <span>
                            <FormattedMessage id="totalIncludingAllTax" />:
                        </span>
                        <span>{initialDeliveryPrice}</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <span>
                            <FormattedMessage id="total" />:
                        </span>
                        <span>{cartSum + initialDeliveryPrice}</span>
                    </div>
                </Col>
                <Col>
                    <button type="submit" className="btn-1 w-100 mb-5">
                        <FormattedMessage id="pay" />
                    </button>
                    <p className="fs-08">
                        <FormattedMessage id="onPaymentDesc" />{' '}
                        <Link to="/public-offer" className="text-decoration-underline">
                            <FormattedMessage id="ofTermsAndConditions" />
                        </Link>
                    </p>
                </Col>
            </Row>
        </Form>
    )
}

export default CheckoutForm

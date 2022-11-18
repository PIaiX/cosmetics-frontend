import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Link} from 'react-router-dom'
import {Controller, useForm} from 'react-hook-form'
import {Form} from 'react-bootstrap'
import PhoneInput from 'react-phone-input-2'
import CitySelect from '../UI/CitySelect'
import {FormattedMessage, useIntl} from 'react-intl'

const CheckoutForm = ({onSubmit}) => {
    const intl = useIntl()
    const {
        register,
        formState: {errors, isValid},
        handleSubmit,
        control,
        getValues,
    } = useForm({mode: 'all', reValidateMode: 'onSubmit'})

    return (
        <Form className="form-checkout" onSubmit={handleSubmit(onSubmit)}>
            <h2>
                <FormattedMessage id="client" />
            </h2>
            <Row xs={1} md={2} className="gx-4 gx-xl-5 gy-4 mb-5">
                <Col>
                    <Form.Group>
                        <Form.Control
                            className={errors?.name ? 'error' : ''}
                            type="text"
                            placeholder={intl.formatMessage({id: 'name'})}
                            {...register('name', {
                                required: true,
                            })}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Control
                            className={errors?.secondName ? 'error' : ''}
                            type="text"
                            placeholder={intl.formatMessage({id: 'surname'})}
                            {...register('secondName', {
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
                            type="email"
                            placeholder={intl.formatMessage({id: 'email'})}
                            {...register('email', {
                                required: true,
                            })}
                        />
                    </Form.Group>
                    <Form.Group className="mt-4">
                        <Form.Control
                            className={errors?.confirmEmail ? 'error' : ''}
                            type="email"
                            placeholder={intl.formatMessage({id: 'confirmEmail'})}
                            {...register('confirmEmail', {
                                required: true,
                                validate: (value) => value === getValues('email') || 'err',
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
                            className={errors?.house ? 'error' : ''}
                            type="text"
                            placeholder={intl.formatMessage({id: 'house'})}
                            {...register('house', {
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
                            className={errors?.flat ? 'error' : ''}
                            type="text"
                            placeholder={intl.formatMessage({id: 'flat'})}
                            {...register('flat', {
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
                            {...register('applyCode')}
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
                        <span>4400</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-1">
                        <span>
                            <FormattedMessage id="totalIncludingAllTax" />:
                        </span>
                        <span>500</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <span>
                            <FormattedMessage id="total" />:
                        </span>
                        <span>4900</span>
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

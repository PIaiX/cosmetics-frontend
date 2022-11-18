import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Link} from 'react-router-dom'
import {Controller, useForm} from 'react-hook-form'
import {Form} from 'react-bootstrap'
import PhoneInput from 'react-phone-input-2'

const CheckoutForm = ({onSubmit}) => {
    const {
        register,
        formState: {errors, isValid},
        handleSubmit,
        control,
        getValues,
    } = useForm({mode: 'all', reValidateMode: 'onSubmit'})

    return (
        <Form className="form-checkout" onSubmit={handleSubmit(onSubmit)}>
            <h2>Клиент</h2>
            <Row xs={1} md={2} className="gx-4 gx-xl-5 gy-4 mb-5">
                <Col>
                    <Form.Group>
                        <Form.Control
                            className={errors?.name ? 'error' : ''}
                            type="text"
                            placeholder="Имя"
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
                            placeholder="Фамилия"
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
                                    placeholder="Телефон"
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
                                    placeholder="Подтвердите телефон"
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
                            placeholder="Email"
                            {...register('email', {
                                required: true,
                            })}
                        />
                    </Form.Group>
                    <Form.Group className="mt-4">
                        <Form.Control
                            className={errors?.confirmEmail ? 'error' : ''}
                            type="email"
                            placeholder="Подтвердить email"
                            {...register('confirmEmail', {
                                required: true,
                                validate: (value) => value === getValues('email') || 'err',
                            })}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <h2>Доставка</h2>
            <label className="mb-5">
                <input type="checkbox" defaultChecked />
                <span className="ms-4">Курьерская доставка</span>
            </label>
            <Row className="gx-4 gx-xl-5 gy-4 mb-5">
                <Col xs={12} md={6}>
                    <Form.Group>
                        <Form.Control
                            className={errors?.street ? 'error' : ''}
                            type="text"
                            placeholder="Улица"
                            {...register('street', {
                                required: true,
                            })}
                        />
                    </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                    <Form.Group>
                        <Form.Control
                            className={errors?.city ? 'error' : ''}
                            type="text"
                            placeholder="Город"
                            {...register('city', {
                                required: true,
                            })}
                        />
                    </Form.Group>
                </Col>
                <Col xs={12} md={4}>
                    <Form.Group>
                        <Form.Control
                            className={errors?.house ? 'error' : ''}
                            type="text"
                            placeholder="Дом"
                            {...register('house', {
                                required: true,
                            })}
                        />
                    </Form.Group>
                </Col>
                <Col xs={12} md={4}>
                    <Form.Group>
                        <Form.Control
                            className={errors?.housing ? 'error' : ''}
                            type="text"
                            placeholder="Корпус"
                            {...register('housing')}
                        />
                    </Form.Group>
                </Col>
                <Col xs={12} md={4}>
                    <Form.Group>
                        <Form.Control
                            className={errors?.flat ? 'error' : ''}
                            type="text"
                            placeholder="Квартира"
                            {...register('flat', {
                                required: true,
                            })}
                        />
                    </Form.Group>
                </Col>
                <Col xs={12}>
                    <Form.Group>
                        <Form.Control
                            className={errors?.additionalInfo ? 'error' : ''}
                            type="text"
                            placeholder="Допольнительная информация"
                            {...register('additionalInfo')}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <h2>Оплата</h2>
            <label className="mb-5">
                <input type="checkbox" defaultChecked />
                <span className="ms-4">По карте</span>
            </label>
            <Row className="gx-4 gx-xl-5 gy-4 mb-5">
                <Col xs={12} md={4}>
                    <Form.Group>
                        <Form.Control
                            className={errors?.promoCode ? 'error' : ''}
                            type="text"
                            placeholder="Введите промокод"
                            {...register('promoCode')}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row xs={1} md={2} className="gx-4 gx-xl-5">
                <Col className="fs-09">
                    <div className="d-flex align-items-center justify-content-between mb-1">
                        <span>Сумма:</span>
                        <span>4400</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-1">
                        <span>Доставка:</span>
                        <span>500</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <span>Итого:</span>
                        <span>4900</span>
                    </div>
                </Col>
                <Col>
                    <button type="submit" className="btn-1 w-100 mb-5">
                        Оплатить через Wallet One
                    </button>
                    <p className="fs-08">
                        Нажимая 'Оплатить', Вы соглашаетесь с{' '}
                        <Link to="/public-offer" className="text-decoration-underline">
                            Публичной офертой
                        </Link>
                    </p>
                </Col>
            </Row>
        </Form>
    )
}

export default CheckoutForm

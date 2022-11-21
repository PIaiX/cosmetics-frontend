import React, {useEffect, useState} from 'react'
import {Col, Form, Row} from 'react-bootstrap'
import {useForm} from 'react-hook-form'
import {getCategories} from '../../../services/admin'
import Button from '../../UI/Button'

const ProductForm = ({onSubmit, product = {}, classNameButton = ''}) => {
    const [categories, setCategories] = useState({
        isLoaded: false,
        error: null,
        items: [],
    })
    const {
        register,
        formState: {errors, isValid},
        handleSubmit,
    } = useForm({
        mode: 'onChange',
        reValidateMode: 'onSubmit',
        defaultValues: {
            id: product.id ?? 0,
            title: product.title ?? '',
            description: product.description ?? '',
            price: product.price ?? '',
            priceSale: product.priceSale ?? '',
            weight: product.weight ?? '',
            categoryId: product.categoryId ?? null,
        },
    })

    useEffect(() => {
        getCategories(1, 200)
            .then(
                (res) =>
                    res &&
                    setCategories((prev) => ({
                        ...prev,
                        isLoaded: true,
                        items: res?.categories?.rows,
                    }))
            )
            .catch((error) => error && setCategories((prev) => ({...prev, isLoaded: true, error})))
    }, [])

    return (
        <Form className="profile-edit" onSubmit={handleSubmit(onSubmit)}>
            <Row>
                <Col md={6}>
                    <Form.Group controlId="formFile" className="mb-4">
                        <Form.Label>Изображение товара</Form.Label>
                        <Form.Control type="file" {...register('images')} />
                    </Form.Group>
                </Col>
                <Col md={6} className="d-flex align-items-center">
                    <small>Изображения в форматах png, jpg, jpeg и не более 5 мб</small>
                </Col>
                <Col md={12}>
                    <Form.Group className="mb-4">
                        <Form.Label>Название</Form.Label>
                        <Form.Control
                            placeholder="Ведите название"
                            {...register('title', {maxLength: {value: 250, message: 'Максимум 250 символов'}})}
                        />
                        {errors.title && <Form.Text className="text-danger">{errors?.title?.message}</Form.Text>}
                    </Form.Group>
                </Col>
                <Col md={12}>
                    <Form.Group className="mb-4">
                        <Form.Label>Описание</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={4}
                            placeholder="Ведите описание"
                            {...register('description', {
                                maxLength: {value: 10000, message: 'Максимум 10000 символов'},
                            })}
                        />
                        {errors.description && (
                            <Form.Text className="text-danger">{errors?.description?.message}</Form.Text>
                        )}
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className="mb-4">
                        <Form.Label>Цена</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="0"
                            {...register('price', {max: {value: 99999, message: 'Максимум 99999 руб'}})}
                        />
                        {errors.price && <Form.Text className="text-danger">{errors?.price?.message}</Form.Text>}
                        <Form.Text className="text-muted">Цена с учетом скидки</Form.Text>
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className="mb-4">
                        <Form.Label>Скидка</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="0"
                            {...register('priceSale', {max: {value: 99999, message: 'Максимум 99999 руб'}})}
                        />
                        {errors.priceSale && (
                            <Form.Text className="text-danger">{errors?.priceSale?.message}</Form.Text>
                        )}
                        <Form.Text className="text-muted">Цена без учета скидки</Form.Text>
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className="mb-4">
                        <Form.Label>Вес (гр)</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="0"
                            {...register('weight', {max: {value: 99999, message: 'Максимум 99999 гр'}})}
                        />
                        {errors.weight && <Form.Text className="text-danger">{errors?.weight?.message}</Form.Text>}
                        <Form.Text className="text-muted">Вес товара 1000 гр = 1 кг</Form.Text>
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className="mb-4">
                        <Form.Label>Категория</Form.Label>
                        <Form.Select {...register('categoryId')} className="form-control">
                            <option value={0}>Не выбрано</option>
                            {categories &&
                                categories?.items?.length > 0 &&
                                categories.items.map((item) => (
                                    <option key={item.id} value={item.id}>
                                        {item.title}
                                    </option>
                                ))}
                        </Form.Select>
                        {errors.categoryId && (
                            <Form.Text className="text-danger">{errors?.categoryId?.message}</Form.Text>
                        )}
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group>
                <Button type="submit" className={'btn-2 ' + classNameButton} disabled={!isValid}>
                    {product.length > 0 ? 'Сохранить изменения' : 'Сохранить'}
                </Button>
            </Form.Group>
        </Form>
    )
}

export default ProductForm

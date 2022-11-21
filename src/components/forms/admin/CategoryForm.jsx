import React from 'react'
import {Col, Form, Row} from 'react-bootstrap'
import {useForm} from 'react-hook-form'
import Button from '../../UI/Button'

const CategoryForm = ({onSubmit, category = {}, classNameButton = ''}) => {
    const {
        register,
        formState: {errors, isValid},
        handleSubmit,
    } = useForm({
        mode: 'onChange',
        reValidateMode: 'onSubmit',
        defaultValues: {
            id: category.id,
            title: category.title ?? '',
        },
    })

    return (
        <Form className="profile-edit" onSubmit={handleSubmit(onSubmit)}>
            <Row>
                <Col md={12}>
                    <Form.Group className="mb-4">
                        <Form.Label>Название</Form.Label>
                        <Form.Control
                            placeholder="Придумайте название"
                            {...register('title', {maxLength: {value: 250, message: 'Максимум 250 символов'}})}
                        />
                        {errors.title && <Form.Text className="text-danger">{errors?.title?.message}</Form.Text>}
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group>
                <Button type="submit" className={'btn-2 ' + classNameButton} disabled={!isValid}>
                    {category.length > 0 ? 'Сохранить изменения' : 'Сохранить'}
                </Button>
            </Form.Group>
        </Form>
    )
}

export default CategoryForm

import React, {useCallback} from 'react'
import {createProduct} from '../../../services/admin'
import ProductForm from '../../../components/forms/admin/ProductForm'
import {useNavigate} from 'react-router-dom'
import {dispatchAlert, dispatchApiErrorAlert} from '../../../helpers/alert'
import {apiResponseMessages} from '../../../config/api'

const CreateProduct = () => {
    const navigate = useNavigate()

    const onSubmit = useCallback((data) => {
        createProduct(data)
            .then((res) => {
                if (res.type == 'SUCCESS') {
                    dispatchAlert('success', apiResponseMessages.ADMIN_PRODUCT_CREATE)
                    navigate('/admin/products')
                }
            })
            .catch((error) => {
                dispatchApiErrorAlert(error)
            })
    }, [])

    return (
        <section className="profile">
            <h1>Добавить товар</h1>
            <ProductForm onSubmit={onSubmit} />
        </section>
    )
}

export default CreateProduct

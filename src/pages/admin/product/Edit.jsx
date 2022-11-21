import React, {useCallback, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import ProductForm from '../../../components/forms/admin/ProductForm'
import Info from '../../../components/UI/Info'
import Loader from '../../../components/UI/Loader'
import {apiResponseMessages} from '../../../config/api'
import {dispatchAlert, dispatchApiErrorAlert} from '../../../helpers/alert'
import {editProduct, getProduct} from '../../../services/admin'

const EditProduct = () => {
    const {productId} = useParams()
    const [product, setProduct] = useState({
        isLoaded: false,
        error: null,
        data: {},
    })

    useEffect(() => {
        getProduct(productId)
            .then(
                (res) =>
                    res &&
                    setProduct((prev) => ({
                        ...prev,
                        isLoaded: true,
                        data: res.product,
                    }))
            )
            .catch((error) => error && setProduct((prev) => ({...prev, isLoaded: true, error})))
    }, [])

    const onSubmit = useCallback((data) => {
        editProduct(data)
            .then((res) => {
                if (res.type == 'SUCCESS') {
                    dispatchAlert('success', apiResponseMessages.ADMIN_PRODUCT_EDIT)
                }
            })
            .catch((error) => {
                dispatchApiErrorAlert(error)
            })
    }, [])

    if (!product.isLoaded) {
        return <Loader full />
    }
    if (!product.data) {
        return (
            <Info className="d-flex flex-column align-items-center justify-content-center account-info">
                Такого товара нет
            </Info>
        )
    }

    return (
        <section className="profile">
            <h1>Редактировать товар</h1>
            <ProductForm onSubmit={onSubmit} product={product.data} />
        </section>
    )
}

export default EditProduct

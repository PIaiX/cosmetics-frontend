import React, {useCallback, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {editOrder, getOrder} from '../../../services/admin'
// import OrderForm from '../../../components/forms/OrderForm'
import {dispatchAlert, dispatchApiErrorAlert} from '../../../helpers/alert'
import Loader from '../../../components/UI/Loader'
import Info from '../../../components/UI/Info'
import {apiResponseMessages} from '../../../config/api'

const EditOrder = () => {
    const {orderId} = useParams()
    const [order, setOrder] = useState({
        isLoaded: false,
        error: null,
        data: {},
    })

    useEffect(() => {
        getOrder(orderId)
            .then(
                (res) =>
                    res &&
                    setOrder((prev) => ({
                        ...prev,
                        isLoaded: true,
                        data: res.order,
                    }))
            )
            .catch((error) => error && setOrder((prev) => ({...prev, isLoaded: true, error})))
    }, [])

    const onSubmit = useCallback((data) => {
        editOrder(data)
            .then((res) => {
                if (res.type == 'SUCCESS') {
                    dispatchAlert('success', apiResponseMessages.ACCOUNT_ADDRESS_EDIT)
                }
            })
            .catch((error) => {
                dispatchApiErrorAlert(error)
            })
    }, [])

    if (!order.isLoaded) {
        return <Loader full />
    }
    if (!order) {
        return (
            <Info className="d-flex flex-column align-items-center justify-content-center account-info">
                Такого заказа нет
            </Info>
        )
    }

    return (
        <section className="profile">
            <h1>Редактировать заказ</h1>
            {/* <OrderForm onSubmit={onSubmit} order={order.data} /> */}
        </section>
    )
}

export default EditOrder

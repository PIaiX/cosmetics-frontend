import React, {useCallback, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {editCategory, getCategory} from '../../../services/admin'
import CategoryForm from '../../../components/forms/admin/CategoryForm'
import {dispatchAlert, dispatchApiErrorAlert} from '../../../helpers/alert'
import Loader from '../../../components/UI/Loader'
import Info from '../../../components/UI/Info'
import {apiResponseMessages} from '../../../config/api'

const EditCategory = () => {
    const {categoryId} = useParams()
    const [category, setCategory] = useState({
        isLoaded: false,
        error: null,
        data: {},
    })

    useEffect(() => {
        getCategory(categoryId)
            .then(
                (res) =>
                    res &&
                    setCategory((prev) => ({
                        ...prev,
                        isLoaded: true,
                        data: res.category,
                    }))
            )
            .catch((error) => error && setCategory((prev) => ({...prev, isLoaded: true, error})))
    }, [])

    const onSubmit = useCallback((data) => {
        editCategory(data)
            .then((res) => {
                if (res.type == 'SUCCESS') {
                    dispatchAlert('success', apiResponseMessages.ADMIN_CATEGORY_EDIT)
                }
            })
            .catch((error) => {
                dispatchApiErrorAlert(error)
            })
    }, [])

    if (!category.isLoaded) {
        return <Loader full />
    }
    if (!category) {
        return (
            <Info className="d-flex flex-column align-items-center justify-content-center account-info">
                Такой категории нет
            </Info>
        )
    }

    return (
        <section className="profile">
            <h1>Редактировать категории</h1>
            <CategoryForm onSubmit={onSubmit} category={category.data} />
        </section>
    )
}

export default EditCategory

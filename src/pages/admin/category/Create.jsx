import React, {useCallback} from 'react'
import {createCategory} from '../../../services/admin'
import CategoryForm from '../../../components/forms/admin/CategoryForm'
import {useNavigate} from 'react-router-dom'
import {dispatchAlert, dispatchApiErrorAlert} from '../../../helpers/alert'
import {apiResponseMessages} from '../../../config/api'

const CreateCategory = () => {
    const navigate = useNavigate()

    const onSubmit = useCallback((data) => {
        createCategory(data)
            .then((res) => {
                if (res.type == 'SUCCESS') {
                    dispatchAlert('success', apiResponseMessages.ADMIN_CATEGORY_CREATE)
                    navigate('/admin/categories')
                }
            })
            .catch((error) => {
                dispatchApiErrorAlert(error)
            })
    }, [])

    return (
        <section className="profile">
            <h1>Добавить категорию</h1>
            <CategoryForm onSubmit={onSubmit} />
        </section>
    )
}

export default CreateCategory

import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {GrEdit} from 'react-icons/gr'
import CustomDataTable from '../../../components/CustomDataTable'
import Loader from '../../../components/UI/Loader'
import {deleteCategory, getCategories} from '../../../services/admin'
import Info from '../../../components/UI/Info'
import CustomModal from '../../../components/utils/CustomModal'
import {IoTrashOutline} from 'react-icons/io5'
import Button from '../../../components/UI/Button'
import {getImageURL} from '../../../helpers/image'
import {Image} from 'react-bootstrap'

const AdminCategories = () => {
    const [categories, setCategories] = useState({
        isLoaded: false,
        error: null,
        count: 0,
        items: [],
        pagination: false,
    })
    const [modalDelete, setModalDelete] = useState({
        isShow: false,
        id: false,
    })

    const categoryColumns = [
        {
            name: '',
            selector: 'images',
            width: '80px',
            center: true,
            cell: (row) => <Image rounded className="product-micro-img" src={getImageURL(row.images)} />,
        },
        {
            name: 'Название',
            selector: 'title',
            sortable: true,
        },
        {
            name: 'Кол-во товаров',
            selector: 'productCount',
            width: '170px',
            cell: (row) => row?.products?.length,
        },
        {
            selector: 'action',
            center: true,
            width: '100px',
            cell: (row) => (
                <div className="d-flex align-items-center">
                    <Link to={`/admin/category/${row.id}`} className="me-4">
                        <GrEdit size={15} color="#fff" />
                    </Link>
                    <a onClick={() => setModalDelete({isShow: !modalDelete.isShow, id: row.id})}>
                        <IoTrashOutline size={20} color="#ff5252" />
                    </a>
                </div>
            ),
        },
    ]
    const getData = () => {
        getCategories()
            .then(
                (res) =>
                    res &&
                    setCategories((prev) => ({
                        ...prev,
                        isLoaded: true,
                        count: res?.categories?.count,
                        items: res?.categories?.rows,
                        pagination: res?.pagination,
                    }))
            )
            .catch((error) => error && setCategories((prev) => ({...prev, isLoaded: true, error})))
    }
    const handlePageChange = (page) => {
        getData(page)
    }

    const handlePerRowsChange = async (newLimit, page) => {
        getCategories(page, newLimit)
            .then(
                (res) =>
                    res &&
                    setCategories((prev) => ({
                        ...prev,
                        isLoaded: true,
                        count: res?.categories?.count,
                        items: res?.categories?.rows,
                        pagination: res?.pagination,
                    }))
            )
            .catch((error) => error && setCategories((prev) => ({...prev, isLoaded: true, error})))
    }

    useEffect(() => {
        getData()
    }, [])

    const clickDelete = (id) => {
        deleteCategory(id).then(() => getData())
        setModalDelete({isShow: false, id: false})
    }

    if (!categories.isLoaded) {
        return <Loader full />
    }

    if (!categories.items || categories.items.length === 0) {
        return (
            <Info className="d-flex flex-column align-items-center justify-content-center account-info">
                <h3 className="mb-4">Категорий нет</h3>
                <p>
                    <Link to="/admin/category/create" className="btn-2 fs-08">
                        Добавить
                    </Link>
                </p>
            </Info>
        )
    }

    return (
        <section className="categories">
            <div className="d-flex flex-row justify-content-between align-items-center mb-4">
                <h1 className="m-0">Категории</h1>
                <Link to="/admin/category/create" className="btn-2">
                    Добавить
                </Link>
            </div>
            <CustomDataTable
                handlePerRowsChange={handlePerRowsChange}
                handlePageChange={handlePageChange}
                columns={categoryColumns}
                data={categories.items}
                pagination={categories.pagination}
            />
            <CustomModal
                title={`Удаление ${modalDelete.id ? '#' + modalDelete.id : ''}`}
                isShow={modalDelete.isShow}
                setIsShow={(e) => setModalDelete({isShow: e, id: false})}
                footer={
                    <>
                        <Button
                            className="btn-1 me-3"
                            onClick={(e) => setModalDelete({isShow: !modalDelete.isShow, id: false})}
                        >
                            Отмена
                        </Button>
                        <Button className="btn-2" onClick={() => modalDelete.id && clickDelete(modalDelete.id)}>
                            Удалить
                        </Button>
                    </>
                }
            >
                Вы точно хотите удалить категорию?
            </CustomModal>
        </section>
    )
}

export default AdminCategories

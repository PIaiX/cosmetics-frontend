import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {GrEdit} from 'react-icons/gr'
import CustomDataTable from '../../../components/CustomDataTable'
import Loader from '../../../components/UI/Loader'
import {deleteProduct, getProducts} from '../../../services/admin'
import Info from '../../../components/UI/Info'
import CustomModal from '../../../components/utils/CustomModal'
import {IoTrashOutline} from 'react-icons/io5'
import Button from '../../../components/UI/Button'
import {customPrice} from '../../../helpers/product'
import {Image} from 'react-bootstrap'
import {getImagesURL} from '../../../helpers/image'

const AdminProducts = () => {
    const [products, setProducts] = useState({
        isLoaded: false,
        error: null,
        count: 0,
        items: [],
        pagination: false,
    })
    const [limit, setLimit] = useState(10)
    const [modalDelete, setModalDelete] = useState({
        isShow: false,
        id: false,
    })

    const productColumns = [
        {
            name: '',
            selector: 'images',
            width: '80px',
            center: true,
            cell: (row) => <Image rounded className="product-micro-img" src={getImagesURL(row.images)} />,
        },
        {
            name: 'Название',
            selector: 'title',
            sortable: true,
        },
        {
            name: 'Категория',
            selector: 'categoryId',
            width: '170px',
            cell: (row) => row?.category,
        },
        {
            name: 'Цена',
            selector: 'price',
            width: '140px',
            cell: (row) => (
                <>
                    <p>{customPrice(row.price)}</p>
                    <del className="ms-2 text-gray">
                        <small>{customPrice(row.priceSale)}</small>
                    </del>
                </>
            ),
        },
        {
            selector: 'action',
            center: true,
            width: '100px',
            cell: (row) => (
                <div className="d-flex align-items-center">
                    <Link to={`/admin/product/${row.id}`} className="me-4">
                        <GrEdit size={15} color="#fff" />
                    </Link>
                    <a onClick={() => setModalDelete({isShow: !modalDelete.isShow, id: row.id})}>
                        <IoTrashOutline size={20} color="#ff5252" />
                    </a>
                </div>
            ),
        },
    ]
    const getData = (page) => {
        getProducts(page, limit)
            .then(
                (res) =>
                    res &&
                    setProducts((prev) => ({
                        ...prev,
                        isLoaded: true,
                        count: res?.products?.count,
                        items: res?.products?.rows,
                        pagination: res?.pagination,
                    }))
            )
            .catch((error) => error && setProducts((prev) => ({...prev, isLoaded: true, error})))
    }

    const handlePageChange = (page) => {
        getData(page)
    }

    const handlePerRowsChange = async (newLimit, page) => {
        getProducts(page, newLimit)
            .then(
                (res) =>
                    res &&
                    setProducts((prev) => ({
                        ...prev,
                        isLoaded: true,
                        count: res?.products?.count,
                        items: res?.products?.rows,
                        pagination: res?.pagination,
                    }))
            )
            .catch((error) => error && setProducts((prev) => ({...prev, isLoaded: true, error})))
    }

    useEffect(() => {
        getData()
    }, [])

    const clickDelete = (id) => {
        deleteProduct(id).then(() => getData())
        setModalDelete({isShow: false, id: false})
    }

    if (!products.isLoaded) {
        return <Loader full />
    }

    if (!products.items || products.items.length === 0) {
        return (
            <Info className="d-flex flex-column align-items-center justify-content-center account-info">
                <h3 className="mb-4">Товаров нет</h3>
                <p>
                    <Link to="/admin/product/create" className="btn-2 fs-08">
                        Добавить
                    </Link>
                </p>
            </Info>
        )
    }

    return (
        <section className="products">
            <div className="d-flex flex-row justify-content-between align-items-center mb-4">
                <h1 className="m-0">Товары</h1>
                <Link to="/admin/product/create" className="btn-2">
                    Добавить
                </Link>
            </div>
            <CustomDataTable
                handlePerRowsChange={handlePerRowsChange}
                handlePageChange={handlePageChange}
                columns={productColumns}
                data={products.items}
                pagination={products.pagination}
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
                Вы точно хотите удалить товар?
            </CustomModal>
        </section>
    )
}

export default AdminProducts

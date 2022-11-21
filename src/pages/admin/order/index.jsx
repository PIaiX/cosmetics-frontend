import moment from 'moment'
import React, {useCallback, useEffect, useState} from 'react'
import {GrEdit} from 'react-icons/gr'
import {IoTrashOutline} from 'react-icons/io5'
import {Link} from 'react-router-dom'
import CustomDataTable from '../../../components/CustomDataTable'
import OrderProductItem from '../../../components/OrderProductItem'
import Button from '../../../components/UI/Button'
import Info from '../../../components/UI/Info'
import Loader from '../../../components/UI/Loader'
import CustomModal from '../../../components/utils/CustomModal'
import {deliveryText, paymentText} from '../../../helpers/order'
import {customPrice} from '../../../helpers/product'
import {deleteOrder, getOrders} from '../../../services/admin'

const Orders = () => {
    const [orders, setOrders] = useState({
        isLoaded: false,
        error: null,
        items: [],
        pagination: false,
    })
    const [modalDelete, setModalDelete] = useState({
        isShow: false,
        id: false,
    })
    const orderColumns = [
        {
            name: '#',
            width: '85px',
            sortable: true,
            selector: 'id',
        },
        {
            name: 'Статус',
            selector: 'delivery',
            sortable: true,
            cell: (row) => deliveryText(row.delivery),
        },
        {
            name: 'Оплата',
            selector: 'payment',
            sortable: true,
            cell: (row) => paymentText(row.payment),
        },
        {
            name: 'Время заказа',
            selector: 'createdAt',
            sortable: true,
            cell: (row) => moment(row.createdAt).format('DD.MM.YYYY kk:mm'),
        },
        {
            name: 'Итого',
            selector: 'payment',
            width: '100px',
            sortable: true,
            cell: (row) => customPrice(row.total),
        },
        {
            selector: 'action',
            center: true,
            width: '100px',
            cell: (row) => (
                <div className="d-flex align-items-center">
                    <Link to={`/admin/order/${row.id}`} className="me-4">
                        <GrEdit size={15} color="#fff" />
                    </Link>
                    <a onClick={() => setModalDelete({isShow: !modalDelete.isShow, id: row.id})}>
                        <IoTrashOutline size={20} color="#ff5252" />
                    </a>
                </div>
            ),
        },
    ]
    const getData = async (page = 1) => {
        getOrders(page)
            .then(
                (res) =>
                    res &&
                    setOrders((prev) => ({
                        ...prev,
                        isLoaded: true,
                        items: res?.orders?.rows,
                        pagination: res?.pagination,
                    }))
            )
            .catch((error) => error && setOrders((prev) => ({...prev, isLoaded: true, error})))
    }

    const handlePageChange = (page) => {
        getData(page)
    }

    const handlePerRowsChange = async (newLimit, page) => {
        getOrders(page, newLimit)
            .then(
                (res) =>
                    res &&
                    setOrders((prev) => ({
                        ...prev,
                        isLoaded: true,
                        items: res?.orders?.rows,
                        pagination: res?.pagination,
                    }))
            )
            .catch((error) => error && setOrders((prev) => ({...prev, isLoaded: true, error})))
    }

    useEffect(() => {
        getData()
    }, [])

    const clickDelete = (id) => {
        deleteOrder(id).then(() => getData())
        setModalDelete({isShow: false, id: false})
    }

    if (!orders.isLoaded) {
        return <Loader full />
    }

    if (!orders.items || orders.items.length === 0) {
        return (
            <Info className="d-flex flex-column align-items-center justify-content-center account-info">
                Пока заказов нет
            </Info>
        )
    }

    return (
        <section className="orders">
            <h1 className="mb-4">Заказы</h1>
            <CustomDataTable
                columns={orderColumns}
                data={orders.items}
                pagination={orders.pagination}
                expandableRows
                handlePerRowsChange={handlePerRowsChange}
                handlePageChange={handlePageChange}
                expandableRowsComponent={({data}) =>
                    data.products && data.products.map((e) => <OrderProductItem key={e.id} {...e} />)
                }
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
                Вы точно хотите удалить заказ?
            </CustomModal>
        </section>
    )
}

export default Orders

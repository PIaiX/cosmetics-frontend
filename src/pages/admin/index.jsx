import React, {useEffect, useState} from 'react'
import {Col, Row} from 'react-bootstrap'
import {getStatistic} from '../../services/admin'

const Admin = () => {
    const [statistic, setStatistic] = useState({
        users: 0,
        products: 0,
        categories: 0,
        orders: 0,
        addresses: 0,
    })

    useEffect(() => {
        getStatistic().then((res) => res && setStatistic(res))
    }, [])

    return (
        <>
            <h1>Панель администратора</h1>
            <Row className="row admin-home">
                <Col md={6}>
                    <div className="box">
                        <h3 className="mb-3 mb-sm-4">Статистика</h3>
                        {/* <p>
                            Клиентов: <b className="text-success">{statistic.users ?? 0}</b>
                        </p> */}
                        <p>
                            Заказов: <b className="text-success">{statistic.orders ?? 0}</b>
                        </p>
                        <p>
                            Категорий: <b className="text-success">{statistic.categories ?? 0}</b>
                        </p>
                        <p>
                            Товаров: <b className="text-success">{statistic.products ?? 0}</b>
                        </p>
                        {/* <p>
                            Адресов: <b className="text-success">{statistic.addresses ?? 0}</b>
                        </p> */}
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Admin

import React from 'react'
import {getImageURL} from '../helpers/image'
import {customPrice} from '../helpers/product'

const OrderProductItem = (props) => {
    return (
        <div className="product-cart">
            <div className="d-flex align-items-start">
                <img src={getImageURL(props.images)} alt={props.title} />
                <div className="flex-1 ms-3 ms-xl-4">
                    <h5 className="mb-2">{props.title}</h5>
                    <p className="font-faded fs-08">{props.description}</p>
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-end ms-sm-4 ms-xl-5 mt-3 mt-sm-0 pe-3">
                <div>{props.count} шт</div>
                <div className="ms-4 ms-xl-5 fw-7">
                    <span className="main-color fs-11">{customPrice(props.price)}</span>
                </div>
            </div>
        </div>
    )
}

export default OrderProductItem

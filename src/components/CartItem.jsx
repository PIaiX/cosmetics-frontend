import React from 'react'
import {Link} from 'react-router-dom'
import {IoCloseOutline} from 'react-icons/io5'

const CartItem = (props) => {
    return (
        <div className="cart-item">
            <div className="title">
                <Link to="/">{props.title}</Link>
            </div>
            <div className="img">
                <Link to="/">
                    <img src={props.imgUrl} alt={props.title} />
                </Link>
            </div>
            <div className="count">
                <input type="number" list="list" defaultValue={props.count} />
                <datalist id="list">
                    <option value="1" />
                    <option value="2" />
                    <option value="3" />
                    <option value="4" />
                    <option value="5" />
                </datalist>
            </div>
            <div className="price">{props.price}&nbsp;₽</div>
            <div className="btns">
                <button type="button">
                    <IoCloseOutline className='d-none d-md-block' />
                    <span className='d-md-none'>Удалить</span>
                </button>
            </div>
        </div>
    )
}

export default CartItem

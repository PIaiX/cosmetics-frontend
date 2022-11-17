import React, {useCallback, useTransition} from 'react'
import {Link} from 'react-router-dom'
import {IoCloseOutline} from 'react-icons/io5'
import {getImageURL} from '../helpers/image'
import {useDispatch} from 'react-redux'
import {cartDelete, cartEdit} from '../store/actions/cart'

const CartItem = ({item = {}}) => {
    const dispatch = useDispatch()
    const [isPending, startTransition] = useTransition()

    const inputUpdateCart = useCallback(
        (newCount) => {
            startTransition(() => {
                const isCorrectValue = +newCount >= 1

                if (isCorrectValue) {
                    dispatch(cartEdit({productId: item?.id, count: +newCount}))
                } else {
                    dispatch(cartEdit({productId: item?.id, count: 1}))
                }
            })
        },
        [item?.id]
    )

    return (
        <div className="cart-item">
            <div className="title">
                <Link to="/">{item?.title}</Link>
            </div>
            <div className="img">
                <Link to="/">
                    <img src={getImageURL()} alt={item?.title} />
                </Link>
            </div>
            <div className="count">
                <input
                    type="number"
                    list="list"
                    value={item?.count}
                    onChange={(e) => inputUpdateCart(e.target.value)}
                />
                <datalist id="list">
                    <option value="1" />
                    <option value="2" />
                    <option value="3" />
                    <option value="4" />
                    <option value="5" />
                </datalist>
            </div>
            <div className="price">{item?.price}&nbsp;₽</div>
            <div className="btns">
                <button type="button" onClick={() => dispatch(cartDelete({productId: item?.id}))}>
                    <IoCloseOutline className="d-none d-md-block" />
                    <span className="d-md-none">Удалить</span>
                </button>
            </div>
        </div>
    )
}

export default CartItem

import React, {useCallback, useMemo} from 'react'
import {Link} from 'react-router-dom'
import {getImageURL} from '../helpers/image'
import {FormattedMessage} from 'react-intl'
import {useDispatch, useSelector} from 'react-redux'
import {cartCreate, cartDelete} from '../store/actions/cart'

const ProductCard = ({product = {}}) => {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state?.cart?.items)
    const productId = +product?.id
    const cartItem = useMemo(() => {
        return cart?.length && cart.find((item) => +item?.id === productId)
    }, [cart, productId])

    const onSelectProduct = useCallback(() => {
        if (cartItem) {
            dispatch(cartDelete({productId}))
        } else {
            dispatch(cartCreate({product}))
        }
    }, [cartItem, product, productId])

    return (
        <div className="product-card">
            <figure>
                <Link to={`/product/${product?.id}`}>
                    {/* todo: need to add swiper */}
                    <img src={getImageURL()} alt={product?.title} />
                    <figcaption>
                        <h4>{product?.title}</h4>
                        <p className="fs-09 mb-1 mb-sm-2">{product?.miniDescription}</p>
                        <p>{product?.price}</p>
                    </figcaption>
                </Link>
            </figure>
            {product?.leftovers > 0 ? (
                <button
                    type="button"
                    className={`${cartItem ? 'btn-2' : 'btn-1'} w-100 mt-2 mt-sm-4`}
                    onClick={onSelectProduct}
                >
                    {cartItem ? <FormattedMessage id="addedToCart" /> : <FormattedMessage id="addToCart" />}
                </button>
            ) : (
                <button type="button" disabled className="btn-3 fw-7 w-100 mt-2 mt-sm-4">
                    OUT OF STOCK
                </button>
            )}
        </div>
    )
}

export default ProductCard

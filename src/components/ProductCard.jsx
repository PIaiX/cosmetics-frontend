import React, {useCallback, useMemo} from 'react'
import {Link} from 'react-router-dom'
import {getImageURL} from '../helpers/image'
import {FormattedMessage} from 'react-intl'
import {useDispatch, useSelector} from 'react-redux'
import {cartCreate, cartDelete} from '../store/actions/cart'
import LOCALES from '../assets/i18n/locales'

const ProductCard = ({product = {}}) => {
    const dispatch = useDispatch()
    const locale = useSelector((state) => state?.locale?.value)
    const currency = useSelector((state) => state?.locale?.currency)
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
                    <img
                        src={getImageURL(
                            Array.isArray(product?.images) && product?.images?.length && product?.images[0]?.media
                        )}
                        alt={product?.title}
                    />
                    <figcaption>
                        <h4 className="fs-09">
                            {locale === LOCALES.RUSSIAN && product?.title}
                            {locale === LOCALES.ENGLISH && product?.title_us}
                            {locale === LOCALES.ENGLAND && product?.title_uk}
                            {locale === LOCALES.JAPANESE && product?.title_ja}
                        </h4>
                        <p className="fs-08 mb-1 mb-sm-2">
                            {locale === LOCALES.RUSSIAN && product?.miniDescription}
                            {locale === LOCALES.ENGLISH && product?.miniDescription_us}
                            {locale === LOCALES.ENGLAND && product?.miniDescription_uk}
                            {locale === LOCALES.JAPANESE && product?.miniDescription_ja}
                        </p>
                        <p className="fs-09">
                            {locale === LOCALES.RUSSIAN && `${product?.price} ${currency}`}
                            {locale === LOCALES.ENGLISH && `${product?.price_us} ${currency}`}
                            {locale === LOCALES.ENGLAND && `${product?.price_uk} ${currency}`}
                            {locale === LOCALES.JAPANESE && `${product?.price_ja} ${currency}`}
                        </p>
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

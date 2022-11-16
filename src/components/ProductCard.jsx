import React from 'react'
import {Link} from 'react-router-dom'
import {getImageURL} from '../helpers/image'

const ProductCard = ({product = {}}) => {
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
            {+product?.leftovers > 0 ? (
                <button type="button" className="btn-1 w-100 mt-2 mt-sm-4">
                    В корзину
                </button>
            ) : (
                <button type="button" className="btn fw-7 w-100 mt-2 mt-sm-4">
                    OUT OF STOCK
                </button>
            )}
        </div>
    )
}

export default ProductCard

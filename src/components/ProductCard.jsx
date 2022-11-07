import React from 'react'
import {Link} from 'react-router-dom'

const ProductCard = (props) => {
    return (
        <div className='product-card'>
            <figure>
                <Link to='/category/product'>
                <img src={props.imgUrl} alt={props.title}/>
                <figcaption>
                    <h4>{props.title}</h4>
                    <p className='fs-09 mb-1 mb-sm-2'>вес нетто 1.1 унция объем 33 мл</p>
                    <p>1100</p>
                </figcaption>
                </Link>
            </figure>
            {
                (props.inStock)
                ? <button type='button' className='btn-1 w-100 mt-2 mt-sm-4'>В корзину</button>
                : <button type='button' className='btn fw-7 w-100 mt-2 mt-sm-4'>OUT OF STOCK</button>
            }
        </div>
    );
};

export default ProductCard;
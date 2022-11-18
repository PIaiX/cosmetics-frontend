import React from 'react'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import AppLayout from '../layouts/AppLayout'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import PointsOfSale from '../pages/PointsOfSale'
import Payment from '../pages/Payment'
import Delivery from '../pages/Delivery'
import PublicOffer from '../pages/PublicOffer'
import Contacts from '../pages/Contacts'
import Category from '../pages/Category'
import Product from '../pages/Product'
import Checkout from '../pages/Checkout'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="category" element={<Category />}>
                <Route path=":categoryId" element={<Category />} />
            </Route>
            <Route path="product" element={<Product />}>
                <Route path=":productId" element={<Product />} />
            </Route>
            <Route path="about" element={<Product />} />
            <Route path="sales" element={<PointsOfSale />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="payment" element={<Payment />} />
            <Route path="delivery" element={<Delivery />} />
            <Route path="public-offer" element={<PublicOffer />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    )
)

const AppRouter = () => {
    return <RouterProvider router={router} />
}

export default AppRouter

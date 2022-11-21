import React from 'react'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import AppLayout from '../layouts/AppLayout'
import AuthRoute from '../layouts/AuthRoute'
import Home from '../pages/Home'
import About from '../pages/About'
import NotFound from '../pages/NotFound'
import PointsOfSale from '../pages/PointsOfSale'
import Payment from '../pages/Payment'
import Delivery from '../pages/Delivery'
import PublicOffer from '../pages/PublicOffer'
import Contacts from '../pages/Contacts'
import Category from '../pages/Category'
import Product from '../pages/Product'
import Checkout from '../pages/Checkout'
import Error from '../pages/Error'
import Loader from '../components/UI/Loader'
import Preloader from '../components/UI/Preloader'
import AdminRounter from './AdminRouter'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<AppLayout />} errorElement={<Error />} loader={() => <Loader full color="#000" />}>
            <Route index element={<Home />} loader={() => <Preloader />} />
            <Route path="category" element={<Category />} loader={() => <Preloader />}>
                <Route path=":categoryId" element={<Category />} />
            </Route>
            <Route path="product" element={<Product />} loader={() => <Preloader />}>
                <Route path=":productId" element={<Product />} />
            </Route>
            <Route path="about" element={<About />} loader={() => <Preloader />} />
            <Route path="sales" element={<PointsOfSale />} loader={() => <Preloader />} />
            <Route path="checkout" element={<Checkout />} loader={() => <Preloader />} />
            <Route path="payment" element={<Payment />} loader={() => <Preloader />} />
            <Route path="delivery" element={<Delivery />} loader={() => <Preloader />} />
            <Route path="public-offer" element={<PublicOffer />} loader={() => <Preloader />} />
            <Route path="contacts" element={<Contacts />} loader={() => <Preloader />} />
            <Route
                path="admin/*"
                element={
                    <AuthRoute admin>
                        <AdminRounter />
                    </AuthRoute>
                }
            />
            <Route path="*" element={<NotFound />} loader={() => <Preloader />} />
        </Route>
    )
)

const AppRouter = () => {
    return <RouterProvider router={router} />
}

export default AppRouter

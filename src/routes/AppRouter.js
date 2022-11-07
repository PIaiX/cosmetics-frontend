import React, { useLayoutEffect } from 'react'
import { useLocation, useRoutes } from "react-router-dom"
import Layout from '../components/Layout'
import About from '../pages/About'
import Home from "../pages/Home"
import NotFound from "../pages/NotFound"
import PointsOfSale from '../pages/PointsOfSale'
import Payment from '../pages/Payment'
import Delivery from '../pages/Delivery'
import PublicOffer from '../pages/PublicOffer'
import Contacts from '../pages/Contacts'
import Category from '../pages/Category'
import Product from '../pages/Product'


export const routeList = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home />},
      { path: 'category', element: <Category/>},
      { path: 'category/product', element: <Product/>},
      { path: 'about', element: <About />},
      { path: 'sales', element: <PointsOfSale/>},
      { path: 'payment', element: <Payment/>},
      { path: 'delivery', element: <Delivery />},
      { path: 'public-offer', element: <PublicOffer/>},
      { path: 'contacts', element: <Contacts/>},
      { path: '*', element: <NotFound /> },
    ],
  },
];

export default function AppRouter() {
  const Wrapper = ({ children }) => {
    const { pathname } = useLocation();
    useLayoutEffect(() => document.documentElement.scrollTo(0, 0), [pathname])
    return children
  }

  const element = useRoutes(routeList)

  return (
    <Wrapper>
      {element}
    </Wrapper>
  );
}
import React, { useLayoutEffect } from 'react'
import { useLocation, useRoutes } from "react-router-dom"
import Layout from '../components/Layout'
import Home from "../pages/Home"
import NotFound from "../pages/NotFound"


export const routeList = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home />},
      { path: 'policy', element: <Home />},
      { path: 'user-agreement', element: <Home />},
      { path: 'contract', element: <Home />},
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
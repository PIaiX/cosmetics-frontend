import React from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function AppLayout() {
    return (
        <>
            <ScrollRestoration />

            <Header />
            <Outlet />
            <Footer/>
        </>
    );
}
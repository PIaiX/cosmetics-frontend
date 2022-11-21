import React from 'react'
import {Route, Routes} from 'react-router-dom'
import AdminLayout from '../layouts/AdminLayout'
import NotFound from '../pages/NotFound'
import Admin from '../pages/admin'

import AdminOrders from '../pages/admin/order'
import AdminOrderEdit from '../pages/admin/order/Edit'

// import AdminNotifications from '../pages/admin/notification'
// import AdminNotificationCreate from '../pages/admin/notification/Create'

import AdminCategories from '../pages/admin/category'
import AdminCategoryEdit from '../pages/admin/category/Edit'
import AdminCategoryCreate from '../pages/admin/category/Create'

import AdminProducts from '../pages/admin/product'
import AdminProductEdit from '../pages/admin/product/Edit'
import AdminProductCreate from '../pages/admin/product/Create'

// import AdminUsers from '../pages/admin/user'
// import AdminUserEdit from '../pages/admin/user/Edit'

// import AdminSales from '../pages/admin/sale'
// import AdminSaleEdit from '../pages/admin/sale/Edit'
// import AdminSaleCreate from '../pages/admin/sale/Create'

// import AdminMarks from '../pages/admin/mark'
// import AdminMarkEdit from '../pages/admin/mark/Edit'
// import AdminMarkCreate from '../pages/admin/mark/Create'

// import AdminComplaints from '../pages/admin/complaint'

const AdminRounter = () => {
    return (
        <Routes>
            <Route path="/" element={<AdminLayout />}>
                <Route index element={<Admin />} />

                <Route path="orders" element={<AdminOrders />} />
                <Route path="order/:orderId" element={<AdminOrderEdit />} />

                <Route path="categories" element={<AdminCategories />} />
                <Route path="category/:categoryId" element={<AdminCategoryEdit />} />
                <Route path="category/create" element={<AdminCategoryCreate />} />

                <Route path="products" element={<AdminProducts />} />
                <Route path="product/:productId" element={<AdminProductEdit />} />
                <Route path="product/create" element={<AdminProductCreate />} />

                {/* <Route path="notifications" element={<AdminNotifications />} />
                <Route path="notification/create" element={<AdminNotificationCreate />} />

                <Route path="users" element={<AdminUsers />} />
                <Route path="user/:userId" element={<AdminUserEdit />} />

                <Route path="sales" element={<AdminSales />} />
                <Route path="sale/:saleId" element={<AdminSaleEdit />} />
                <Route path="sale/create" element={<AdminSaleCreate />} />

                <Route path="marks" element={<AdminMarks />} />
                <Route path="mark/:markId" element={<AdminMarkEdit />} />
                <Route path="mark/create" element={<AdminMarkCreate />} />

                <Route path="complaints" element={<AdminComplaints />} /> */}
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default AdminRounter

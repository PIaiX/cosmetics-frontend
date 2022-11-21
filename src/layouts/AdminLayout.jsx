import React from 'react'
import {Outlet} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AdminMenu from '../components/AdminMenu'

const AdminLayout = () => {
    return (
        <main className="inner">
            <Container>
                <Row>
                    <Col xs={12} md={3}>
                        <AdminMenu />
                    </Col>
                    <Col xs={12} md={8}>
                        <Outlet />
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default AdminLayout

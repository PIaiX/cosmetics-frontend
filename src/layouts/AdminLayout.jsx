import React from 'react'
import {Outlet} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AdminMenu from '../components/AdminMenu'

const AdminLayout = () => {
    return (
        <main className="admin">
            <Container>
                <section className="pt-sm-5 pt-0 pb-5">
                    <Row>
                        <Col xs={12} md={4}>
                            <AdminMenu />
                        </Col>
                        <Col xs={12} md={8}>
                            <Outlet />
                        </Col>
                    </Row>
                </section>
            </Container>
        </main>
    )
}

export default AdminLayout

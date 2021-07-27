import React from 'react';
import { Jumbotron, Row, Col, Container } from 'react-bootstrap'
import Layout from '../../components/Layout'
import './style.css'

const Home = (props) => {
    return (
        <Layout>
            <Container fluid>
                <Row>
                    <Col md={2} className="sidebar">Side bar</Col>
                    <Col md={10} style={{marginLeft:'auto'}}>container</Col>
                </Row>
            </Container>


            {/* <Jumbotron style={{margin: '5rem', backgroundColor: '#fff'}} className="text-center">
                <h1>Welcome to Admin Dashboard</h1>
            </Jumbotron> */}
        </Layout>
    )
}

export default Home

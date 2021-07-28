import React from 'react'
import Layout from '../../components/Layout'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Input from '../../components/UI/Input'
import { Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { signup } from '../../actions'
import { useState, useEffect } from 'react'


const Signup = (props) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const userSignup = (e) => {

        e.preventDefault();

        const user = {
            firstName, lastName, userName, email, password, phone
        }

        dispatch(signup(user));
    }

    if (auth.authenticate) {
        return <Redirect to={'/'} />
    }

    return (
        <Layout >
            <Container>
                <Row style={{ marginTop: '50px' }}>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form onSubmit={userSignup}>
                            <Row>
                                <Col md={6}>
                                    <Input
                                        label="First Name"
                                        placeholder="First Name"
                                        value={firstName}
                                        type="text"
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </Col>
                                <Col md={6}>
                                    <Input
                                        label="Last Name"
                                        placeholder="Last Name"
                                        value={lastName}
                                        type="text"
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </Col>
                            </Row>

                            <Input
                                label="Username"
                                placeholder="Username"
                                value={userName}
                                type="text"
                                onChange={(e) => setUserName(e.target.value)}
                            />

                            <Input
                                label="Email"
                                placeholder="Email"
                                value={email}
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <Input
                                label="Password"
                                placeholder="Password"
                                value={password}
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <Input
                                label="Phone"
                                placeholder="Phone"
                                value={phone}
                                type="text"
                                onChange={(e) => setPhone(e.target.value)}
                            />

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>

            </Container>
        </Layout >
    )
}

export default Signup

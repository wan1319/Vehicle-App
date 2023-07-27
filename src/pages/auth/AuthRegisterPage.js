import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Card, Row, Col, Form, Button } from "react-bootstrap";
import UserService from "../../services/UserService";

const AuthRegisterPage = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        fullName: "",
        email: "",
        password: "",
    });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser((values) => ({ ...values, [name]: value }));
    };

    const handleUserServiceCreate = () => {
        UserService.create(user).then((response) => {
            alert("User berhasil ditambahkan.");
            navigate("/");
        })
            .catch((error) => alert(error));
    };

    return (
        <>
            <Container>
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md={4}>
                        <Card className="mt-3">
                            <Card.Body>
                                <div className="d-flex justify-content-center">
                                    <h2>Register</h2>
                                </div>
                                <Form.Group className="my-3">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control
                                        name="fullName"
                                        type="text"
                                        placeholder="Enter your full name..."
                                        value={user.fullName}
                                        onChange={handleInput}
                                    />
                                </Form.Group>
                                <Form.Group className="my-3">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control
                                        name="email"
                                        type="email"
                                        placeholder="Enter your email..."
                                        value={user.email}
                                        onChange={handleInput}
                                    />
                                </Form.Group>
                                <Form.Group className="my-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        name="password"
                                        type="password"
                                        placeholder="Enter your password..."
                                        value={user.password}
                                        onChange={handleInput}
                                    />
                                </Form.Group>

                                <div className="d-grid gap-2">
                                    <Button onClick={handleUserServiceCreate}>Register</Button>
                                </div>
                                <div className="text-center mt-3">
                                    Have an account? <Link to="/">Login</Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default AuthRegisterPage;
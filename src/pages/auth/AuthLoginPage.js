import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../services/AuthService";
import { Container, Card, Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";

const AuthLoginPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser((values) => ({ ...values, [name]: value }));
  };

  const handleAuthServiceLogin = () => {
    AuthService.login(user)
      .then((response) => {
        AuthService.saveToken(response.data.token);
        navigate("/user");
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
                  <h2>Login</h2>
                </div>
                <Form.Group className="my-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="Masukan email..."
                    value={user.email}
                    onChange={handleInput}
                  />
                </Form.Group>
                <Form.Group className="my-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    name="password"
                    type="password"
                    placeholder="Masukan password..."
                    value={user.password}
                    onChange={handleInput}
                  />
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button onClick={handleAuthServiceLogin}>Login</Button>
                </div>
                <div className="text-center mt-3">
                  Don't have an account? <Link to="/register">Register</Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AuthLoginPage;

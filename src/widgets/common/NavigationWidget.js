import { Container, Nav, Navbar, Col, Row, Stack } from "react-bootstrap";
import { BsFillDatabaseFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const NavigationWidget = ({ children, buttonCreate, actionTop, username, avatar }) => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">PT. KELOMPOK II</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>Selamat datang! </Navbar.Text>
            <Navbar.Text>{username}</Navbar.Text>
            <Navbar.Text>{avatar}</Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-2">
        <Row>
          <Col md={2}>
            <Nav className="flex-column">
              {/* <Nav.Link onClick={() => navigate("/dashboard")}>
                <RiDashboardFill /> Dashboard
              </Nav.Link> */}
              <Nav.Link disabled>
                <BsFillDatabaseFill /> MASTER
              </Nav.Link>
              <Nav.Link onClick={() => navigate("/brand")}>Brand</Nav.Link>
              <Nav.Link onClick={() => navigate("/vehicle")}>Vehicle</Nav.Link>
              <Nav.Link onClick={() => navigate("/order")}>Transaction</Nav.Link>
            </Nav>
          </Col>
          <Col md={10}>
            <Stack direction="horizontal" gap={3} className="my-2">
              <div>{buttonCreate}</div>
              <div className="ms-auto">{actionTop}</div>
            </Stack>
            {children}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NavigationWidget;

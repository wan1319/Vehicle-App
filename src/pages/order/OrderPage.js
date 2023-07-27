import { Card, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import OrderService from "../../services/OrderService";

const OrderPage = () => {
    const [order, setOrder] = useState({});
    const [queryOrder, setQueryOrder] = useState({});

    useEffect(() => {
        OrderService.list(queryOrder)
            .then((response) => {
                setOrder(response.data.results);
            })
            .catch((error) => console.log(error));
    }, [queryOrder]);

    return (
        <Card className="mt-2">
            <Card.Header className="bg-secondary text-light d-flex justify-content-between align-items-center">
                <h5>Order</h5>
            </Card.Header>
            <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Vehicle ID</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {order.map((order, index) => (
              <tr key={index}>
                <td>{order.userID}</td>
                <td>{order.vehicleID}</td>
                <td>{order.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        </Card>
    );
};

export default OrderPage;

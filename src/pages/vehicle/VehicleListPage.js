import { Button, Card, Table } from "react-bootstrap";
import NavigationWidget from "../../widgets/commons/NavigationWidget";
import { useNavigate } from "react-router-dom";
import { VscAdd } from "react-icons/vsc";
import { useEffect, useState } from "react";
import Paginator from "../../widgets/commons/PaginatorWidget";
import VehicleService from "../../services/VehicleService";
import OrderService from "../../services/OrderService";

const VehicleListPage = () => {
    const navigate = useNavigate();
    const [daftarVehicle, setDaftarVehicle] = useState({});
    const [order, setOrder] = useState({});
    const [paginateVehicle, setPaginateVehicle] = useState([]);
    const [queryVehicle, setQueryVehicle] = useState({ page: 1, limit: 10 });

    useEffect(() => {
        VehicleService.list(queryVehicle)
            .then((response) => {
                setDaftarVehicle(response.data);
                if (response.headers.pagination) {
                    setPaginateVehicle(JSON.parse(response.headers.pagination));
                }
            })
            .catch((error) => console.log(error));
    }, [queryVehicle]);

    const callbackPaginator = (page) => {
        setQueryVehicle((values) => ({ ...values, page }));
    };

    const handleOrderServiceCreate = () => {
        OrderService.create(order).then((response) => {
            alert("Order berhasil.");
            navigate("/order");
        })
            .catch((error) => alert(error));
    };

    return (
        <NavigationWidget
            buttonCreate={
                <Button onClick={() => navigate("/vehicle/add")}>
                    <VscAdd />  Tambah
                </Button>
            }
        >
            <Card className="mt-2">
                <Card.Header className="bg-secondary text-light d-flex justify-content-between align-items-center">
                    <h5>Vehicle</h5>
                    <Paginator paginate={paginateVehicle} callbackPaginator={callbackPaginator} />
                </Card.Header>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Nama Vehicle</th>
                            <th>Brand</th>
                            <th>Year</th>
                            <th>Price</th>
                            <th>Created At</th>
                            <th>Updated At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {daftarVehicle.results && daftarVehicle.results.map((vehicle, index) => (
                            <tr
                                key={index}
                                onClick={() => navigate(`/golongan/edit/${vehicle.brandID}`)}>
                                <td>{vehicle.vehicleName}</td>
                                <td>{vehicle.brand}</td>
                                <td>{vehicle.year}</td>
                                <td>{vehicle.price}</td>
                                <td>{vehicle.createdAt}</td>
                                <td>{vehicle.updatedAt}</td>
                                <td>
                                    <Button onClick={() => handleOrderServiceCreate(vehicle.brandID)}>Buy</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card>
        </NavigationWidget>
    );
};

export default VehicleListPage;

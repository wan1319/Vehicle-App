import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, Form } from "react-bootstrap";
import { FaArrowLeft, FaSave, FaTrash } from "react-icons/fa";
import NavigationWidget from "../../widgets/commons/NavigationWidget";
import VehicleService from "../../services/VehicleService";

const VehicleEditPage = () => {
    const navigate = useNavigate();
    const { vehicleID } = useParams();
    const [vehicle, setVehicle] = useState({});
    const [brand, setBrand] = useState({});

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setVehicle((values) => ({ ...values, [name]: value }));
    };

    useEffect(() => {
        VehicleService.get(vehicleID).then((response) => {
            setVehicle(response.data);
        });
    }, [vehicleID]);

    const handleVehicleServiceEdit = () => {
        VehicleService.edit(vehicleID, vehicle).then((response) => {
            alert(`Berhasil mengubah data vehicle ${vehicleID}`);
            navigate("/vehicle");
        });
    };

    const handleVehicleServiceDelete = () => {
        let isDelete = window.confirm(`Delete golongan ${vehicleID}?`)
        if (isDelete) {
            VehicleService.delete(vehicleID, vehicle).then(() => {
                alert(`Berhasil mengubah data vehicle ${vehicleID}`);
                navigate("/vehicle");
            });
        }

    };

    return (
        <NavigationWidget actionTop={
            <>
                <Button className="me-2" variant="secondary" onClick={() => navigate(-1)}>
                    <FaArrowLeft /> Kembali
                </Button>
                <Button className="me-2" variant="danger" onClick={handleVehicleServiceDelete}>
                    <FaTrash />Hapus
                </Button>
                <Button onClick={handleVehicleServiceEdit}>
                    <FaSave />Simpan
                </Button>
            </>
        }>
            <Card>
                <Card.Header>
                    <h5>Edit Vehicle</h5>
                </Card.Header>
                <Card.Body>
                    <Form.Group className="mt-3">
                        <Form.Label>Nama Vehicle</Form.Label>
                        <Form.Control
                            name="vehicleName"
                            value={vehicle.vehicleName || ""}
                            onChange={handleInput}
                        />
                        <Form.Label>Brand Vehicle</Form.Label>
                        <Form.Control
                            name="brandID"
                            value={brand.brandID || ""}
                            onChange={handleInput}
                        />
                        <Form.Label>Production Year</Form.Label>
                        <Form.Control
                            name="year"
                            value={vehicle.year || ""}
                            onChange={handleInput}
                        />
                        <Form.Label>Harga Vehicle</Form.Label>
                        <Form.Control
                            name="price"
                            value={vehicle.price || ""}
                            onChange={handleInput}
                        />
                    </Form.Group>
                </Card.Body>
            </Card>
        </NavigationWidget>
    );
};

export default VehicleEditPage;
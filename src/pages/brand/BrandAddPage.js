import { Button, Card, Form } from "react-bootstrap";
import NavigationWidget from "../../widgets/commons/NavigationWidget";
import { FaArrowLeft, FaSave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import BrandService from "../../services/BrandService";

const BrandAddPage = () => {
    const navigate = useNavigate();
    const [brand, setBrand] = useState({});

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setBrand((values) => ({ ...values, [name]: value }));
    };

    const handleBrandServiceCreate = () => {
        BrandService.create(brand).then((response) => {
            alert("Brand berhasil ditambahkan.");
            console.log("Created At:", response.createdAt);
            navigate("/brand");
        });
    };

    return (
        <NavigationWidget
            actionTop={
                <>
                    <Button className="me-2" variant="secondary" onClick={() => navigate(-1)}>
                        <FaArrowLeft /> Kembali
                    </Button>
                    <Button onClick={handleBrandServiceCreate}>
                        <FaSave /> Simpan
                    </Button>
                </>
            }
        >
            <Card>
                <Card.Header>
                    <h5>Tambah Brand</h5>
                </Card.Header>
                <Card.Body>
                    <Form.Group className="mt-3">
                        <Form.Label>Nama Brand</Form.Label>
                        <Form.Control
                            name="brandName"
                            value={brand.brandName || ""}
                            onChange={handleInput}
                        />
                    </Form.Group>
                </Card.Body>
            </Card>
        </NavigationWidget>
    );
};

export default BrandAddPage;

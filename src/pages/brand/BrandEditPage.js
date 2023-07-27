import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, Form } from "react-bootstrap";
import { FaArrowLeft, FaSave, FaTrash } from "react-icons/fa";
import NavigationWidget from "../../widgets/commons/NavigationWidget";
import BrandService from "../../services/BrandService";

const BrandEditPage = () => {
    const navigate = useNavigate();
    const { brandID } = useParams();
    const [brand, setBrand] = useState({});

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setBrand((values) => ({ ...values, [name]: value }));
    };

    useEffect(() => {
        BrandService.get(brandID).then((response) => {
            setBrand(response.data);
        });
    }, [brandID]);

    const handleBrandServiceEdit = () => {
        BrandService.edit(brandID, brand).then((response) => {
            alert(`Berhasil mengubah data brand ${brandID}`);
            navigate("/brand");
        });
    };

    const handleBrandServiceDelete = () => {
        let isDelete = window.confirm(`Delete golongan ${brandID}?`)
        if (isDelete) {
            BrandService.delete(brandID, brand).then(() => {
                alert(`Berhasil mengubah data brand ${brandID}`);
                navigate("/brand");
            });
        }

    };

    return (
        <NavigationWidget actionTop={
            <>
                <Button className="me-2" variant="secondary" onClick={() => navigate(-1)}>
                    <FaArrowLeft /> Kembali
                </Button>
                <Button className="me-2" variant="danger" onClick={handleBrandServiceDelete}>
                    <FaTrash />Hapus
                </Button>
                <Button onClick={handleBrandServiceEdit}>
                    <FaSave />Simpan
                </Button>
            </>
        }>
            <Card>
                <Card.Header>
                    <h5>Edit Brand</h5>
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

export default BrandEditPage;
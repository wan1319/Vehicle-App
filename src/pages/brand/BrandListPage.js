import { Button, Card, Table } from "react-bootstrap";
import NavigationWidget from "../../widgets/commons/NavigationWidget";
import { useNavigate } from "react-router-dom";
import { VscAdd } from "react-icons/vsc";
import { useEffect, useState } from "react";
import Paginator from "../../widgets/commons/PaginatorWidget";
import BrandService from "../../services/BrandService";

const BrandListPage = () => {
  const navigate = useNavigate();
  const [daftarBrand, setDaftarBrand] = useState({});
  const [paginateBrand, setPaginateBrand] = useState([]);
  const [queryBrand, setQueryBrand] = useState({ page: 1, limit: 10 });

  useEffect(() => {
    BrandService.list(queryBrand)
      .then((response) => {
        setDaftarBrand(response.data);
        if (response.headers.pagination) {
          setPaginateBrand(JSON.parse(response.headers.pagination));
        }
      })
      .catch((error) => console.log(error));
  }, [queryBrand]);

  const callbackPaginator = (page) => {
    setQueryBrand((values) => ({ ...values, page }));
  };

  return (
    <NavigationWidget
      buttonCreate={
        <Button onClick={() => navigate("/brand/add")}>
          <VscAdd />  Tambah
        </Button>
      }
    >
      <Card className="mt-2">
        <Card.Header className="bg-secondary text-light d-flex justify-content-between align-items-center">
          <h5>Brand</h5>
          <Paginator paginate={paginateBrand} callbackPaginator={callbackPaginator} />
        </Card.Header>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Nama Brand</th>
              <th>Created At</th>
              <th>Updated At</th>
            </tr>
          </thead>
          <tbody>
            {daftarBrand.results && daftarBrand.results.map((brand, index) => (
              <tr
                key={index}
                onClick={() => navigate(`/golongan/edit/${brand.bradID}`)}>
                <td>{brand.brandName}</td>
                <td>{brand.createdAt}</td>
                <td>{brand.updatedAt}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </NavigationWidget>
  );
};

export default BrandListPage;

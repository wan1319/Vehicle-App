import config from "../config";
import AuthService from "./AuthService";
import HTTPService from "./HTTPService";

const BrandService = {};
const CONFIG_HTTP = {
  headers: {
    "x-access-token": AuthService.getToken(),
  },
};

BrandService.list = (query) => {
  CONFIG_HTTP.params = query;
  return HTTPService.get(`${config.BASE_URL}/brand`, CONFIG_HTTP);
};

BrandService.create = (brand) => {
  return HTTPService.post (`${config.BASE_URL}/brand`, brand, CONFIG_HTTP);
};

BrandService.get = (brandID) => {
  CONFIG_HTTP.params = null;
  return HTTPService.get(
    `${config.BASE_URL}/brand/${brandID}`,
    CONFIG_HTTP
  );
};

BrandService.edit = (brandID, brand) => {
  CONFIG_HTTP.params = null;
  return HTTPService.put(
    `${config.BASE_URL}/jabatan/${brandID}`,
    brand,
    CONFIG_HTTP
  );
};

BrandService.delete = (brandID) => {
  CONFIG_HTTP.params = null;
  return HTTPService.delete(
    `${config.BASE_URL}/brand/${brandID}`,
    CONFIG_HTTP
  );
};

export default BrandService;

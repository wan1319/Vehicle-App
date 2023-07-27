import config from "../config";
import AuthService from "./AuthService";
import HTTPService from "./HTTPService";

const OrderService = {};
const CONFIG_HTTP = {
  headers: {
    "x-access-token": AuthService.getToken(),
  },
};

OrderService.create = (order) => {
  return HTTPService.post (`${config.BASE_URL}/order`, order, CONFIG_HTTP);
};

OrderService.get = (orderID) => {
  CONFIG_HTTP.params = null;
  return HTTPService.get(
    `${config.BASE_URL}/order/${orderID}`,
    CONFIG_HTTP
  );
};

export default OrderService;
import config from "../config";
import AuthService from "./AuthService";
import HTTPService from "./HTTPService";

const VehicleService = {};
const CONFIG_HTTP = {
  headers: {
    "x-access-token": AuthService.getToken(),
  },
};

VehicleService.list = (query) => {
  CONFIG_HTTP.params = query;
  return HTTPService.get(`${config.BASE_URL}/vehicle`, CONFIG_HTTP);
};

VehicleService.create = (vehicle) => {
  return HTTPService.post (`${config.BASE_URL}/vehicle`, vehicle, CONFIG_HTTP);
};

VehicleService.get = (vehicleID) => {
  CONFIG_HTTP.params = null;
  return HTTPService.get(
    `${config.BASE_URL}/vehicle/${vehicleID}`,
    CONFIG_HTTP
  );
};

VehicleService.edit = (vehicleID, vehicle) => {
  CONFIG_HTTP.params = null;
  return HTTPService.put(
    `${config.BASE_URL}/jabatan/${vehicleID}`,
    vehicle,
    CONFIG_HTTP
  );
};

VehicleService.delete = (vehicleID) => {
  CONFIG_HTTP.params = null;
  return HTTPService.delete(
    `${config.BASE_URL}/vehicle/${vehicleID}`,
    CONFIG_HTTP
  );
};

export default VehicleService;

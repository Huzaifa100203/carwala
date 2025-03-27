import axios from "axios";

const fetchCars = async () => {
  const response = await axios.get("/api/car");
  return response.data;
};

const fetchCar = async (id) => {
  const response = await axios.get(`/api/car/${id}`);
  return response.data;
};

const searchCar = async (query) => {
  const response = await axios.get(`/api/car/search?query=${query}`);
  return response.data;
};

const carService = {
  fetchCars,
  fetchCar,
  searchCar,
};

export default carService;

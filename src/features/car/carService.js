import axios from "axios";

const fetchCars = async () => {
  const response = await axios.get("/api/car");
  console.log(response.data);
  return response.data;
};

const carService = {
  fetchCars,
};

export default carService;

import axios from "axios";

const fetchRentals = async (token) => {
  let options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get("/api/rentals", options);
  return response.data;
};

const createRental = async (formData, token) => {
  let options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(
    "/api/rentals/" + formData.id,
    formData,
    options
  );
  console.log(response.data);
  return response.data;
};

const rentalService = { fetchRentals, createRental };

export default rentalService;

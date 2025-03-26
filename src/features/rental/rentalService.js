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

const rentalService = { fetchRentals };

export default rentalService;

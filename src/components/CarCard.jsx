import React from "react";
import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
  return (
    <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img src={car.image} alt="Luxury Car" class="w-full h-48 object-cover" />
      <div class="p-6">
        <h3 class="text-xl font-semibold mb-2">{car.name}</h3>
        <p class="text-gray-600 mb-4">{car.category}</p>
        <div class="flex justify-between items-center">
          <span class="text-emerald-500 font-bold">${car.rate}/day</span>
          <Link
            to={`/car/${car._id}`}
            class="bg-emerald-500 text-white px-4 py-2 rounded-full hover:bg-emerald-800 transition-colors"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;

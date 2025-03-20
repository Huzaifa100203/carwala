import React from "react";

const CarCard = () => {
  return (
    <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img
        src="https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3"
        alt="Luxury Car"
        class="w-full h-48 object-cover"
      />
      <div class="p-6">
        <h3 class="text-xl font-semibold mb-2">Mercedes-Benz S-Class</h3>
        <p class="text-gray-600 mb-4">Luxury sedan with premium features</p>
        <div class="flex justify-between items-center">
          <span class="text-emerald-500 font-bold">$200/day</span>
          <button class="bg-emerald-500 text-white px-4 py-2 rounded-full hover:bg-emerald-800 transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;

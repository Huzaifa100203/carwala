import React from "react";

const HeroSection = () => {
  return (
    <section class="relative h-screen">
      <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3')] bg-cover bg-center">
        <div class="absolute inset-0 bg-black/50"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
        <h1 class="text-5xl md:text-6xl font-bold mb-6 text-white">
          Find Your Perfect Ride
        </h1>
        <p class="text-xl mb-12 text-gray-200 max-w-2xl">
          Discover our premium collection of luxury vehicles for an
          unforgettable driving experience.
        </p>

        <div class="w-full max-w-2xl bg-white p-6 rounded-2xl shadow-2xl">
          <div class="flex gap-4">
            <div class="relative flex-1">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <i class="bx bx-car text-gray-400 text-xl"></i>
              </div>
              <input
                type="text"
                placeholder="Search by car name (e.g., Mercedes, BMW, Audi)"
                class="w-full pl-11 pr-4 py-4 border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-700"
              />
            </div>
            <button class="bg-emerald-500 hover:bg-emerald-800 text-white px-8 py-4 rounded-lg transition-colors flex items-center justify-center space-x-2 flex-shrink-0">
              <i class="bx bx-search text-xl"></i>
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

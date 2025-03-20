import React from "react";
import CarCard from "./CarCard";

const TrendingCars = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Trending Cars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
        </div>
      </div>
    </section>
  );
};

export default TrendingCars;

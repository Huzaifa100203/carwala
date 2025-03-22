import React, { useEffect } from "react";
import CarCard from "./CarCard";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../features/car/carSlice";
import Loader from "./Loader";
import { toast } from "react-toastify";

const TrendingCars = () => {
  const { isLoading, isSuccess, isError, cars, message } = useSelector(
    (state) => state.car
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars());

    if (isError && message) {
      toast.error(message);
    }
  }, [isError, message]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 uppercase">
          Trending Cars
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <CarCard key={car._id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingCars;

import React, { useEffect } from "react";
import CarCard from "../components/CarCard";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { findCar } from "../features/car/carSlice";
import { toast } from "react-toastify";
import Loader from "../components/Loader";

const SearchCars = () => {
  const { cars, isSuccess, isError, isLoading, message } = useSelector(
    (state) => state.car
  );

  const dispatch = useDispatch();
  const { query } = useParams();

  useEffect(() => {
    dispatch(findCar(query));

    if (isError && message) {
      toast.error(message);
    }
  }, [query, isError, message]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 uppercase">
          Search Results
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

export default SearchCars;

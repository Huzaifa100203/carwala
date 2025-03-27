import React, { useEffect, useState } from "react";
import { FaGasPump, FaUsers, FaRegComment, FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getCar } from "../features/car/carSlice";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import { addRental } from "../features/rental/rentalSlice";

const CarDetails = () => {
  const { car, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.car
  );

  const {
    rental,
    isRentalLoading,
    isRentalSuccess,
    isRentalError,
    rentalErrorMessage,
  } = useSelector((state) => state.rental);

  const { user } = useSelector((state) => state.auth);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let comments = [];
  const [comment, setComment] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [dropDate, setDropDate] = useState("");

  const handleBooking = (e) => {
    e.preventDefault();

    let pickup = pickupDate.split("-");
    let formattedPickup = `${pickup[1]}/${pickup[2]}/${pickup[0]}`;
    let drop = dropDate.split("-");
    let formattedDrop = `${drop[1]}/${drop[2]}/${drop[0]}`;

    dispatch(
      addRental({
        id: id,
        pickupDate: formattedPickup,
        dropDate: formattedDrop,
      })
    );

    if (isRentalSuccess) {
      navigate("/my-rentals");
    }
  };

  useEffect(() => {
    dispatch(getCar(id));

    if (!user) {
      navigate("/login");
    }

    if (isError && message) {
      toast.error(message);
    }
  }, [id, isError, message, user]);

  if (isLoading || isRentalLoading) {
    return <Loader />;
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Column - Image */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="relative">
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h2 className="text-3xl font-bold text-white uppercase">
                {car.name}
              </h2>
              <p className="text-gray-200 mt-1 uppercase">
                by {car.company} Motors
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
          <div className="flex justify-between items-start mb-6">
            <div className="text-2xl font-bold text-emerald-500">
              ₹{car.rate}/day
            </div>
            <span className="text-sm text-gray-500 uppercase">
              Registration: {car.registration}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-6 py-6 border-y border-gray-100">
            <div className="flex items-center gap-3">
              <FaGasPump className="w-6 h-6 text-emerald-500" />
              <div>
                <p className="text-sm text-gray-500">Fuel Type</p>
                <p className="font-semibold uppercase">{car.fuelType}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaUsers className="w-6 h-6 text-emerald-500" />
              <div>
                <p className="text-sm text-gray-500">Category</p>
                <p className="font-semibold uppercase">{car.category}</p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestiae quos explicabo libero rerum ut excepturi illum sint
              dolore mollitia tenetur numquam distinctio, autem asperiores dicta
              accusantium voluptate dolorem sit quibusdam!
            </p>
          </div>

          {/* Book Now Button */}
          <div className="mt-8">
            <form onSubmit={handleBooking}>
              <label htmlFor="dropDate">Drop Date</label>
              <input
                value={dropDate}
                onChange={(e) => setDropDate(e.target.value)}
                type="date"
                className="border border-green-200 p-4 rounded-md w-full my-1"
              />
              <label htmlFor="dropDate">Pickup Date</label>
              <input
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                type="date"
                className="border border-green-200 p-4 rounded-md w-full my-1"
              />
              <button
                className={
                  car.isBooked
                    ? "w-full bg-gray-500 text-white py-3 px-6 rounded-lg hover:bg-gray-600 transition-colors text-lg font-semibold disabled:cursor-not-allowed"
                    : "w-full bg-emerald-500 text-white py-3 px-6 rounded-lg hover:bg-emerald-600 transition-colors text-lg font-semibold"
                }
                disabled={car.isBooked}
              >
                {car.isBooked ? "Not Available" : "Book Now"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Comments Section */}
      <div className="mt-8 bg-white rounded-2xl shadow-lg p-6 lg:p-8">
        <div className="flex items-center gap-2 mb-6">
          <FaRegComment className="w-5 h-5 text-emerald-500" />
          <h3 className="text-xl font-semibold">Reviews & Comments</h3>
        </div>

        <div className="mb-8">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your review..."
            className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            rows={3}
          />
          <button className="mt-2 bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-600 transition-colors">
            Post Review
          </button>
        </div>

        <div className="space-y-6">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="border-b border-gray-100 pb-6 last:border-0"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-semibold">{comment.user}</h4>
                  <div className="flex items-center gap-1 text-yellow-400">
                    {[...Array(comment.rating)].map((_, i) => (
                      <FaStar key={i} className="w-4 h-4" />
                    ))}
                  </div>
                </div>
                <span className="text-sm text-gray-500">{comment.date}</span>
              </div>
              <p className="text-gray-600">{comment.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default CarDetails;

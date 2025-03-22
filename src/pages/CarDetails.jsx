import React, { useState } from "react";
import {
  FaGasPump,
  FaUsers,
  FaTachometerAlt,
  FaCog,
  FaRegComment,
  FaStar,
} from "react-icons/fa";

const CarDetails = () => {
  let comments = [];
  const [comment, setComment] = useState("");

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Column - Image */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="relative">
            <img
              src="https://imgd.aeplcdn.com/664x374/n/cw/ec/139315/hector-plus-exterior-right-front-three-quarter-14.jpeg?isig=0&q=80"
              alt="MG Hector"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h2 className="text-3xl font-bold text-white">MG Hector</h2>
              <p className="text-gray-200 mt-1">by MG Motors</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
          <div className="flex justify-between items-start mb-6">
            <div className="text-2xl font-bold text-emerald-500">₹400/day</div>
            <span className="text-sm text-gray-500">
              Registration: abgds29837
            </span>
          </div>

          <div className="grid grid-cols-2 gap-6 py-6 border-y border-gray-100">
            <div className="flex items-center gap-3">
              <FaGasPump className="w-6 h-6 text-emerald-500" />
              <div>
                <p className="text-sm text-gray-500">Fuel Type</p>
                <p className="font-semibold">Diesel</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaUsers className="w-6 h-6 text-emerald-500" />
              <div>
                <p className="text-sm text-gray-500">Seats</p>
                <p className="font-semibold">5 Persons</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaTachometerAlt className="w-6 h-6 text-emerald-500" />
              <div>
                <p className="text-sm text-gray-500">Mileage</p>
                <p className="font-semibold">15.58 km/l</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaCog className="w-6 h-6 text-emerald-500" />
              <div>
                <p className="text-sm text-gray-500">Transmission</p>
                <p className="font-semibold">Manual</p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-gray-600 leading-relaxed">
              The MG Hector is a 5-seater SUV with a 14-inch touchscreen, ADAS,
              and connected car features. It comes in petrol and diesel engine
              options, and with manual and automatic transmission.
            </p>
          </div>

          {/* Book Now Button */}
          <div className="mt-8">
            <button className="w-full bg-emerald-500 text-white py-3 px-6 rounded-lg hover:bg-emerald-600 transition-colors text-lg font-semibold">
              Book Now
            </button>
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

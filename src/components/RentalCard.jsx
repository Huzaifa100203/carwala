import { Link } from "react-router-dom";
const RentalCard = ({ rental }) => {
  const { car } = rental;

  return (
    <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img src={car.image} alt="Luxury Car" class="w-full h-48 object-cover" />
      <div class="p-6">
        <h3 class="text-xl font-semibold mb-2">
          Total Bill : ${rental.totalBill}
        </h3>
        <p class="text-gray-600 mb-4">
          {rental.dropDate} to {rental.pickupDate}
        </p>
        <div class="flex justify-between items-center">
          <span class="text-emerald-500 font-bold">$500/day</span>
          <Link
            to={`/car/${car._id}`}
            class="bg-emerald-500 text-white px-4 py-2 rounded-full hover:bg-emerald-800 transition-colors"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RentalCard;

import Image from "next/image";
import Link from "next/link";
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMoneyBill,
  FaMapMarker,
} from "react-icons/fa";

const PropertyCard = ({ property }) => {
  const imageUrl = `/properties/${property.images[0]}`;

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 overflow-hidden">
      <div className="relative">
        <Image
          src={imageUrl}
          width={400}
          height={250}
          alt={property.name}
          className="w-full h-[280px] object-cover transition-transform duration-300 hover:scale-105"
        />
        <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-blue-600 font-semibold shadow-md">
          {property.rates.monthly
            ? `$${property.rates.monthly.toLocaleString()}/mo`
            : property.rates.weekly
            ? `$${property.rates.weekly.toLocaleString()}/wk`
            : "Contact for pricing"}
        </span>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs rounded-full mb-2">
            {property.type}
          </span>
          <h3 className="text-xl font-bold text-white">{property.name}</h3>
        </div>
      </div>

      <div className="p-6">
        {/* Property Features */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 bg-blue-50 rounded-full">
              <FaBed className="text-blue-500 text-xl" />
            </div>
            <p className="text-gray-600">
              {property.beds} <span className="text-sm">Beds</span>
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 bg-blue-50 rounded-full">
              <FaBath className="text-blue-500 text-xl" />
            </div>
            <p className="text-gray-600">
              {property.baths} <span className="text-sm">Baths</span>
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 bg-blue-50 rounded-full">
              <FaRulerCombined className="text-blue-500 text-xl" />
            </div>
            <p className="text-gray-600">
              {property.square_feet} <span className="text-sm">sqft</span>
            </p>
          </div>
        </div>

        {/* Rates */}
        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl mb-6">
          <div className="text-center">
            <p className="text-gray-500 text-sm mb-1">Weekly</p>
            <p className="text-blue-600 font-semibold">
              ${property.rates.weekly}
            </p>
          </div>
          <div className="h-8 w-[1px] bg-gray-300"></div>
          <div className="text-center">
            <p className="text-gray-500 text-sm mb-1">Monthly</p>
            <p className="text-blue-600 font-semibold">
              {property.rates.monthly ? "$" + property.rates.monthly : "N/A"}
            </p>
          </div>
        </div>

        {/* Location and CTA */}
        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-600">
            <FaMapMarker className="text-orange-600 mr-2" />
            <span>
              {property.location.city}, {property.location.state}
            </span>
          </div>
          <Link
            href={`/properties/${property._id}`}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

import {
  FaTimes,
  FaBed,
  FaBath,
  FaRulerCombined,
  FaCheck,
  FaMapMarker,
} from "react-icons/fa";

const PropertyDetails = ({ property }) => {
  return (
    <main className="bg-slate-900 p-4 md:p-6 rounded-xl">
      <div className="bg-slate-800 p-8 rounded-xl shadow-lg text-center md:text-left">
        <div className="inline-block px-4 py-2 bg-slate-700 text-emerald-400 rounded-full mb-4">
          {property.type}
        </div>
        <h1 className="text-3xl font-bold mb-4 text-white">{property.name}</h1>
        <div className="text-slate-300 mb-4 flex align-middle justify-center md:justify-start">
          <FaMapMarker className="text-emerald-400 mt-1 mr-2" />
          <p className="text-emerald-400">
            {property.location.street} {property.location.city}{" "}
            {property.location.zipcode}
          </p>
        </div>

        <h3 className="text-lg font-bold my-6 bg-emerald-500 text-white p-3 rounded-lg">
          Rates & Options
        </h3>
        <div className="flex flex-col md:flex-row justify-around">
          <div className="flex items-center justify-center mb-4 border-b border-slate-700 md:border-b-0 pb-4 md:pb-0">
            <div className="text-slate-300 mr-2 font-bold">Nightly</div>
            <div className="text-2xl font-bold text-emerald-400">
              {property.rates.nightly ? (
                `$${property.rates.nightly.toLocaleString()}`
              ) : (
                <FaTimes className="text-red-500" />
              )}
            </div>
          </div>
          <div className="flex items-center justify-center mb-4 border-b border-slate-700 md:border-b-0 pb-4 md:pb-0">
            <div className="text-slate-300 mr-2 font-bold">Weekly</div>
            <div className="text-2xl font-bold text-emerald-400">
              {property.rates.weekly ? (
                `$${property.rates.weekly.toLocaleString()}`
              ) : (
                <FaTimes className="text-red-500" />
              )}
            </div>
          </div>
          <div className="flex items-center justify-center mb-4 pb-4 md:pb-0">
            <div className="text-slate-300 mr-2 font-bold">Monthly</div>
            <div className="text-2xl font-bold text-emerald-400">
              {property.rates.monthly ? (
                `$${property.rates.monthly.toLocaleString()}`
              ) : (
                <FaTimes className="text-red-500" />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-800 p-8 rounded-xl shadow-lg mt-6">
        <h3 className="text-lg font-bold mb-6 text-white">
          Description & Details
        </h3>
        <div className="flex justify-center gap-4 text-emerald-400 mb-6 text-xl space-x-9">
          <div className="flex flex-col items-center">
            <div className="bg-slate-700 p-3 rounded-lg mb-2">
              <FaBed className="text-2xl" />
            </div>
            <p className="text-slate-300">
              {property.beds} <span className="hidden sm:inline">Beds</span>
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-slate-700 p-3 rounded-lg mb-2">
              <FaBath className="text-2xl" />
            </div>
            <p className="text-slate-300">
              {property.baths} <span className="hidden sm:inline">Baths</span>
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-slate-700 p-3 rounded-lg mb-2">
              <FaRulerCombined className="text-2xl" />
            </div>
            <p className="text-slate-300">
              {property.square_feet}{" "}
              <span className="hidden sm:inline">sqft</span>
            </p>
          </div>
        </div>
        <p className="text-slate-300 mb-4 leading-relaxed">
          {property.description}
        </p>
      </div>

      <div className="bg-slate-800 p-8 rounded-xl shadow-lg mt-6">
        <h3 className="text-lg font-bold mb-6 text-white">Amenities</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 list-none">
          {property.amenities.map((amenity, index) => (
            <li key={index} className="flex items-center text-slate-300">
              <span className="bg-emerald-500/10 p-2 rounded-lg mr-3">
                <FaCheck className="text-emerald-400" />
              </span>
              {amenity}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-slate-800 p-8 rounded-xl shadow-lg mt-6">
        <h3 className="text-lg font-bold mb-6 text-white">Location</h3>
        <div id="map" className="rounded-lg overflow-hidden"></div>
      </div>
    </main>
  );
};

export default PropertyDetails;

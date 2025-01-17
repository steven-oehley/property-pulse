import addProperty from "@/app/actions/addProperty";

const PropertyAddForm = () => {
  return (
    <form
      action={addProperty}
      className="max-w-4xl mx-auto bg-slate-900 p-6 rounded-xl shadow-xl"
    >
      <h2 className="text-3xl text-center font-bold mb-8 text-white">
        Add Property
        <span className="block text-emerald-400 text-lg mt-2 font-normal">
          Fill in the details below
        </span>
      </h2>

      {/* Property Basics */}
      <div className="space-y-6 mb-8">
        <div>
          <label
            htmlFor="type"
            className="block text-slate-200 font-medium mb-2"
          >
            Property Type
          </label>
          <select
            id="type"
            name="type"
            className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            required
          >
            <option value="Apartment">Apartment</option>
            <option value="Condo">Condo</option>
            <option value="House">House</option>
            <option value="CabinOrCottage">Cabin or Cottage</option>
            <option value="Room">Room</option>
            <option value="Studio">Studio</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-slate-200 font-medium mb-2">
            Listing Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            placeholder="eg. Beautiful Apartment In Miami"
            required
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-slate-200 font-medium mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            rows="4"
            placeholder="Add an optional description of your property"
          ></textarea>
        </div>
      </div>

      {/* Location Section */}
      <div className="bg-slate-800/50 p-6 rounded-xl mb-8">
        <h3 className="text-emerald-400 font-semibold mb-4">
          Location Details
        </h3>
        <div className="grid gap-4">
          <input
            type="text"
            id="street"
            name="location.street"
            className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            placeholder="Street"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              id="city"
              name="location.city"
              className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              placeholder="City"
              required
            />
            <input
              type="text"
              id="state"
              name="location.state"
              className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              placeholder="State"
              required
            />
            <input
              type="text"
              id="zipcode"
              name="location.zipcode"
              className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              placeholder="Zipcode"
            />
          </div>
        </div>
      </div>

      {/* Property Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div>
          <label
            htmlFor="beds"
            className="block text-slate-200 font-medium mb-2"
          >
            Beds
          </label>
          <input
            type="number"
            id="beds"
            name="beds"
            className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            required
          />
        </div>
        <div>
          <label
            htmlFor="baths"
            className="block text-slate-200 font-medium mb-2"
          >
            Baths
          </label>
          <input
            type="number"
            id="baths"
            name="baths"
            className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            required
          />
        </div>
        <div>
          <label
            htmlFor="square_feet"
            className="block text-slate-200 font-medium mb-2"
          >
            Square Feet
          </label>
          <input
            type="number"
            id="square_feet"
            name="square_feet"
            className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            required
          />
        </div>
      </div>

      {/* Amenities */}
      <div className="mb-8">
        <h3 className="text-emerald-400 font-semibold mb-4">Amenities</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            "Wifi",
            "Full kitchen",
            "Washer & Dryer",
            "Free Parking",
            "Swimming Pool",
            "Hot Tub",
            "24/7 Security",
            "Wheelchair Accessible",
            "Elevator Access",
            "Dishwasher",
            "Gym/Fitness Center",
            "Air Conditioning",
            "Balcony/Patio",
            "Smart TV",
            "Coffee Maker",
          ].map((amenity) => (
            <div key={amenity} className="flex items-center space-x-3">
              <input
                type="checkbox"
                id={`amenity_${amenity.toLowerCase().replace(/\s+/g, "_")}`}
                name="amenities"
                value={amenity}
                className="w-4 h-4 text-emerald-500 bg-slate-800 border-slate-700 rounded focus:ring-emerald-500 focus:ring-2"
              />
              <label
                htmlFor={`amenity_${amenity
                  .toLowerCase()
                  .replace(/\s+/g, "_")}`}
                className="text-slate-200"
              >
                {amenity}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Rates */}
      <div className="bg-slate-800/50 p-6 rounded-xl mb-8">
        <h3 className="text-emerald-400 font-semibold mb-4">Rates</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label
              htmlFor="weekly_rate"
              className="block text-slate-200 font-medium mb-2"
            >
              Weekly Rate
            </label>
            <input
              type="number"
              id="weekly_rate"
              name="rates.weekly"
              className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              placeholder="$"
            />
          </div>
          <div>
            <label
              htmlFor="monthly_rate"
              className="block text-slate-200 font-medium mb-2"
            >
              Monthly Rate
            </label>
            <input
              type="number"
              id="monthly_rate"
              name="rates.monthly"
              className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              placeholder="$"
            />
          </div>
          <div>
            <label
              htmlFor="nightly_rate"
              className="block text-slate-200 font-medium mb-2"
            >
              Nightly Rate
            </label>
            <input
              type="number"
              id="nightly_rate"
              name="rates.nightly"
              className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              placeholder="$"
            />
          </div>
        </div>
      </div>

      {/* Seller Information */}
      <div className="space-y-6 mb-8">
        <h3 className="text-emerald-400 font-semibold">Seller Information</h3>
        <div>
          <label
            htmlFor="seller_name"
            className="block text-slate-200 font-medium mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="seller_name"
            name="seller_info.name"
            className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="seller_email"
            className="block text-slate-200 font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="seller_email"
            name="seller_info.email"
            className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            placeholder="your@email.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="seller_phone"
            className="block text-slate-200 font-medium mb-2"
          >
            Phone
          </label>
          <input
            type="tel"
            id="seller_phone"
            name="seller_info.phone"
            className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            placeholder="Your phone number"
          />
        </div>
      </div>

      {/* Images */}
      <div className="mb-8">
        <label
          htmlFor="images"
          className="block text-slate-200 font-medium mb-2"
        >
          Property Images
        </label>
        <div className="bg-slate-800 border-2 border-dashed border-slate-700 rounded-lg p-8 text-center">
          <input
            type="file"
            id="images"
            name="images"
            className="hidden"
            accept="image/*"
            multiple
            required
          />
          <label
            htmlFor="images"
            className="cursor-pointer flex flex-col items-center"
          >
            <svg
              className="w-12 h-12 text-slate-400 mb-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
            <span className="text-slate-300">
              Click to upload up to 4 images
            </span>
            <span className="text-slate-400 text-sm mt-2">
              PNG, JPG, GIF up to 10MB each
            </span>
          </label>
        </div>
      </div>

      {/* Submit Button */}
      <button
        className="w-full bg-emerald-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-150 shadow-lg shadow-emerald-500/20"
        type="submit"
      >
        Add Property
      </button>
    </form>
  );
};

export default PropertyAddForm;

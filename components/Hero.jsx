const Hero = () => {
  return (
    <section className="bg-slate-900 py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-slate-900"></div>
      <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-emerald-500/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center relative">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            Find The Perfect Rental
            <span className="block text-emerald-400 mt-2">
              For Your Lifestyle
            </span>
          </h1>
          <p className="my-6 text-xl text-slate-300 max-w-2xl mx-auto">
            Discover the perfect property that suits your needs, with our
            comprehensive selection of premium rental properties.
          </p>
        </div>

        {/* Search Form */}
        <form className="mt-8 mx-auto max-w-2xl w-full flex flex-col md:flex-row items-center gap-4">
          <div className="w-full md:w-3/5">
            <label htmlFor="location" className="sr-only">
              Location
            </label>
            <div className="relative">
              <input
                type="text"
                id="location"
                placeholder="Enter Location (City, State, Zip, etc)"
                className="w-full px-4 py-3 rounded-lg bg-slate-800 text-slate-100 placeholder-slate-400 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-150"
              />
            </div>
          </div>

          <div className="w-full md:w-2/5">
            <label htmlFor="property-type" className="sr-only">
              Property Type
            </label>
            <select
              id="property-type"
              className="w-full px-4 py-3 rounded-lg bg-slate-800 text-slate-100 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-150"
            >
              <option value="All">All Properties</option>
              <option value="Apartment">Apartment</option>
              <option value="Studio">Studio</option>
              <option value="Condo">Condo</option>
              <option value="House">House</option>
              <option value="Cabin Or Cottage">Cabin or Cottage</option>
              <option value="Loft">Loft</option>
              <option value="Room">Room</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <button
            type="submit"
            className="md:ml-2 w-full md:w-auto px-8 py-3 rounded-lg bg-emerald-500 text-white font-medium hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition duration-150 shadow-lg shadow-emerald-500/20"
          >
            Search
          </button>
        </form>

        {/* Optional: Property Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8 text-center text-slate-300">
          <div>
            <div className="text-3xl font-bold text-emerald-400">2,000+</div>
            <div className="mt-1 text-sm">Properties Listed</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-emerald-400">500+</div>
            <div className="mt-1 text-sm">Happy Tenants</div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="text-3xl font-bold text-emerald-400">50+</div>
            <div className="mt-1 text-sm">Cities Covered</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

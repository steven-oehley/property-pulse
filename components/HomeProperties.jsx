import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import connectedDB from "@/config/database";
import Property from "@/models/Property";
import PropertyCard from "./PropertyCard";

const HomeProperties = async () => {
  await connectedDB();

  const recentProperties = await Property.find({})
    .sort({ createdAt: -1 })
    .limit(3)
    .lean();

  return (
    <section className="bg-slate-900 py-16">
      <div className="container-xl lg:container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Recent Properties
            <span className="block text-emerald-400 text-2xl md:text-3xl mt-1">
              Find Your Perfect Home
            </span>
          </h2>
          <p className="text-slate-300 text-center max-w-2xl text-lg">
            Explore our latest listings, featuring premium properties in
            sought-after locations
          </p>
        </div>

        {recentProperties.length === 0 ? (
          <div className="text-center bg-slate-800 rounded-lg shadow-xl p-8">
            <h3 className="text-xl font-bold text-white mb-2">
              No Properties Found
            </h3>
            <p className="text-slate-300">
              Please check back later for new listings.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {recentProperties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        )}

        <div className="text-center">
          <Link
            href="/properties"
            className="inline-flex items-center gap-3 bg-emerald-500 text-white rounded-lg px-8 py-4 hover:bg-emerald-600 transition-all duration-200 font-semibold shadow-lg shadow-emerald-500/20 hover:-translate-y-0.5"
          >
            View All Properties
            <FaArrowRight className="text-sm" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeProperties;

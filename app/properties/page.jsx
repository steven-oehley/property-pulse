import connectedDB from "@/config/database";
import Property from "@/models/Property";
import PropertyCard from "@/components/PropertyCard";

const PropertiesPage = async () => {
  await connectedDB();
  const properties = await Property.find({}).lean();

  return (
    <section className="bg-slate-900 min-h-screen">
      <div className="container-xl lg:container mx-auto px-4 py-12">
        {properties.length === 0 ? (
          <div className="text-center bg-slate-800/50 rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-white mb-2">
              No Properties Found
            </h3>
            <p className="text-slate-300">
              Please check back later for new listings.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertiesPage;

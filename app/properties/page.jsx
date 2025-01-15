import connectedDB from "@/config/database";
import Property from "@/models/Property";

import PropertyCard from "@/components/PropertyCard";

const PropertiesPage = async () => {
  await connectedDB();
  const properties = await Property.find({}).lean();

  return (
    <section className="px-4 py-6 bg-slate-600">
      <div className="container-xl lg:container mx-auto px-4 py-6">
        {properties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        ) : (
          <p> No properties found.</p>
        )}
      </div>
    </section>
  );
};
export default PropertiesPage;

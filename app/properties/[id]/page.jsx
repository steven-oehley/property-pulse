import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import PropertyDetails from "@/components/PropertyDetails";
import connectedDB from "@/config/database";
import Property from "@/models/Property";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const PropertyPage = async ({ params }) => {
  const { id } = params;
  await connectedDB();
  const property = await Property.findById(id).lean();

  return (
    <div className="bg-slate-900 min-h-screen">
      <div className="relative">
        {/* Header Image with Overlay */}
        <div className="relative h-[400px] w-full">
          <PropertyHeaderImage image={property.images[0]} />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900"></div>
        </div>

        {/* Back Button */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative -mt-16 z-10">
            <Link
              href="/properties"
              className="inline-flex items-center px-4 py-2 bg-slate-800 text-emerald-400 rounded-lg hover:bg-slate-700 transition duration-150 group"
            >
              <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-150" />
              Back to Properties
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-8">
          {/* Property Details */}
          <PropertyDetails property={property} />

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <div className="bg-slate-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold text-white mb-4">
                Contact Property Manager
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg bg-slate-700 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg bg-slate-700 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 rounded-lg bg-slate-700 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Your phone"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">
                    Message
                  </label>
                  <textarea
                    className="w-full px-4 py-2 rounded-lg bg-slate-700 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    rows="4"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition duration-150 font-medium shadow-lg shadow-emerald-500/20"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Share Section */}
            <div className="bg-slate-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold text-white mb-4">
                Share Property
              </h3>
              {/* Add your ShareButtons component here if available */}
              <div className="flex space-x-4">
                <button className="flex-1 bg-slate-700 text-slate-300 px-4 py-2 rounded-lg hover:bg-slate-600 transition duration-150">
                  Copy Link
                </button>
                <button className="flex-1 bg-slate-700 text-slate-300 px-4 py-2 rounded-lg hover:bg-slate-600 transition duration-150">
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyPage;

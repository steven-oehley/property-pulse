import InfoBox from "./InfoBox";

const InfoBoxes = () => {
  return (
    <section className="py-12 bg-slate-900">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
          <InfoBox
            heading="For Renters"
            icon="user"
            bgCol="bg-slate-600/50"
            textCol="text-slate-100"
            btnInfo={{
              link: "/properties",
              bgCol: "bg-emerald-500 hover:bg-emerald-600",
              text: "Find Properties",
            }}
          >
            Find your dream rental property. Bookmark properties and contact
            owners directly. Start your journey to the perfect home today.
          </InfoBox>
          <InfoBox
            heading="For Property Owners"
            icon="building"
            bgCol="bg-emerald-500/90"
            textCol="text-slate-900"
            btnInfo={{
              link: "/properties",
              bgCol: "bg-slate-900 hover:bg-slate-800",
              text: "List Your Property",
            }}
          >
            List your properties for rent. Manage your portfolio efficiently and
            get detailed analytics on your listings' performance.
          </InfoBox>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;

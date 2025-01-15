import InfoBox from "./InfoBox";

const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox heading="For Renters">
            Find your dream rental property. Bookmark properties and contact
            owners.
          </InfoBox>
          <InfoBox
            heading="For Property Owners"
            btnText="Browse Properties"
            bgCol="bg-blue-100"
            btnInfo={{
              link: "/properties",
              bgCol: "bg-blue-500",
              text: "Browse Properties",
            }}
          >
            List your properties for rent. Manage your properties and view
            analytics.
          </InfoBox>
        </div>
      </div>
    </section>
  );
};
export default InfoBoxes;

import Image from "next/image";

const PropertyHeaderImage = ({ image }) => {
  const imagePath = `/properties/${image}`;

  return (
    <section>
      <div className="container-xl m-auto">
        <div className="grid grid-cols-1">
          <Image
            src={imagePath}
            alt="Property Image"
            width={0}
            height={0}
            sizes="100vw"
            className="object-cover w-full h-[400px]"
          />
        </div>
      </div>
    </section>
  );
};
export default PropertyHeaderImage;

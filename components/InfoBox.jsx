import Link from "next/link";

const InfoBox = ({
  heading,
  children,
  bgCol = "bg-gray-100",
  textCol = "text-gray-800",
  btnInfo = {
    link: "/properties",
    bgCol: "bg-black",
    text: "Browse Properties",
  },
}) => {
  return (
    <div className={`${bgCol} p-6 rounded-lg shadow-md`}>
      <h2 className={`${textCol} text-2xl font-bold`}>{heading}</h2>
      <p className={`${textCol} mt-2 mb-4`}>{children}</p>
      <Link
        href={btnInfo.link}
        className={`${btnInfo.bgCol} inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700`}
      >
        {btnInfo.text}
      </Link>
    </div>
  );
};
export default InfoBox;

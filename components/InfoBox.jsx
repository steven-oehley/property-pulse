import Link from "next/link";
import { FaBuilding, FaUser } from "react-icons/fa";

const InfoBox = ({
  heading,
  children,
  icon = "user",
  bgCol = "bg-slate-800",
  textCol = "text-slate-100",
  btnInfo = {
    link: "/properties",
    bgCol: "bg-emerald-500 hover:bg-emerald-600",
    text: "Browse Properties",
  },
}) => {
  const IconComponent = icon === "user" ? FaUser : FaBuilding;

  return (
    <div
      className={`${bgCol} p-8 rounded-xl shadow-lg transform transition duration-150 hover:scale-[1.02] relative overflow-hidden group`}
    >
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center space-x-3 mb-4">
          <div
            className={`p-2 rounded-lg ${
              bgCol === "bg-slate-800" ? "bg-slate-700" : "bg-emerald-400"
            }`}
          >
            <IconComponent className={`w-6 h-6 ${textCol}`} />
          </div>
          <h2 className={`${textCol} text-2xl font-bold`}>{heading}</h2>
        </div>

        <p
          className={`${textCol} mt-2 mb-6 opacity-90 text-lg leading-relaxed`}
        >
          {children}
        </p>

        <Link
          href={btnInfo.link}
          className={`${
            btnInfo.bgCol
          } inline-block text-white rounded-lg px-6 py-3 font-medium transition duration-150 shadow-lg ${
            bgCol === "bg-slate-800"
              ? "shadow-emerald-500/20"
              : "shadow-slate-900/20"
          } transform hover:-translate-y-0.5`}
        >
          {btnInfo.text}
        </Link>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition duration-150" />
    </div>
  );
};

export default InfoBox;

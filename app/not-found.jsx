import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  return (
    <section className="py-52 mt-4 min-h-3/4 flex items-center justify-center px-6">
      <div className="text-center">
        <div className="flex items-center justify-center mb-8">
          <FaExclamationTriangle className="text-6xl text-yellow-500" />
        </div>
        <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center bg-blue-600 text-white rounded-lg px-6 py-3 hover:bg-blue-700 transition-all duration-200 font-semibold"
        >
          Return Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;

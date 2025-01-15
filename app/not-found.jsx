import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  return (
    <section className="min-h-screen bg-slate-900 flex items-center justify-center px-6">
      <div className="text-center">
        <div className="flex items-center justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping"></div>
            <div className="relative bg-slate-800 p-6 rounded-full">
              <FaExclamationTriangle className="text-6xl text-emerald-400" />
            </div>
          </div>
        </div>

        <h1 className="text-7xl font-bold text-emerald-400 mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-xl text-slate-300 mb-8 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center bg-emerald-500 text-white rounded-lg px-8 py-4 hover:bg-emerald-600 transition-all duration-200 font-semibold shadow-lg shadow-emerald-500/20 hover:-translate-y-0.5"
        >
          Return Home
        </Link>

        {/* Optional: Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-emerald-500/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-emerald-500/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;

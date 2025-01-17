"use client";

import { useEffect } from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import Link from "next/link";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-slate-800 rounded-xl shadow-xl p-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 mb-6">
          <FaExclamationTriangle className="w-8 h-8 text-red-500" />
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Something Went Wrong
        </h1>

        <p className="text-slate-300 mb-8">
          {error.message ? error.message : "An unexpected error occurred"}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition-colors duration-200 shadow-lg shadow-emerald-500/20"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="px-6 py-3 bg-slate-700 text-emerald-400 rounded-lg font-semibold hover:bg-slate-600 transition-colors duration-200"
          >
            Go Back Home
          </Link>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-700">
          <p className="text-slate-400 text-sm">
            If this problem persists, please contact support or try again later.
          </p>
        </div>
      </div>
    </div>
  );
}

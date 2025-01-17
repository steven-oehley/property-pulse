"use client";

import { useEffect } from "react";
import { FaExclamationTriangle } from "react-icons/fa";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body className="bg-slate-900">
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-2xl w-full bg-slate-800 rounded-xl shadow-xl p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 mb-6">
              <FaExclamationTriangle className="w-8 h-8 text-red-500" />
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Something Went Wrong: {error.message}
            </h1>

            <p className="text-slate-300 mb-8">
              A critical error occurred. We need to restart the application.
            </p>

            <button
              onClick={reset}
              className="px-6 py-3 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition-colors duration-200 shadow-lg shadow-emerald-500/20"
            >
              Try Again
            </button>

            <div className="mt-8 pt-6 border-t border-slate-700">
              <p className="text-slate-400 text-sm">
                If this problem persists, please contact support or try again
                later.
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

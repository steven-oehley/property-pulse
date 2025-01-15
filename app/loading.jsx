const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-900">
      <div className="flex flex-col items-center">
        {/* Spinner */}
        <div className="relative">
          <div className="w-16 h-16 rounded-full border-4 border-slate-700"></div>
          <div className="w-16 h-16 rounded-full border-4 border-emerald-500 border-t-transparent animate-spin absolute top-0"></div>
        </div>
        {/* Loading text */}
        <p className="mt-6 text-lg text-slate-300 font-medium">
          Loading<span className="animate-pulse">...</span>
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;

const LoaderGeneral = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative w-16 h-16">
        <div className="absolute w-full h-full border-2 border-gray-200 rounded-full"></div>
        <div className="absolute w-full h-full border-2 border-blue-500 rounded-full border-t-transparent border-b-transparent animate-spin"></div>
      </div>
    </div>
  );
};
export default LoaderGeneral;

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex items-center justify-center gap-2 mt-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1  text-white rounded disabled:opacity-50  text-xl"
      >
        ⬅️
      </button>

      <span className="px-4 py-1 text-gray-800 dark:text-white text-md">
        Page{" "}
        <span className="font-bold text-red-950 dark:text-red-300">
          {currentPage}
        </span>{" "}
        frome{" "}
        <span className="font-bold text-red-950 dark:text-red-300">
          {totalPages}
        </span>
      </span>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1  text-white rounded disabled:opacity-50   text-xl"
      >
        ➡️
      </button>
    </div>
  );
};

export default Pagination;

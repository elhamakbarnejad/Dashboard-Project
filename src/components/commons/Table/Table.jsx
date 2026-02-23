const Table = ({ headers, data, renderRow }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg text-sm md:text-base shadow-black primary-border">
        <thead className="bg-gray-400 dark:bg-gray-700 primary-border">
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                className={`p-3 text-white text-md font-medium  dark:text-gray-300 text-center justify-items-center primary-border
        ${header === "Image" || header === "Category" || header === "Stock" ? "hidden md:table-cell" : ""}`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{data.map((item) => renderRow(item))}</tbody>
      </table>
    </div>
  );
};

export default Table;

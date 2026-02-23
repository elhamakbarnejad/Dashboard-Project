import { useState, useContext } from "react";
import UsersConrext from "../../conexts/Users/Users";
import Pagination from "../../components/commons/Pagination/Pagination";
import Table from "../../components/commons/Table/Table";
import TableU from "../../components/commons/Table/TableU";

const UsersTable = () => {
  const { allUsers } = useContext(UsersConrext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  if (!allUsers?.users) return null;

  const headers = ["Image", "FirstName", "Age", "Eye Color", "City", "No."];

  const users = allUsers.users;
  const totalPages = Math.ceil(users.length / itemsPerPage);

  const currentUsers = users.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const renderRow = (user) => (
    <tr
      key={user.id}
      className="border-b even:bg-gray-100 dark:hover:bg-gray-500 dark:text-white dark:even:text-black text-center *:text-sm *:primary-border *:justify-items-center *:text-md"
    >
      <td className="md:text-md  px-1 py-2 hidden md:table-cell">
        <img
          src={user.image}
          alt={user.firstName}
          className="w-10 h-10 object-cover rounded"
        />
      </td>
      <td className="w-75 md:text-md text:xs  px-2 py-2">{user.firstName}</td>
      <td className="md:text-md  px-1 py-2 hidden md:table-cell">{user.age}</td>
      <td className="w-20 md:text-md  px-1 py-2">{user.eyeColor}</td>
      <td className="md:text-md  px-1 py-2 hidden md:table-cell">
        {user.city}
      </td>
      <td className="md:text-md  px-1 py-2">{user.id}</td>
    </tr>
  );

  return (
    <div className="p-4">
      <TableU headers={headers} data={currentUsers} renderRow={renderRow} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default UsersTable;

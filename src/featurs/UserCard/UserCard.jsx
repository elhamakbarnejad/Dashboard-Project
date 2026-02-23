const UserCard = ({ user }) => {
  return (
    <div className="rounded-lg bg-white dark:bg-gray-900 h-100 w-70">
      <div className="w-full flex-center">
        <img src={user.image} alt={user.firstName} className="object-cover" />
      </div>
      <div className=" px-4 gap-1 flex items-center justify-between flex-col w-full *:w-full">
        <h1 className="flex-center text-center font-bold text-md text-gray-800 my-2 bg-gray-100 dark:bg-gray-800 p-1 h-15 rounded-sm dark:text-white">
          {user.firstName}
        </h1>
        <div className="flex items-center justify-between">
          <div className="flex text-yellow-400 text-xl">
            {"★".repeat(Math.floor(user.rating))}
            {"☆".repeat(5 - Math.floor(user.rating))}
          </div>
          <p className="text-gray-600 text-md font-bold">{user.rating}</p>
        </div>
        <div className="flex items-center justify-between gap-2">
          <p className="text-gray-800 font-bold dark:text-white">
            MaidenName:{" "}
            <span className="text-gray-600 font-bold dark:text-white">
              {user.maidenName}
            </span>{" "}
          </p>
          <p className="text-gray-800 font-bold dark:text-white">
            Age:{" "}
            <span className="text-gray-600 font-bold dark:text-white">
              {user.age}
            </span>{" "}
          </p>
        </div>
        <p className="text-gray-800 font-bold dark:text-white">
          BirthDate:{" "}
          <span className="text-red-500 font-bold dark:text-white">
            {user.birthDate}
          </span>{" "}
        </p>
        <p className="text-gray-800 font-bold dark:text-white">
          University:{" "}
          <span className="text-red-500 font-bold dark:text-white">
            {user.university}%
          </span>{" "}
        </p>
        <p className="text-gray-800 font-bold text-xs dark:text-white">
          Hair Color:{" "}
          <span className="text-gray-500 font-bold text-xs dark:text-white">
            {user.hair.color}
          </span>{" "}
        </p>
        <p className="text-gray-800 font-bold text-xs dark:text-white">
          Hair Type:{" "}
          <span className="text-gray-500 font-bold text-xs dark:text-white">
            {user.hair.type}
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default UserCard;

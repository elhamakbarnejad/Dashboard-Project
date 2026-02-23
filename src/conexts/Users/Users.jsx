import { createContext, useEffect, useState } from "react";

const UsersConrext = createContext();

export const UsersProvider = ({ children }) => {
  const [allUsers, setAllUsers] = useState(null);
  const [error, setError] = useState(null);
  const [loader1, setloader1] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchUser = async () => {
      setloader1(true);
      try {
        const res = await fetch("https://dummyjson.com/users", {
          signal: controller.signal,
        });
        if (res.status === 200) {
          const data = await res.json();
          setTimeout(() => {
            setAllUsers(data);

            setloader1(false);
          }, 2000);
        } else {
          const errorData = await res.json(); // این خط رو اضافه کن

          throw new Error(errorData.message || "Fetching data ...");
        }
      } catch (error) {
        console.error("Fetch error:", error);
        setloader1(false);
      }
    };
    fetchUser();

    return () => controller.abort();
  }, []);
  return (
    <UsersConrext.Provider value={{ allUsers, error, loader1 }}>
      {children}
    </UsersConrext.Provider>
  );
};

export default UsersConrext;

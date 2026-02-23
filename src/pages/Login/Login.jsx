import { useState } from "react";
import { useNavigate } from "react-router";
import LoaderSpacial from "../../components/commons/Loader/LoaderSpacial";

const Login = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    setLoader(true);
    setError("");

    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data));
        localStorage.setItem("refreshToken", data.refreshToken);
        setUsername("");
        setPassword("");
        navigate("/home", { replace: true });
      } else {
        throw new Error(data.message || "Login failed");
      }
    } catch (error) {
      setError("Login error:" + error.message);
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="flex-center min-h-screen bg-zinc-100 dark:bg-gray-950">
      <div className="flex items-stretch justify-center flex-col md:flex-row mx-auto bg-zinc-50 dark:bg-gray-800">
        <div className="flex-center flex-col primary-border w-80 gap-10 px-5 py-10  rounded-sm border-r-green-100">
          <p className="primary-p-text text-center shadow-2xl w-full dark:text-white">
            Sign in to access different sections of the dashboard.
          </p>{" "}
          <LoaderSpacial />
        </div>
        <form
          onSubmit={loginHandler}
          className="flex-center flex-col primary-border w-80 gap-2 px-5 py-10  rounded-sm border-l-green-100"
        >
          <h1 className="mb-10 font-bold text-lg text-zinc-700 dark:text-white">
            Sign in to your account
          </h1>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username..."
            className="w-full mx-2 p-2 primary-border h-8 rounded-sm outline-none placeholder:text-sm dark:text-white"
            autoFocus
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password..."
            className="w-full mx-2 p-2 primary-border h-8 rounded-sm outline-none placeholder:text-sm dark:text-white"
          />
          <button
            type="submit"
            className="flex-center primary-border w-full bg-[#04AA6D] rounded-sm mt-5 text-sm py-1 px-5 hover:opacity-90 primary-transition text-bold text-white"
          >
            Sign In
          </button>{" "}
          <p className="primary-p-text mt-5 dark:text-white">
            Don't have an account? Sign Up
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

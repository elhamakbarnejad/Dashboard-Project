import { createBrowserRouter } from "react-router";

import MainLayout from "./src/layouts/MainLayout/MainLayout";
import PublicLayout from "./src/layouts/PublicLayout/PublicLayout";
import AuthLayout from "./src/layouts/AuthLayout/AuthLayout";
import ProtectedRoute from "./src/components/ProtectedRoute/ProtectedRoute";

import Land from "./src/pages/Land/Land";
import Login from "./src/pages/Login/Login";
import Home from "./src/pages/Home/Home";
import Users from "./src/pages/Users/Users";
import Products from "./src/pages/Products/Products";

const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      {
        path: "/",
        element: <Land />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },
]);

export default router;

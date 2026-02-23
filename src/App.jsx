import { RouterProvider } from "react-router";
import router from "../routes";
import { ThemeProvider } from "./conexts/Theme/Theme";
import { UsersProvider } from "./conexts/Users/Users";
import { ProductsProvider } from "./conexts/Products/Products";
const App = () => {
  return (
    <ThemeProvider>
      <UsersProvider>
        <ProductsProvider>
          {" "}
          <RouterProvider router={router} />
        </ProductsProvider>{" "}
      </UsersProvider>
    </ThemeProvider>
  );
};

export default App;

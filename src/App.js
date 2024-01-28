import { useState } from "react";
import Navbar from "./components/navbar";
import { ProductsPage } from "./pages/products";
import Products from "./pages/products";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorMoj from "./pages/ErrorMoj";
import ProductDetail from "./pages/ProductDetail";

function App() {
  const router = createBrowserRouter([
    {
      element: (
        <div className="w-[100%] relative">
          <Navbar />
          <Outlet />
        </div>
      ),
      path: "/",
      //errorElement: <ErrorMoj />,
      children: [
        {
          element: <ErrorMoj />,
          path: "*",
        },
        {
          element: <ProductsPage />,
          path: "react14/products",
        },
        {
          element: <div>Home Page</div>,
          path: "react14/Home",
        },
        {
          element: <div></div>,
          path: "react14",
        },
        { element: <div>About</div>, path: "react14/about" },

        {
          element: (
            <div>
              <Outlet />
            </div>
          ),
          path: "/react14/products/:productId",
          children: [
            {
              element: <ProductDetail />,
              path: "/react14/products/:productId",
            },
            {
              element: <div>Error inside Products URL </div>,
              path: "*",
            },
          ],
        },

        ,
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

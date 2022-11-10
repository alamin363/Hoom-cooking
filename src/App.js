import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./component/Home/Home";
import Blog from "./component/Blog/Blog";
import Review from "./component/Review/Review";
import Services from "./component/Services/Services";
import Register from "./component/Register/Register";
import LogIn from "./component/SingIn/LogIn";
import ProductDetails from "./component/Product/ProductDetails";
import PrivetRouter from "./component/PrivetRouter/PrivetRouter";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch("https://cooking-backend.vercel.app/products"),
          element: <Home />,
        },
        {
          path: "/blog",
          loader: () => fetch("https://cooking-backend.vercel.app/blog"),
          element: <Blog />,
        },
        {
          path: "/review",
          element: (
            <PrivetRouter>
              <Review />
            </PrivetRouter>
          ),
        },
        { path: "/login", element: <LogIn /> },
        {
          path: "/services",
          element: <Services />,
        },
        { path: "/register", element: <Register /> },
        {
          path: "/products/:id",
          element: (
            <PrivetRouter>
              <ProductDetails />
            </PrivetRouter>
          ),
          loader: ({ params }) =>
            fetch(`https://cooking-backend.vercel.app/products/${params.id}`),
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './component/Home/Home';
import Blog from './component/Blog/Blog';
import Review from './component/Review/Review';
import Services from './component/Services/Services';
import Register from './component/Register/Register';
import LogIn from './component/SingIn/LogIn';
import ProductDetails from './component/Product/ProductDetails';



function App() {
  const router = createBrowserRouter([
    {path:'/', element:<Main></Main> , children:[
     {path:"/", loader:() => fetch('http://localhost:5000/products'), element:<Home />},
     {path:"/blog",loader: () => fetch('http://localhost:5000/blog'), element:<Blog />},
     {path:"/review", element:<Review />},
     {path:"/login", element:<LogIn /> },
     {path:"/services",loader: () => fetch('http://localhost:5000/products'), element:<Services />},
     {path:"/register", element:<Register /> },
     {path:"/products/:id", element:<ProductDetails /> , loader:({params}) => fetch(`http://localhost:5000/products/${params.id}`)}
  
    ]}
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './component/Home/Home';
import Blog from './component/Blog/Blog';
import Review from './component/Review/Review';
import Login from './component/Login/Login';
import Services from './component/Services/Services';
import Register from './component/Login/Register/Register';


function App() {
  const router = createBrowserRouter([
    {path:'/', element:<Main></Main> , children:[
     {path:"/", element:<Home />},
     {path:"/blog", element:<Blog />},
     {path:"/review", element:<Review />},
     {path:"/login", element:<Login />},
     {path:"/services", element:<Services />},
     {path:"/register", element:<Register />}
  
    ]}
  ])
  return (
   <RouterProvider router={router}></RouterProvider>
  );
}

export default App;

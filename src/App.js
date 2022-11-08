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




function App() {
  const router = createBrowserRouter([
    {path:'/', element:<Main></Main> , children:[
     {path:"/", element:<Home />},
     {path:"/blog", element:<Blog />},
     {path:"/review", element:<Review />},
     {path:"/login", element:<LogIn /> },
     {path:"/services", element:<Services />},
     {path:"/register", element:<Register /> }
  
    ]}
  ])
  return (
   <RouterProvider router={router}></RouterProvider>
  );
}

export default App;

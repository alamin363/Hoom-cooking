import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../component/Footer/Footer';
import Navber from '../component/Navber/Navber';

const Main = () => {
  return (
    <div>
     <Navber />
     <Outlet></Outlet>
     <Footer></Footer>
    </div>
  );
};

export default Main;
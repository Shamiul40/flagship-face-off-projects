import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";

const MainLayOut = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className='min-h-[calc(100vh-117px)] py-8'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default MainLayOut;

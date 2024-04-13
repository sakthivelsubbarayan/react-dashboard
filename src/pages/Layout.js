import React, { useState } from 'react';
import Header from '../components/Header';
import MainContent from './Dashboard';
import Sidebar from '../components/Slidebar';
import BasicDataTable from '../components/Table';
import { Outlet } from 'react-router-dom';

// Parent component
const Layout = () => {
  return (
    <div className={`dark scroll-smooth h-screen`}>
      <Header />
      <main className="h-[calc(100vh-120px)] w-full absolute top-14">
        <Sidebar />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
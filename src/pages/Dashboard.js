import React from 'react';
import ColumnChart from "../components/chart/Column";
import GaugeChart from "../components/chart/Gauge";
import LineChart from "../components/chart/Line";
import PieChart from "../components/chart/Pie";
import MapChart from "../components/chart/Map";
import users from '../constants/users';

const Dashboard = () => {
  return (   
    <section
      id="content"
      className="bg-grey-200 w-[100wh-60px] lg:w-[100wh-250px] ml-[60px] lg:ml-[240px] p-5 right-0 transition-all duration-500 ease-in-out"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-slate-50 p-5 m-2 rounded-md flex justify-between items-center shadow">
          <div>
            <h3 className="font-bold">Total Users</h3>
            <p className="text-gray-500">{users.length}</p>
          </div>
          <i className="fa-solid fa-users p-4 bg-gray-200 rounded-md"></i>
        </div>

        <div className="bg-slate-50 p-5 m-2 flex justify-between items-center shadow">
          <div>
            <h3 className="font-bold">Total Number of Male</h3>
            <p className="text-gray-500">{users.filter((user) => user.gender === 'male').length}</p>
          </div>
          <i className="fa-solid fa-users p-4 bg-green-200 rounded-md"></i>
        </div>

        <div className="bg-slate-50 p-5 m-2 flex justify-between items-center shadow">
          <div>
            <h3 className="font-bold">Total Number of Female</h3>
            <p className="text-gray-500">{users.filter((user) => user.gender === 'female').length}</p>
          </div>
          <i className="fa-solid fa-users p-4 bg-yellow-200 rounded-md"></i>
        </div>

        <div className="bg-slate-50 p-5 m-2 flex justify-between items-center shadow">
          <div>
            <h3 className="font-bold">Total Number of children</h3>
            <p className="text-gray-500">{users.filter((user) => user.age < 18).length}</p>
          </div>
          <i className="fa-solid fa-users p-4 bg-red-200 rounded-md"></i>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="m-2 lg:col-span-1 shadow-md">
          <PieChart />
        </div>

        <div className="m-2 lg:col-span-2 shadow-md">
          <ColumnChart />
        </div>
      </div>

      <div className="grid grid-cols-1">
        <div className="m-2 shadow-md">
          <MapChart />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
        <div className="m-2 shadow-md">
          <LineChart />
        </div>
        <div className="overflow-x-auto m-2 shadow-md">
          <GaugeChart />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;

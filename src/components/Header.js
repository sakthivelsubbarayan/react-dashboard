import { useEffect } from "react";
import { useState } from "react";

// Header component
const Header = () => {
  const [userName,setUserName] = useState('Test');
  const [org,setOrg] = useState('Test');
  const [profileImage,setProfileImage] = useState('');
  useEffect(()=>{
    let userInfo = localStorage.getItem('loginInfo');
    if (userInfo) {
      userInfo = JSON.parse(userInfo)
      setUserName(`${userInfo.firstName} ${userInfo.lastName}`)
      setOrg(userInfo.company.name);
      setProfileImage(userInfo.image)
    }
  },[])
  return (
    <header className="h-14 bg-gray-100 top-0 w-full fixed shadow" style={{ zIndex: 99999 }}>
      <div className="flex justify-between items-center px-10 h-14">
        <div className="flex justify-between items-center gap-x-14">
          <div className="w-40">
            <h2 className="text-md font-bold">{userName}</h2>
            <p className="text-gray-400 text-[12px]">
              {org}
            </p>
          </div>

          {/* <a id="toggle-button" className="hidden lg:block bg-gray-200 rounded-full transition-all duration-500 ease-in-out"
            href="#"><i className="fa-solid fa-arrow-left p-3"></i></a> */}
        </div>

        <ul className="flex items-center gap-5">
          <li className=""><a className="bg-gray-200 px-3 py-2 rounded-sm" href="#"><i className="fa-regular fa-bell"></i></a>
          </li>
          <li className="" >
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white cursor-pointer"
              src={profileImage}
              alt="" />
            <ul id="user-dropdown" className="absolute hidden bg-white right-4 top-14 w-28 rounded shadow-md">
              <li className="mb-1 hover:bg-gray-50 text-gray-700 hover:text-gray-900"><a className="block px-5 py-2"
                href="#">Profile</a></li>
              <li className="mb-1 hover:bg-gray-50 text-gray-700 hover:text-gray-900"><a className="block px-5 py-2"
                href="#">Settings</a></li>
              <li className="mb-1 hover:bg-gray-50 text-gray-700 hover:text-gray-900"><a className="block px-5 py-2"
                href="#">Logout</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
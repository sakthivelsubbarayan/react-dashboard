// Sidebar component
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <aside className={`w-[60px] lg:w-[240px] h-[calc(100vh-120px)] whitespace-nowrap fixed shadow overflow-x-hidden transition-all duration-500 ease-in-out`}>
      <div className="flex flex-col justify-between h-full ">
                <ul className="flex flex-col gap-1 mt-2">
                    <li className="text-gray-500 hover:bg-gray-100 hover:text-gray-900">
                        <a className="w-full flex items-center py-3" href="#">
                            <i className="fa-solid fa-house text-center px-5"></i>
                            <span className="whitespace-nowrap pl-1" onClick={()=>navigate("/")}>Dashboard</span>
                        </a>
                    </li>

                    {/* <li className="text-gray-500 hover:bg-gray-100 hover:text-gray-900">
                        <a className="w-full flex items-center py-3" href="#">
                            <i className="fa-solid fa-chart-line text-center px-5"></i>
                            <span className="whitespace-nowrap pl-1" onClick={()=>navigate("/")}>Reports</span>
                        </a>
                    </li> */}

                    <li className="text-gray-500 hover:bg-gray-100 hover:text-gray-900" onClick={()=>navigate("/table")}>
                        <a className="w-full flex items-center py-3" href="#">
                            <i className="fa-solid fa-users text-center px-5"></i>
                            <span className="whitespace-nowrap pl-1">Users</span>
                        </a>
                    </li>
                </ul>

                <ul className="flex flex-col gap-1 mt-2">
                    <li className="text-gray-500 hover:bg-gray-100 hover:text-gray-900">
                        <a href="#" className="w-full flex items-center py-3" onClick={()=>{
                            localStorage.removeItem('loginInfo');
                            navigate('/login')
                        }}>
                            <i className="fa-solid fa-right-from-bracket text-center px-5"></i>
                            <span className="pl-1">Logout</span>
                        </a>
                    </li>
                </ul>
            </div>
    </aside>
  );
};
export default Sidebar;
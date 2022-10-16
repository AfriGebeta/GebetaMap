import React, { useEffect, useRef, useState } from "react";
import {Outlet} from 'react-router-dom';
import Header from "./Header";

import { useSelector, useDispatch } from "react-redux"
import { setSideBar } from "../../redux/reducers/sidebar";
function Sidebar() {
  const [url,setUrl] = useState("Dashboard");
  const dispatch = useDispatch()
  const { userData } = useSelector((state) => state.user)
  const [open,setOpen] = useState(true);
  const currentRoute = useSelector((state) => state.currentRoute.currentRoute)
  
  var openClass = useRef(" w-60 ");
  var btnClass = useRef(" open ");

  useEffect(() => {
    openClass.current = open ? " w-0 " : " w-60 ";
    btnClass.current = open ? "" : " open ";
    console.log(open)
    
     
  },[open]);

  return (
    <div className="bg overflow-hidden">
      <div className='flex flex-row items-stretch h-screen overflow-auto relative'>
      
        <div className={"z-20 h-screen flex max-w-[80%] sticky top-0"}>
          <div className={"max-w-full bg-primary sm:relative flex justify-end transition-all duration-500 "+openClass.current}>
            <Header />
          </div>
        </div>
        <div className="relative z-0 w-full flex flex-col items-start">
          <div className=" self-stretch h-14 flex items-center p-4">
            <div className="relative z-30 py-3 pr-3 ">
              <label className={"menu-btn "+btnClass.current} onClick={() => setOpen(!open) }><span></span></label>
            </div>
            <div className="flex justify-between flex-1 font-bold uppercase">
              <h3 className="">{currentRoute}</h3>
              <div className="px-3">{userData.companyname}</div>
            </div>
          </div>
          <div className="p-4 w-full scroll-auto">
            <Outlet setUrl={setUrl} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
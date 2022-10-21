import React, { useEffect, useRef, useState } from "react";
import {Outlet} from 'react-router-dom';
import Header from "./Header";
// import {ReactComponent as BGPolygon} from '../assets/icons/bg-polygon.svg'

function Navbar() {
  const [open,setOpen] = useState(false);

  var openClass = useRef(" w-0 ");
  var btnClass = useRef(" open ");

  useEffect(() => {
    openClass.current = open ? " w-0 " : " w-96 ";
    btnClass.current = open ? "" : " open ";
    console.log([open,openClass.current,btnClass.current]);
  },[open]);

  return (
    <div className="bg overflow-hidden">
        <div className='flex flex-col items-center bg-bg relative'>
          {/* <BGPolygon className="-z-10 h-fit w-fit absolute" /> */}
          <div className="flex items-center py-5 sw relative z-10 ">
            <Header />
            <div className="md:hidden gap-4 grow flex items-cneter justify-end cursor-pointer" onClick={() => setOpen(!open)}>Menu</div>
          </div>

          <div className={'flex flex-row items-stretch overflow-auto relative w-full '+ (open ? ' h-screen' : '')}>
            <div className="relative z-0 w-full flex flex-col items-center overflow-hidden">
              <Outlet />
            </div>
            {/* The Mobile View Slide Header   */}
            <div className={"z-20 h-auto flex sticky top-0 "}>
              <div className={"max-w-full bg-primary sm:relative overflow-hidden flex transition-all duration-500 "+openClass.current
                + (open ? ' p-4 ' : '')}>
                <Header type='col' />
              </div>
            </div>
          </div>
        </div>
    </div>
    // <div className="bg overflow-hidden">
    //   <div className='flex flex-col items-center bg-bg relative'>
    //     {/* <BGPolygon className="-z-10 h-fit w-fit absolute" /> */}
    //     <Header />
    //     <div className="relative z-0 w-full flex flex-col items-center">
    //       <Outlet />
    //     </div>
    //   </div>
    // </div>
  )
}

export default Navbar;
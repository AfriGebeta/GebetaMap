import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function Navbar() {
  return (
    <div className="min-h-screen bg-[#19191a]">
        <div className='flex flex-col items-center relative'>
          {/* <BGPolygon className="-z-10 h-fit w-fit absolute" /> */}
          <div className="flex items-center py-5 sw relative z-10 ">
            <Header />
          </div>

          <div className={'flex flex-row items-stretch overflow-auto relative w-full '}>
            <div className="relative z-0 w-full flex flex-col items-center overflow-hidden ">
              <Outlet />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar;
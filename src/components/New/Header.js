import React from "react";
import {Link} from 'react-router-dom';
import {CaretDownFilled, CaretLeftFilled, UserOutlined} from '@ant-design/icons';
import ProfilePopup from "./ProfilePopup";
import { useState } from "react";

function Header(props) {
  const [profilePopupOpened,setProfilePopupOpened] = useState(false);
  const type2 = props.type === 'col';

  return (
    <div className={!type2 ? "flex w-full" 
      : 'overflow-hidden '
    }>
        <div className={""+(type2 ? 'hidden' : '')}>
          <Link to="/">
            <h2 className="mr-6 self-start m-0 text-white">
              <span className="text-orange-500 font-black">gebeta</span>
              <span className="text-white font-black">maps</span>
            </h2>
          </Link>
        </div>
        <div className={!type2 ? "hidden md:flex text-white grow justify-end items-center gap-6 flex-wrap"
          : 'flex flex-col gap-6 text-white grow '
        }>

          <Link to="/document" className=" text-white active_link">Dashboard</Link>
          <Link to="/features" className=" text-white">Tokens</Link>
          <Link to="/pricing" className=" text-white">Usage</Link>
          <Link to="/contact" className=" text-white">Price Plans</Link>
          <Link to="/contact" className=" text-white">Settings</Link>
          <span className="flex items-center gap-2 cursor-pointer relative"
            onClick={() => setProfilePopupOpened(!profilePopupOpened)}
          >
            <span className="icon">
              <UserOutlined />
            </span>
            {
              profilePopupOpened ? <CaretLeftFilled /> : <CaretDownFilled />}
            <div className={"absolute z-10 top-full right-0 py-3 min-w-[200px] " +
              (profilePopupOpened ? ' block ' : ' hidden ')
              }
            >
              <ProfilePopup />
            </div>
          </span>
        </div>
      </div>
  )
}

export default Header;
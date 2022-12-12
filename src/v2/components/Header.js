import { CloseCircleFilled, MenuOutlined } from "@ant-design/icons";
import React from "react";
import { useState } from "react";
import {Link} from 'react-router-dom';
import LogoText from '../../assets/images/logowithtext.png'
import Modal from "../../features/Modal";


function Header() {
  const [menu,setMenu] = useState(false);

  return (
    <div className="w-full py-3">
        <div className={"flex gap-10"}>
          <Link to="/v2/account">
            <img src={LogoText} className="min-w-[100px]" alt='logo' />
          </Link>
          <div className="hidden md:flex flex-1 gap-4 text-white text-child uppercase">
            <Link to="/">About</Link>
            <Link to="/">Documentation</Link>
            <Link to="/">Contact Us</Link>
          </div>
          <div className="hidden md:flex gap-4 items-center">
            <button className="btn_sty1">Sign in</button>
            <button className="btn_sty2">Sign up</button>
          </div>
          <div className="w-full flex gap-4 md:hidden items-center text-white justify-end">
            <div className="hidden sm:flex gap-4 items-center">
              <button className="btn_sty1">Sign in</button>
              <button className="btn_sty2">Sign up</button>
            </div>
            <MenuOutlined onClick={() => setMenu(true)} className="p-2 cursor-pointer" />
          </div>
        </div>
        <div className="">
          <Modal open={menu} elem={<MobileMenu setOpen={(val) => setMenu(val)} />}/>
        </div>
    </div>
  )
}

function MobileMenu({setOpen}) {
  return (
    <div className="h-full p-3 relative">
      <div className="h-full flex items-center p-3">
        <div className="fixed text-secondary top-0 right-0 p-10">
          <CloseCircleFilled className="scale-[3] cursor-pointer hover:text-white"
            onClick={() => setOpen(false)}
          />
        </div>
        <div className="flex flex-col items-center gap-10 text-white">
          <Link to="/about" className="text-2xl">About</Link>
          <Link to="/documentation" className="text-2xl">Documentation</Link>
          <Link to="/contact" className="text-2xl">Contact Us</Link>
        </div>
      </div>
    </div>
  )
}

export default Header;
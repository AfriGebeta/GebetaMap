import React from "react";
import {Link} from 'react-router-dom';
import LogoText from '../../assets/images/logowithtext.png'


function Header() {
  return (
    <div className="w-full py-3">
        <div className={"flex gap-10"}>
          <Link to="/v2/account">
            <img src={LogoText} alt='logo' />
          </Link>
          <div className="flex flex-1 gap-4 text-white text-child uppercase">
            <Link to="/">About</Link>
            <Link to="/">Documentation</Link>
            <Link to="/">Contact Us</Link>
          </div>
          <div className="flex gap-4">
            <button className="btn_sty1">Sign in</button>
            <button className="btn_sty2">Sign up</button>
          </div>
        </div>
    </div>
  )
}

export default Header;
import React from "react";
import { Link } from "react-router-dom";

function ProfilePopup() {
  return (
    <div className="flex flex-col ">
      <div className="flex justify-end px-4">
        <div className="uparrow -mb-[.5px]"></div>
      </div>
      <div className="border border-white rounded-md p-4 px-6 bg-[#1A1F32]">
        <div className="flex flex-col gap-2">
          <Link to="/" className="text-white">Profile Settings</Link>
          <Link to="/" className="text-white">Contact Support</Link>
          <Link to="/" className="text-white">Usage</Link>
          <hr className="border-gray-500" />
          <span className="text-gray-500">username</span>
          <Link to="/" className="bg-white btn-sty1 self-start theme-light whitespace inline-block">SIGN OUT</Link>
        </div>
      </div>
    </div>
  )
}

export default ProfilePopup;
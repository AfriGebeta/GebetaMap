import React from "react";
import { Link } from "react-router-dom";

import { setUser } from "./../../redux/reducers/user";
import {setPlan} from "./../../redux/reducers/plan"
import {setChoosedPlan} from "./../../redux/reducers/choosedplans"
import { useSelector, useDispatch } from "react-redux"
function ProfilePopup() {
  const dispatch = useDispatch()
  const { userData } = useSelector((state) => state.user)
  return (
    <div className="flex flex-col ">
      <div className="flex justify-end px-4">
        <div className="uparrow -mb-[.5px]"></div>
      </div>
      <div className="border border-white rounded-md p-4 px-6 bg-[#1A1F32]">
        <div className="flex flex-col gap-2">
          <Link to="/account/settings" className="text-white">Profile Settings</Link>
          <Link to="/" className="text-white">Contact Support</Link>
          <Link to="/account/usage" className="text-white">Usage</Link>
          <hr className="border-gray-500" />
          <span className="text-gray-500">{userData.username}</span>
            
          <Link to="/"  onClick = {()=>{
                dispatch(setUser({}))
                dispatch(setPlan([]))
                dispatch(setChoosedPlan([]))
           
              
            }} className="bg-white btn-sty1 self-start theme-light whitespace inline-block">SIGN OUT</Link>
        </div>
      </div>
    </div>
  )
}

export default ProfilePopup;
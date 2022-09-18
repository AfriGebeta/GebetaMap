import React from "react";
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"
import { setUser } from "../../redux/reducers/user";
import {setCurrentRoute} from "./../../redux/reducers/currentRoute"
function Header() {
  
  const { userData } = useSelector((state) => state.user)
  const currentRoute = useSelector((state) => state.currentRoute.currentRoute)
  const dispatch = useDispatch()

  return (
    <div className=" flex flex-col uppercase w-full relative min-w-[200px]">
      <h2 className="flex justify-center items-center h-14 p-4">
        <span className="text-white">Gebeta</span>Maps
      </h2>
      <div className='overflow-y-auto flex flex-col justify-center flex-grow'>
        <div className="flex flex-col justify-start items-center gap-4 text-white py-1 max-h-full font-bold">
          <Link
            className={currentRoute == "Dashboard" ? "sw p-4 py-2 text-center active_btn" : "sw p-4 py-2 text-center " }
            
            to="/dashboard" onClick={() => { dispatch(setCurrentRoute("Dashboard")) }}>Dashboard</Link>
          <Link
            className={currentRoute == "BillingPlans" ? "sw p-4 py-2 text-center active_btn" : "sw p-4 py-2 text-center " }
            to="/billing" onClick={() => { dispatch(setCurrentRoute("BillingPlans")) }}>Billing & Plans</Link>
          <Link
            className={currentRoute == "Usage" ? "sw p-4 py-2 text-center active_btn" : "sw p-4 py-2 text-center " }
            to="/usage" onClick={() => { dispatch(setCurrentRoute("Usage")) }}>Usage</Link>
          <Link
           className={currentRoute == "Profile" ? "sw p-4 py-2 text-center active_btn" : "sw p-4 py-2 text-center " }
            to="/profile" onClick={() => { dispatch(setCurrentRoute("Profile")) }}>Profile</Link>
          <Link
            className={currentRoute == "Documentation" ? "sw p-4 py-2 text-center active_btn" : "sw p-4 py-2 text-center " }
            to="/documentation" onClick={() => { dispatch(setCurrentRoute("Documentation")) }}>Documentation</Link>
          <Link className="sw p-4 py-2 text-center " to="/" onClick = {()=>{dispatch(setUser({}))}}>Sign Out</Link>
        </div>
      </div>
      <div className="p-6">&nbsp;</div>
    </div>
  )
}

export default Header;
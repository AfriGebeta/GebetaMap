import React , {useEffect , useState} from "react";
import { Link } from "react-router-dom";
import { Polygon } from "./../../features/Object/Polygon";
import {ReactComponent as MyLocation} from './../../assets/icons/My location.svg';
import { useSelector, useDispatch } from "react-redux"

export default function ClientDetails() {
    const { userData } = useSelector((state) => state.user)
  return (
    <div>
     <div className="flex flex-col  mx-[5%]  ">
      
      <div className="card">
        <h2 className="uppercase">Client Details</h2>
        <p className="font-bold">
          <ul>
            <li>Company Name : { userData.companyname}</li>
            <li>Email : { userData.email}</li>
            <li>UserName : { userData.username}</li>
          </ul>
        </p>
        <Link to="/profile" className="btn">Edit</Link>
      </div>
    
    </div>
  </div>
  )
}

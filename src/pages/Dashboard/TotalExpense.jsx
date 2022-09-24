

import React , {useEffect , useState} from "react";
import { Link, Navigate } from "react-router-dom";
import { Polygon } from "./../../features/Object/Polygon";
import {ReactComponent as MyLocation} from './../../assets/icons/My location.svg';
import { useSelector, useDispatch } from "react-redux"
import { setUser} from "./../../redux/reducers/user"
export default function TotalExpense() {
     const { userData } = useSelector((state) => state.user)
    const dispatch = useDispatch();
  
    
  return (
     <div className="  mx-[2%]">
          <div className="card ">
              <p>this is the error</p>
          </div>
          </div>
  )
}

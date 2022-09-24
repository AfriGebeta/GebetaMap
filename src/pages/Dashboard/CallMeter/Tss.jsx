import React , {useEffect , useState} from "react";
import { Link, Navigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux"
import { setUser} from "./../../../redux/reducers/user"
export default function Tss() {
     const { metrics } = useSelector((state) => state.metrics)
    const dispatch = useDispatch();
  
 

   
  return (
      <div className="mx-[2%]">
            <div className="card "> 
              
              
                <p className="font-bold text-3xl">Route Optimization API CALL METER</p>
                    <p className="fibt-bold text-2xl">{metrics.tss} Calls</p>
            </div>
      </div>
  )
}

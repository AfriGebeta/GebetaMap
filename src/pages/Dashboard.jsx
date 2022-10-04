import React , {useEffect , useState} from "react";
import { Link } from "react-router-dom";
import { Polygon } from "../features/Object/Polygon";
import {ReactComponent as MyLocation} from '../assets/icons/My location.svg';
import { useSelector, useDispatch } from "react-redux"
import ChoosedPlan from "./Dashboard/ChoosedPlan";
import BillingHistory from "./Dashboard/BillingHistory";
import ClientDetails from "./Dashboard/ClientDetails";
import ApiDoc from "./Dashboard/ApiDoc";
import Token from "./Dashboard/Token";




function Dashboard() {
  const { userData } = useSelector((state) => state.user)
  //userData
  return (

    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-2 gap-y-3 ">

           <ApiDoc class=" "/> 
      <ChoosedPlan/>
      <BillingHistory className="  "/>
      <ClientDetails className="" />
      <Token  className=""/>
</div>
  

   
  )
}



export default Dashboard;

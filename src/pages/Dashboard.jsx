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

    <div className="grid grid-cols-3 gap-x-2 gap-y-3 ">

           <ApiDoc class=" "/> 
      <ChoosedPlan/>
      <BillingHistory className="  "/>
      <ClientDetails className="" />
      <Token  className=""/>
</div>
  
//       <div className="grid grid-cols-3 gap-4 mx-[10%]">
      
// </div>
   
  )
}



export default Dashboard;
//http://localhost:8080/api/v1/choosedplan/getById/?id=d916c25f076aba3bcee7e1fc9b528e9f
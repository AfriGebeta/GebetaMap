import React , {useState , useEffect} from "react";
import { Link } from "react-router-dom";
import {setChoosedPlan} from "./../../../redux/reducers/choosedplans"
import { useSelector, useDispatch } from "react-redux"
import {url} from "./../../../data/url"


function Plan() {

    const choosedPlan = useSelector((state) => state.choosedPlan.choosed)
    const dispatch = useDispatch();
    const { userData } = useSelector((state) => state.user)
    useEffect(() => {
        try {
        
               fetch(`${url}/api/v1/route/choosedplan/getUsersPlan/?id=${userData.id}`).
                  then((data) => { return data.json() })
                  .then((data) => {
                    if (data.msg == "ok") {
          
                        dispatch(setChoosedPlan(data.data))
                      }
                  })
      
                  
          } catch (err) {
              
          }
      }, [])
    
    return (
      <div className="card2 uppercase child-text-white">
        <h3> { userData.companyname}</h3>
        <h3>Current Plan : <span className="text-[#00AF3C]">{choosedPlan.length > 0 ? choosedPlan[0].choosedplan : ""}</span></h3>
        <h3>Remaining Request : <span className="text-[#00AF3C]">{choosedPlan.length > 0 ? choosedPlan[0].remainingrequest : ""} </span></h3>
        <h3>Status : <span className="text-[#00AF3C]">{choosedPlan.length > 0 ? choosedPlan[0].status : ""}</span></h3>
      </div>
    )
  }


  export default Plan
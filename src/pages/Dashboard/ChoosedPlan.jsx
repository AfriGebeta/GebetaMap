import React , {useEffect , useState} from "react";
import { Link } from "react-router-dom";
import { Polygon } from "./../../features/Object/Polygon";
import {ReactComponent as MyLocation} from './../../assets/icons/My location.svg';
import { useSelector, useDispatch } from "react-redux"
import { setChoosedPlan } from "../../redux/reducers/choosedplans";
import {url} from "./../../data/url"


export default function ChoosedPlan() {
  const { userData } = useSelector((state) => state.user)
  const choosedPlan = useSelector((state) => state.choosedPlan.choosed)
   const dispatch = useDispatch()
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
  <div>
    <div className="flex flex-col  mx-[5%]   ">
      <div className="card px-5">
        <div className="flex gap-3 justify-between items-center">
          <h2>Current Plan</h2>
        
        </div>
        <div className="flex">
          <div className="flex-grow ">
            <div className="flex justify-between mx-[5%]">
              <p className="font-bold">Plan</p>
              <p className="font-bold"> Remaining Request</p>
              <p className="font-bold">Status</p>
            </div>     
              {
                choosedPlan.map((n) => {
                    return <div className="flex justify-between mx-[5%]">
                      <p className="font-bold">{n.choosedplan}</p>
                      <p className="font-bold">{ n.remainingrequest}</p>
                            <p className="font-bold">{n.status}</p>
                        </div>    
                })
              }
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

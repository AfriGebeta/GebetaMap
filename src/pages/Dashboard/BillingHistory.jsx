

import React , {useEffect , useState} from "react";
import { Link } from "react-router-dom";
import { Polygon } from "./../../features/Object/Polygon";
import {ReactComponent as MyLocation} from './../../assets/icons/My location.svg';
import { useSelector, useDispatch } from "react-redux"
import { setBilling } from "../../redux/reducers/billing";
import {url} from "./../../data/url"


export default function BillingHistory() {

  const { userData } = useSelector((state) => state.user)
  const bililng = useSelector((state) => state.billing.billing)
  const dispatch = useDispatch()
  
 
  useEffect(() => {

      try {
           
  
            fetch(`${url}/api/v1/billingHistory/?id=${userData.id}`).
                then((data) => { return data.json() })
              .then((data) => {
                if (data.msg == "ok") {
              
                      dispatch(setBilling(data.data))
                    
                  }
                  
                })
                
        } catch (err) {
            
        }
   
        
    }, [])


    return (
      <div>
        <div className="flex flex-col  mx-[5%]  ">
    
          <div className="card p-0 ">
            <h2 className="p-3 px-5 ">Billing History</h2>
            {bililng.map((bill,i) => {
              return (
                <div className={"px-5 py-1 flex justify-between items-center gap-4 "+(i%2===0?"bg-[#F3C651]/30":"")}>
                  <p>{bill.date.substring(0, 4) + "-" + bill.date.substring(4, 6) + "-" + bill.date.substring(6, 8)}</p>
                  <b>ETB&nbsp;{bill.totalmoney}</b>
                </div>  
              )
            })}
      
          </div>
        </div>
      </div>
    )
}
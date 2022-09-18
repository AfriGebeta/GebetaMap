import React , {useEffect , useState} from "react";
import { Link } from "react-router-dom";
import { Polygon } from "./../../features/Object/Polygon";
import {ReactComponent as MyLocation} from './../../assets/icons/My location.svg';
import { useSelector, useDispatch } from "react-redux"



export default function BillingHistory() {

    const { userData } = useSelector((state) => state.user)
    const [billinghistory, setBillingHistory] = useState([])
     useEffect(() => {
        try {
            fetch(`http://localhost:8080/api/v1/billinghistory/getById/?id=${userData.id}`).
                then((data) => { return data.json() })
                .then((data) => {
                    setBillingHistory(data.data)
                })
                
        } catch (err) {
            
        }
    }, [])


    return (
      <div className="flex flex-col  mx-[5%]  ">
    

    <div className="card p-0 ">
      <h2 className="p-3 px-5 ">Billing History</h2>
      {billinghistory.map((bill,i) => {
        return (
          <div className={"px-5 py-1 flex justify-between items-center gap-4 "+(i%2===0?"bg-[#F3C651]/30":"")}>
            <p>{bill.date}</p>
            <b>ETB&nbsp;{bill.cash}</b>
          </div>  
        )
      })}
      <div className='p-5'>
        <Link to="/billing" className='btn px-5'>More</Link>
      </div>
            </div>
              </div>
  )
}
import React , {useEffect , useState} from "react";
import { Link } from "react-router-dom";
import { Polygon } from "./../../features/Object/Polygon";
import {ReactComponent as MyLocation} from './../../assets/icons/My location.svg';
import { useSelector, useDispatch } from "react-redux"


export default function ChoosedPlan() {
    const { userData } = useSelector((state) => state.user)
    const [choosedPlans , setCoosedPlans] = useState([])
    useEffect(() => {
        try {
            fetch(`http://localhost:8080/api/v1/choosedplan/getById/?id=${userData.id}`).
                then((data) => { return data.json() })
                .then((data) => {
                    
                    setCoosedPlans(data.data)
                })
                
        } catch (err) {
            
        }
    }, [])

    return (
  <div className="flex flex-col  mx-[5%]   ">
    <div className="card px-5">
      <div className="flex gap-3 justify-between items-center">
        <h2>Current Plan</h2>
      
      </div>
      <div className="flex">
        <div className="flex-grow">
                    <div className="flex justify-between mx-[5%]">
                            <p className="font-bold">Plan</p>
                            <p className="font-bold">Status</p>
                        </div>     
                        {
                choosedPlans.map((n) => {
                    return <div className="flex justify-between mx-[5%]">
                            <p className="font-bold">{n.plan}</p>
                            <p className="font-bold">{n.status}</p>
                        </div>    
                })
          }
            
        </div>
       
      </div>
      <Link to="/billing" className="btn inline-block">Change Plan</Link>
    </div>
  
  </div>

  )
}



import React , {useEffect , useState} from "react";
import { useSelector, useDispatch } from "react-redux"
import { setPlan } from "../../redux/reducers/plan";
import {setChoosedPlan} from "../../redux/reducers/choosedplans"
import Slider from 'antd/lib/slider'
import {url} from "./../../data/url"


export default function BusinessPackage() {
    const { userData } = useSelector((state) => state.user)
    const plans = useSelector((state) => state.plan.plan)
    const choosedPlan = useSelector((state) => state.choosedPlan.choosed)
     const [starter, setStarter] = useState(0)
    const [business, setBusiness] = useState(100001 )
    const [professional, setProfessional] = useState(500001)
    const [premium, setPremium] = useState(1000001)
  
  
    const dispatch = useDispatch()
    useEffect(() => {
        try {

            if (plans.length == 0) {
                 fetch(`${url}/api/v1/plan/getAll`).
                then((data) => { return data.json() })
                .then((data) => {
                    if (data.msg == "ok") {
                      
                       dispatch(setPlan(data.data))
                    }
                })
            }
           
                
        } catch (err) {
            
        }
    }, [])

  const buyPackage = (planname, selected) => {
    let value = selected == 0 ? starter : selected == 1 ? business : selected == 2 ? professional : premium

      
    
        
    
        fetch(`${url}/api/v1/route/choosedplan/add` , {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "choosedplan": planname,
                    "userid": userData.id,
                    "remainingrequest": value
            })
            }).then((data) => { return data.json() })
            .then((data) => {
                 if (data.msg == "ok") {
                            alert("Success")                            
                            dispatch(setChoosedPlan([...choosedPlan , data.data]))
                 } else {
                     alert(data.msg)
                    }
                    
            })
         
    }

    return (
      <div className="flex flex-col  mx-[5%]   ">
        
        



    <div className="card px-5">
      <div className="">
        <h2>Business Packages</h2>
  
      </div>
      <div className="flex">
            <div className="flex-grow">
              
              <table class="table-auto border-separate [border-spacing:0.75rem] ">
                  <thead>
                    <tr className="">
                      <td><p className="font-bold text-xl  ">Plan  </p></td>
                      <td><p className="font-bold text-xl w-[10%]  ">Price</p></td>
                      <td><p className="font-bold w-[50%]   text-xl">No of Request</p></td>
                      <td><p className="font-bold text-xl ">Operations</p></td>  
                    </tr>
                  </thead>
                  <tbody>
  
                        {
                              plans.map((n , i) => {
                                      let a = n.totalNumberOfRequest
                                      const b = a.split("-")
                                  return <tr>
                                  <td className=""> <p className="">{n.planname}  </p></td>
                                  <td className="">{n.planprice}</td>
                                    <td className="w-[75%]"><div ><Slider min={parseInt(b[0].replace(/[^0-9\.]+/g, ""))} onChange={(value) => {
                                      if (i == 0) {
                                        setStarter(value)
                                      }
                                      else if (i == 1) {
                                        setBusiness(value)
                                      } else if (i == 2) {
                                        setProfessional(value)
                                      }
                                      else if (i == 3) {
                                        setPremium(value)
                                      }
                                    }} max={parseInt(b[1].replace(/[^0-9\.]+/g, ""))} step={200} /></div></td>
                                  <td><button onClick={(event) => { event.preventDefault(); buyPackage(n.planname, i) }} type="button" className=" w-[150px] rounded-md bg-orange-200 text-black px-3 py-2 mt-1 mb-5 transition duration-200 hover:bg-orange-500 text-white w-full py-2.5  text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                                      <span className="inline-block ">Buy Package</span>
                                </button></td>
                                    
                              </tr>   
                              })
                  }
                    </tbody>
            </table>
            
        </div>
       
      </div>
   
    </div>
  
  </div>

  )
}

// import { Box, Slider } from '@mui/material';
import { Slider } from 'antd';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"
import { setChoosedPlan } from "./../../../redux/reducers/choosedplans";
import {url} from "./../../../data/url"
import { setPlan } from "./../../../redux/reducers/plan";

function Plans() {

  const { userData } = useSelector((state) => state.user)
  const plans = useSelector((state) => state.plan.plan)
  const choosedPlan = useSelector((state) => state.choosedPlan.choosed)
  
  const [starter, setStarter] = useState(0)
  const [business, setBusiness] = useState(100001 )
  const [professional, setProfessional] = useState(500001)
  const [premium, setPremium] = useState(1000001)
  
  const [showLoading , setShowLoading] = useState(false)
  const dispatch = useDispatch()
 
  useEffect(() => {
      try {

          if (plans.length == 0) {
          
               fetch(`${url}/api/v1/plan/getAllPlans`).
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


 


  

  const returnMarks = (minMark  , maxMark) => {

    let marks = {};
    marks[minMark] = {
      style: {
        color: 'white'
      },
      label: <span className='text-white'>{minMark}</span>
    };

    marks[parseInt(maxMark/2)] = {
      style: {
        color: 'white'
      },
      label: <span className='text-white'>{parseInt(maxMark/2)}</span>
    };

    marks[maxMark] = {
      style: {
        color: 'white'
      },
      label: <span className='text-white'>{maxMark}</span>
    };
 
    return marks

  }
    
 

  const buyPackage = (planname, selected) => {
    let value = selected == 0 ? starter : selected == 1 ? business : selected == 2 ? professional : premium

        try{
                  setShowLoading(true)
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

                     setShowLoading(false)
                 }catch(err){
                    setShowLoading(false)
                 }
         
    }


  const returnApiCall = (position) => {
    if (position == 0) {
                                                                                    
      return (<>{starter} <br />
      API_CALLS</> )
      }
      else if (position == 1) {
        return (<>
        {business} <br />
        API_CALLS </>)
        
      } else if (position == 2) {
         return (<>
        {professional} <br />
        API_CALLS </>)
      }
      else if (position == 3) {
        return (<>
        {premium} <br />
        API_CALLS </>)
      }

  }

  const returnApiCost = (position) => {
    if (position == 0) {
                                                                                    
      return (<div> ETB { (starter * (40/1000)).toFixed(2)}</div> )
      }
      else if (position == 1) {
       
        return (<div> ETB { (business * (36/1000)).toFixed(2)}</div> )
        
      } else if (position == 2) {
       
        return (<div> ETB { (professional * (30/1000)).toFixed(2) }</div> )
      }
      else if (position == 3) {
        
        return (<div> ETB {(premium * (26/1000)).toFixed(2) }</div> )
      }

  }

  return (
    <div className='sw py-10 text-white'>
      <div className='flex justify-around'>
        <div className='flex-1'>
          <h3 className='text-white'>Price Plans</h3>
        </div>
        <div className='w-[86px] flex justify-center'>
          <h3 className='text-white'>COST</h3>
        </div>
      </div>

      {



                              plans.map((n , i) => {
                                      let a = n.totalNumberOfRequest
                                      const b = a.split("-")
                                  return  (
                                  <>
                                  <hr className=' border-gray-500' />
                                  <div className='flex flex-wrap '>
                                    <div className='w-full md:flex-1  flex flex-col gap-3 py-3 pb-6'>
                                      <div className='flex gap-2 items-center'>
                                        <h2 className='text-white uppercase my-auto !self-center'>{n.planname} </h2>
                                        {/* <Link to="/documentation#" className='btn-sty2'>Doc</Link> */}
                                      </div>
                                      <div className='flex gap-2'>
                                        <div className='text-white border-l-2 border-white p-2'>
                                          <span>{n.planprice}</span>
                                        </div>
                                        {/* <Link to="/" className='btn-sty2'>Choose Plan</Link> */}
                                      </div>
                                    </div>
                            
                                    {/* Range */}
                                    <div className='flex-1 flex items-center px-4 gap-3'>
                                      <Slider onChange={(value)=>{
                                      
                                      
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
                                            
                                      }} included={false} marks={returnMarks(parseInt(b[0].replace(/[^0-9\.]+/g, ""))  , parseInt(b[1].replace(/[^0-9\.]+/g, ""))) } defaultValue={parseInt(b[0].replace(/[^0-9\.]+/g, ""))} min={parseInt(b[0].replace(/[^0-9\.]+/g, ""))} max={parseInt(b[1].replace(/[^0-9\.]+/g, ""))}  className="w-full" />
                                      <div className='grow px-6 text-center'>

                                             
 
                                          {
                                            returnApiCall(i)
                                          }
                                            
                                           
                                        
                                       
                                      </div>
                                    </div>
                            
                                    <div className='bg-[#252B43] flex items-center justify-center p-8 w-[86px]'>
                                     {returnApiCost(i)}
                                    </div>
                                    <div className='bg-[#252B43] flex items-center justify-center p-8 w-[86px]'>
                                    <button onClick={(event) => { event.preventDefault(); buyPackage(n.planname, i) }} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Buy 
                                      </button>
                                    </div>
                                  </div>
                                  </>
                                  )
                                  
                                  
                                   
                              })
                  }

      {/* Plans */}
      
     

     

     

    </div>
  )
}

export default Plans;
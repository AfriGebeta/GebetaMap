
import React , {useEffect , useState} from "react";
import { Link } from "react-router-dom";
import { Polygon } from "../features/Object/Polygon";
import {ReactComponent as MyLocation} from '../assets/icons/My location.svg';
import { useSelector, useDispatch } from "react-redux"
import ChoosedPlan from "./Dashboard/ChoosedPlan";
import BillingHistory from "./Dashboard/BillingHistory";
import BusinessPackage from "./Dashboard/BusinessPackage";
import {  Line } from 'react-chartjs-2'


function Billing() {

 
  const bililng = useSelector((state) => state.billing.billing)
   const [labels, setLabels] = useState([])
   const [data , setData] = useState([])
  const dispatch = useDispatch()
  const returnBeforeComma = (number) => {
    let _number = ''
    for (let i = 0; i < number.length; i++){
      if (number[i] == '.') {
        return _number 
      } else {
        _number += number[i]
      }
    }
    return _number
  }
  useEffect(() => {
                let _data = []
                let _label = []
    for (let i = 0; i < bililng.length; i++){
             
                    try {
                      let str = bililng[i].date.substring(0, 4) + "-" + bililng[i].date.substring(4, 6) + "-" + bililng[i].date.substring(6, 8)
                      _label.push(str) 
                      _data.push(parseInt( returnBeforeComma(bililng[i].totalmoney).replace(/\D/g, "")) )
                    } catch (err) {
                       
                    }
                       
                        
    }
 
                console.log(_data)
                      setLabels(_label)
                      setData(_data)
            
  }, [])
  

   const options = {

       responsive:true,
    maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
       display: false
    },
    title: {
      display: true,
      text: 'Api Usage Graph',
    },
  },
  };
  
  const datas = {
  labels: labels,
  datasets: [
    {
      // label: "First dataset",
      data: data,
      fill: true,
      
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    },
   
  ]
};

  return (
    // grid-rows-3
<div class="flex flex-col w-full ">

      <div class=" w-[100%] "><BusinessPackage /></div>

      <div className="flex w-[100%]  justify-between mt-[3%] ">
        <div className="flex flex-col w-[50%] space-y-5 ml-[2.4%]">
            <div class=" "><ChoosedPlan /></div>
          
          <div ><BillingHistory/></div>
        </div>
        <div class=" w-[50%] mr-[5%]  ">
          <div className=" card h-full w-full" >
              <div className=" h-full">
                  {data.length > 0 ?  <Line  options={options} data={datas}  />  : null}
                 </div>
          
          </div>
        </div>
      
      </div>
      
   
      
</div>
  
  )
}



export default Billing;

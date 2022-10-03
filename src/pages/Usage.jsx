
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
import BusinessPackage from "./Dashboard/BusinessPackage";
import {  Line } from 'react-chartjs-2'
import TotalExpense from "./Dashboard/TotalExpense";
import Direction from "./Dashboard/CallMeter/Direction";
import Onm from "./Dashboard/CallMeter/Onm";
import Matrix from "./Dashboard/CallMeter/Matrix";
import Tss from "./Dashboard/CallMeter/Tss";
import { CategoryScale } from 'chart.js'; 
import Chart from 'chart.js/auto';
import { setMetrics } from "./../redux/reducers/metrics"
import {url} from "./../data/url"


Chart.register(CategoryScale);
function Usage() {

  const dispatch = useDispatch()
  const { userData } = useSelector((state) => state.user)

  const [labels, setLabels] = useState([])
   const [data , setData] = useState([])

  useEffect(() => {

  
    fetch(`${url}/api/v1/route/apicalls/getUserMetrics?id=${userData.id}`).
                then((data) => { return data.json() })
              .then((data) => {
                if (data.msg == "ok") {
              
                      dispatch(setMetrics(data.data))
                  }
                  
              })
    
     fetch(`${url}/api/v1/route/apicalls/getDataForGraph?id=${userData.id}`).
                then((data) => { return data.json() })
              .then((data) => {
                if (data.msg == "ok") {
                      let _data = []
                      let _label = []

                  for (let i = 0 ; i < data.data.length ; i++) {
                    try {
                      let str = data.data[i][0].substring(0, 4) + "-" + data.data[i][0].substring(4, 6) + "-" + data.data[i][0].substring(6, 8)
                      _label.push(str)  
                      _data.push(data.data[i][1])
                   
                    } catch (err) {
                       
                    }


                  }



                
                      setLabels(_label)
                      setData(_data)
                  }
                  
                })

  

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




    <div className="h-full w-full">
      <div className="grid grid-cols-2 gap-x-2 gap-y-3 mx-[10%] ">
            <Direction />
            <Onm />
            <Tss/>
            <Matrix />
      </div>
      <div className="mx-[11%] mt-[5%] h-[55%]">
        <div className=" card h-full" >
         <div className=" h-full">
          {data.length > 0 ?  <Line  options={options} data={datas}  />  : null}
    </div>

          </div>
      </div>
    </div>

  
  )
}



export default Usage;











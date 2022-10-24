import { DatePicker, Select } from "antd";
import { CopyOutlined, DeleteFilled, SyncOutlined } from "@ant-design/icons";
import { Input } from "antd";
import React , {useState , useEffect} from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { setUser } from "./../../../redux/reducers/user"
import {url} from "./../../../data/url"
import ClipLoader from "react-spinners/ClipLoader";
import Modal from "./../../../features/Modal/index";
import { CategoryScale } from 'chart.js'; 
import Chart from 'chart.js/auto';
import {  Line } from 'react-chartjs-2'
import { setMetrics } from "./../../../redux/reducers/metrics"
const {Option} = Select;
const {RangePicker} = DatePicker;

function Index() {
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
    <div className="sw py-4 flex flex-col gap-10  h-full">
      <div>
        <h2 className="text-white">Usage Statistics</h2>
        <div className="flex items-center text-white gap-3">
          {/* <Select defaultValue="All Api Keys" className="btn-sty1 !rounded-full">
            <Option value="All Api Keys">All Api Keys</Option>
            <Option value="Free Public Keys">Free Public Keys</Option>
          </Select>
          <span>For</span> */}
          {/* <Select defaultValue="Last Month">
            <Option value="Last Week">Last Week</Option>
            <Option value="Last Month">Last Month</Option>
            <Option value="Last Year">Last Year</Option>
          </Select> */}
          <span>From</span>
          <RangePicker  onChange={(value, dateString)=>{
            
            // const [labels, setLabels] = useState([])
            // const [data , setData] = useState([])

     
            let starter = dateString[0].split('-')
            let end = dateString[1].split('-')

            var dateFrom = "02/05/2013";
var dateTo = "02/09/2013";
var dateCheck = "02/07/2013";

var d1 = dateFrom.split("/");
var d2 = dateTo.split("/");
var c = dateCheck.split("/");

              var from = new Date(starter[0], parseInt(starter[1])-1, starter[2]);  // -1 because months are from 0 to 11
              var to   = new Date(end[0], parseInt(end[1])-1, end[2]);


            fetch(`${url}/api/v1/route/apicalls/getDataForGraph?id=${userData.id}`).
            then((data) => { return data.json() })
            .then((data) => {
            if (data.msg == "ok") {
                  let _data = []
                  let _label = []

                  for(let i =0; i < data.data.length; i++){
                    try {
                    let str = data.data[i][0].substring(0, 4) + "-" + data.data[i][0].substring(4, 6) + "-" + data.data[i][0].substring(6, 8)
                    let dateFromData = str.split("-")
                    var check = new Date(dateFromData[0], parseInt(dateFromData[1])-1, dateFromData[2]);
                    if(  check > from && check < to){
                    
                        _label.push(str)  
                      _data.push(data.data[i][1])
                      }

                    } catch (err) {
                        console.log(err)                      
                  }
                }

            


                  console.log(_data)
            
                  setLabels(_label)
                  setData(_data)
              }
              
            })


            
          
          }} />

         

        </div>
      </div>
      <div className="text-white  ">
        {/* <h2 className="text-white mb-0">Sep, 09 - 22 2022</h2>
        <span className="lowercase mb-4 inline-block">ALL DATES START AT 00:00 ETHIOPIAN LT</span> */}
        <div className="border border-dashed rounded-md border-white p-10 flex items-center justify-center sm:h-[200px] md:h-[200px] lg:h-[600px]">

        {data.length > 0 ?  <Line  options={options} data={datas}  />  : <h3 className="text-white">
            You don't have any account activity for the selected period and API key.
          </h3>}
          
        </div>
      </div>
    </div>
  )
}

export default Index;
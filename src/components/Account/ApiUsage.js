import { DatePicker } from "antd";
import React, { useEffect, useState } from "react";
import { Line } from 'react-chartjs-2';
import { useDispatch, useSelector } from "react-redux";
import url from "../../data/url";
const { RangePicker } = DatePicker;

function APIUsage() {
  const dispatch = useDispatch()
  const { userData } = useSelector((state) => state.user)

  const [labels, setLabels] = useState([])
  const [data, setData] = useState([])
  const [selectedGraph, setSelected] = useState("All")


  useEffect(() => {
    fetch(`${url}/api/v1/route/apicalls/getDataForGraph?id=${userData.id}`).
      then((data) => { return data.json() })
      .then((data) => {
        if (data.msg == "ok") {

          let _data = []
          let _label = []
          console.group(data.data)
          let dataa = getAll(data.data)

          for (let i = 0; i < dataa.length; i++) {
            try {

              let str = dataa[i][0].substring(0, 4) + "-" + dataa[i][0].substring(4, 6) + "-" + dataa[i][0].substring(6, 8)
              _label.push(str)
              _data.push(dataa[i][1])

            } catch (err) {

            }


          }
          console.log(_data)
          setLabels(_label)
          setData(_data)
        }

      })
  }, [selectedGraph]);

  useEffect(() => {



    fetch(`${url}/api/v1/route/apicalls/getDataForGraph?id=${userData.id}`).
      then((data) => { return data.json() })
      .then((data) => {
        if (data.msg == "ok") {
          let _data = []
          let _label = []

          let dataa = getAll(data.data)
          for (let i = 0; i < dataa.length; i++) {
            try {
              let str = dataa[i][0].substring(0, 4) + "-" + dataa[i][0].substring(4, 6) + "-" + dataa[i][0].substring(6, 8)
              _label.push(str)
              _data.push(dataa[i][1])
            } catch (err) {
            }
          }
          setLabels(_label)
          setData(_data)
        }

      })



  }, [])


  function changeFilter(ev) {
    setSelected(ev.target.value);
  }

  const getAll = (data) => {
    let Ldata = []
    if (selectedGraph != "All") {

      var map = new Object();

      for (let i = 0; i < data.length; i++) {
        if (data[i][0] == selectedGraph) {
          if (map[data[i][1]] == undefined) {
            map[data[i][1]] = data[i][2]
          } else {
            data[i][1] = data[i][2] + map[data[i][1]]
          }
        }


      }
      for (const [key, value] of Object.entries(map)) {
        Ldata.push([key, value])
      }
      return Ldata

    } else {
      var map = new Object();
      for (let i = 0; i < data.length; i++) {
        if (map[data[i][1]] == undefined) {
          map[data[i][1]] = data[i][2]
        } else {
          map[data[i][1]] = data[i][2] + map[data[i][1]]
        }

      }

      for (const [key, value] of Object.entries(map)) {
        Ldata.push([key, value])
      }
      return Ldata
    }

  }



  const options = {

    responsive: true,
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
        backgroundColor: "rgba(222,117,1,0.2)",
        borderColor: "rgba(222,117,0,1)"
      },

    ]
  };

  return (
    <div className="rounded-md px-4 py-3 bg-[#202022] ">
      <div className='flex flex-wrap justify-between items-center w-full '>
        <div>
          <h2 className='m-0'>API Usage</h2>
          <span>Track your api usage here</span>
        </div>
        <div className='flex flex-wrap gap-4 items-center '>
          <label className='flex items-center gap-2 cursor-pointer'><input type='radio' name='filter' className='' value='All' checked={selectedGraph === 'All'} onChange={changeFilter} /> All</label>
          <label className='flex items-center gap-2 cursor-pointer'><input type='radio' name='filter' className='' value='ONM' checked={selectedGraph === 'ONM'} onChange={changeFilter} /> ONM</label>
          <label className='flex items-center gap-2 cursor-pointer'><input type='radio' name='filter' className='' value='Direction' checked={selectedGraph === 'Direction'} onChange={changeFilter} /> Direction</label>
          <label className='flex items-center gap-2 cursor-pointer'><input type='radio' name='filter' className='' value='TSS' checked={selectedGraph === 'TSS'} onChange={changeFilter} /> Tss</label>
          <label className='flex items-center gap-2 cursor-pointer'><input type='radio' name='filter' className='' value='Matrix' checked={selectedGraph === 'Matrix'} onChange={changeFilter} /> Matrix</label>
        </div>
      </div>
      <div>
        <div className='py-2 my-4' x='bg-[#ff971d] rounded-lg px-6 py-2 my-4 inline-block'>
          <RangePicker className="!bg-black/40 !border-white/10" onChange={(value, dateString) => {

            let starter = dateString[0].split('-')
            let end = dateString[1].split('-')



            var from = new Date(starter[0], parseInt(starter[1]) - 1, starter[2]);  // -1 because months are from 0 to 11
            var to = new Date(end[0], parseInt(end[1]) - 1, end[2]);


            fetch(`${url}/api/v1/route/apicalls/getDataForGraph?id=${userData.id}`).
              then((data) => { return data.json() })
              .then((data) => {
                if (data.msg == "ok") {

                  let _data = []
                  let _label = []

                  let dataa = getAll(data.data)

                  for (let i = 0; i < dataa.length; i++) {
                    try {
                      let str = dataa[i][0].substring(0, 4) + "-" + dataa[i][0].substring(4, 6) + "-" + dataa[i][0].substring(6, 8)
                      let dateFromData = str.split("-")
                      var check = new Date(dateFromData[0], parseInt(dateFromData[1]) - 1, dateFromData[2]);
                      if (check > from && check < to) {

                        _label.push(str)
                        _data.push(dataa[1])
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

          {data.length > 0 ? <Line options={options} data={datas} className="!w-full" /> : <h3 className="text-white">
            You don't have any account activity for the selected period and API key.
          </h3>}

        </div>
      </div>
    </div>
  )
}

export default APIUsage;
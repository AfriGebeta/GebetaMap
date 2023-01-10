import { SearchOutlined } from "@ant-design/icons";
import { Select } from "antd";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ApiDetail from "../../components/Account/ApiDetail";
import APIToken from "../../components/Account/ApiToken";
import BillingHistory from "../../components/Account/BillingHistory";
import DocCard from "../../components/Account/DocCard";



function ManualLoc() {
  const locationsData = [
    {
      value: '1',
      label: 'Bole International Airport, Addis Ababa, Ethiopia'
    },
    {
      value: '1',
      label: 'Bole, Addis Ababa, Ethiopia'
    },
    {
      value: '1',
      label: 'Bole Medhanialem Church, 5, Addis Ababa, Ethiopia'
    },
    {
      value: '1',
      label: 'Bole Michael Church, Addis Ababa, Ethiopia'
    },
    {
      value: '1',
      label: 'Bole Bulbula, Addis Ababa, Ethiopia'
    }
  ]

  return (
    <div className="flex gap-4 flex-wrap">
      <div className="leading-3 flex flex-1 min-w-[50%] flex-wrap  gap-3 p-4 rounded-xl bg-[#202022] max-w-full">
        <div className="">
          <h2 className="p-0 m-0 uppercase ">Geocoding</h2>
          <p className="m-0 p-0">endpoint</p>
        </div>
        <div className="flex flex-1 items-stretch">
          <Select showSearch placeholder="enter location name" optionFilterProp="children" 
            filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            className="flex-1 bg-[#181818] px-3 py-2 border-0 placeholder:text-white" 
            style={{backgroundColor: '#181818'}}
            options={locationsData}
          />
          {/* <input type="text" placeholder="enter location name" className="flex-1 bg-[#181818] px-3 py-2 border-0" /> */}
          <span className="flex items-center bg-[#181818] px-3"><SearchOutlined /></span>
        </div>
      </div>
      <div className="leading-3 flex flex-1 flex-wrap  gap-3 p-4 rounded-xl bg-[#202022] max-w-full">
        <div className="">
          <h2 className="p-0 m-0 uppercase ">Place</h2>
          <p className="m-0 p-0">Location</p>
        </div>
        <div className="flex flex-1 items-stretch">
          <Select showSearch placeholder="enter location name" optionFilterProp="children" 
            filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            className="flex-1 bg-[#181818] px-3 py-2 border-0 placeholder:text-white" 
            style={{backgroundColor: '#181818'}}
            options={locationsData}
          />
          {/* <input type="text" placeholder="enter location name" className="flex-1 bg-[#181818] px-3 py-2 border-0" /> */}
          <span className="flex items-center bg-[#181818] px-3"><SearchOutlined /></span>
        </div>
      </div>

      <div className="leading-3 flex-1 flex-wrap flex gap-3 p-4 rounded-xl bg-[#202022]">
        <div className="">
          <h2 className="p-0 m-0 uppercase ">Manual</h2>
          <p className="m-0 p-0">entry</p>
        </div>
        <div className="flex flex-1 items-stretch">
          <input type="text" placeholder="22.3423421" className="flex-1 bg-[#181818] px-3 border-0" />
          <div className="flex items-end p-2">Lat</div>
        </div>
      </div>

      <div className="leading-3 flex-1 flex-wrap flex gap-3 p-4 rounded-xl bg-[#202022]">
        <div className="">
          <h2 className="p-0 m-0 uppercase ">Manual</h2>
          <p className="m-0 p-0">entry</p>
        </div>
        <div className="flex flex-1 items-stretch">
          <input type="text" placeholder="9.34234221" className="flex-1 bg-[#181818] px-3 border-0" />
          <div className="flex items-end p-2">Long</div>
        </div>
      </div>
      <hr className="w-full border-[#333]" />
    </div>
  )
}

function Cards() {
  const [manualLocArr,setManualLocArr] = useState([]);

  useEffect(() => {
    setManualLocArr([ManualLoc]);
  },[])

  function addLocation() {
    setManualLocArr([...manualLocArr,ManualLoc]);
  }

  return (
    <div className="flex flex-col gap-4">
    <div className="flex gap-10 items-center flex-wrap">
      <DocCard />

      <div className="flex-1 flex flex-col flex-wrap gap-7  text-[#777] max-w-full ">
        <div className="gap-4 flex-1 flex text-[#777]  max-w-full ">
          <div className="leading-3 flex-1 flex flex-wrap gap-3 p-4 rounded-xl bg-[#202022] max-w-full">
            <div className="">
              <h2 className="p-0 m-0 uppercase ">Upload File</h2>
              <p className="m-0 p-0">CSV</p>
            </div>
            <div className="flex flex-1 items-stretch">
              <input type="text" placeholder="enter path" className="flex-1 bg-[#181818] px-3 py-2 border-0" />
              <input type='submit' value='Browse' className="btn_sty1  font-bold !bg-btnprimary/40 !text-btnprimary !border-btnprimary/10" />
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Manual Entry */}
    <div className="flex gap-4 items-start flex-wrap">
      <div className="flex flex-1 gap-4 items-start flex-wrap">
        <div className="flex flex-col flex-1 gap-4">
          {
            [manualLocArr.map((ManualElem,i) => (
              <ManualElem key={i} />
              ))]
            }
        </div>
        <input type='submit' value='+' onClick={addLocation} className="btn_sty1 self-end !font-extrabold self-end !text-2xl !px-6 rounded-md !bg-btnprimary/40 !text-btnprimary !border-btnprimary/10" />
      </div>


      <div className="leading-3 flex gap-3 p-4 rounded-xl bg-[#202022] ">
        <div className="">
          <h2 className="p-0 m-0 uppercase ">Driver</h2>
          <p className="m-0 p-0">optional</p>
        </div>
        <div className="flex flex-1 items-stretch">
          <input type="text" className="flex-1 bg-[#181818] px-3 border-0" />
        </div>
      </div>
    </div>
    <div className="flex gap-4 flex-wrap">
      <div className="leading-3 flex-1  flex gap-3 p-4 rounded-xl bg-[#202022] ">
        <div className="">
          <h2 className="p-0 m-0 uppercase ">Export</h2>
          <p className="m-0 p-0">Type</p>
        </div>
          <input type='submit' value='PDF' className="btn_sty1 !bg-btnprimary !border-btnprimary" />
          <input type='submit' value='CSV' className="btn_sty1 !bg-[#181818] !border-[#181818]" />
          <input type='submit' value='JSON' className="btn_sty1 !bg-[#181818] !border-[#181818]" />
      </div>
      <input type='submit' value='Generate' className="btn_sty1 flex-1 !text-2xl font-bold !bg-btnprimary/40 !text-btnprimary !border-btnprimary/10" />
    </div>

    </div>
  )
}

function OnDemand() {
  return (
    <div className="w-full text-[#ccc] text-child flex flex-wrap gap-4">
      <div className="flex-1 flex flex-col gap-6 max-w-full">
        <APIToken />
        <ApiDetail />
        <Cards />
      </div>
      <div className="flex w-full items-start md:w-auto">
        <BillingHistory />
      </div>
    </div>
  )
}

export default OnDemand;
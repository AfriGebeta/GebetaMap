import { SearchOutlined } from "@ant-design/icons";
import React from "react";
import ApiDetail from "../../components/Account/ApiDetail";
import APIToken from "../../components/Account/ApiToken";
import BillingHistory from "../../components/Account/BillingHistory";
import DocCard from "../../components/Account/DocCard";


function Cards() {
  return (
    <div className="flex flex-col gap-4">
    <div className="flex gap-10 items-center flex-wrap">
      <DocCard />

      <div className="flex-1 flex flex-col flex-wrap gap-7  text-[#777] ">
        <div className="leading-3 flex gap-3 p-4 rounded-xl bg-[#202022] ">
          <div className="">
            <h2 className="p-0 m-0 uppercase ">Geocoding</h2>
            <p className="m-0 p-0">endpoint</p>
          </div>
          <div className="flex flex-1 items-stretch">
            <input type="text" placeholder="enter location name" className="flex-1 bg-[#181818] px-3 border-0" />
            <span className="flex items-center bg-[#181818] px-3"><SearchOutlined /></span>
          </div>
        </div>
        <div className="gap-4  flex-wrap flex-1 min-w-[200px] text-[#777] flex ">
          <div className="leading-3 flex-1 flex gap-3 p-4 rounded-xl bg-[#202022] ">
            <div className="">
              <h2 className="p-0 m-0 uppercase ">Upload File</h2>
              <p className="m-0 p-0">CSV</p>
            </div>
            <div className="flex flex-1 items-stretch">
              <input type="text" placeholder="enter path" className="flex-1 bg-[#181818] px-3 border-0" />
              <input type='submit' value='Browse' className="btn_sty1  font-bold !bg-btnprimary/40 !text-btnprimary !border-btnprimary/10" />
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Manual Entry */}
    <div className="flex gap-4 items-start">
      <div className="flex flex-col flex-1 gap-4">
        <div className="flex gap-4">
          <div className="leading-3 flex-1 flex gap-3 p-4 rounded-xl bg-[#202022]">
            <div className="">
              <h2 className="p-0 m-0 uppercase ">Manual</h2>
              <p className="m-0 p-0">entry</p>
            </div>
            <div className="flex flex-1 items-stretch">
              <input type="text" placeholder="enter location name" className="flex-1 bg-[#181818] px-3 border-0" />
              <div className="flex items-end p-2">Lat</div>
            </div>
          </div>

          <div className="leading-3 flex-1 flex gap-3 p-4 rounded-xl bg-[#202022]">
            <div className="">
              <h2 className="p-0 m-0 uppercase ">Manual</h2>
              <p className="m-0 p-0">entry</p>
            </div>
            <div className="flex flex-1 items-stretch">
              <input type="text" placeholder="9.34234221" className="flex-1 bg-[#181818] px-3 border-0" />
              <div className="flex items-end p-2">Long</div>
            </div>
          </div>

          <input type='submit' value='+' className="btn_sty1 !font-extrabold !text-2xl !px-6 rounded-md !bg-btnprimary/40 !text-btnprimary !border-btnprimary/10" />
        </div>

        <div className="flex gap-4">
          <div className="leading-3 flex-1 flex gap-3 p-4 rounded-xl bg-[#202022]">
            <div className="">
              <h2 className="p-0 m-0 uppercase ">Manual</h2>
              <p className="m-0 p-0">entry</p>
            </div>
            <div className="flex flex-1 items-stretch">
              <input type="text" placeholder="enter location name" className="flex-1 bg-[#181818] px-3 border-0" />
              <div className="flex items-end p-2">Lat</div>
            </div>
          </div>

          <div className="leading-3 flex-1 flex gap-3 p-4 rounded-xl bg-[#202022]">
            <div className="">
              <h2 className="p-0 m-0 uppercase ">Manual</h2>
              <p className="m-0 p-0">entry</p>
            </div>
            <div className="flex flex-1 items-stretch">
              <input type="text" placeholder="9.34234221" className="flex-1 bg-[#181818] px-3 border-0" />
              <div className="flex items-end p-2">Long</div>
            </div>
          </div>

          <input type='submit' value='+' className="btn_sty1 !font-extrabold !text-2xl !px-6 rounded-md !bg-btnprimary/40 !text-btnprimary !border-btnprimary/10" />

        </div>

        <div className="flex gap-4">
          <div className="leading-3 flex-1 flex gap-3 p-4 rounded-xl bg-[#202022]">
            <div className="">
              <h2 className="p-0 m-0 uppercase ">Manual</h2>
              <p className="m-0 p-0">entry</p>
            </div>
            <div className="flex flex-1 items-stretch">
              <input type="text" placeholder="enter location name" className="flex-1 bg-[#181818] px-3 border-0" />
              <div className="flex items-end p-2">Lat</div>
            </div>
          </div>

          <div className="leading-3 flex-1 flex gap-3 p-4 rounded-xl bg-[#202022]">
            <div className="">
              <h2 className="p-0 m-0 uppercase ">Manual</h2>
              <p className="m-0 p-0">entry</p>
            </div>
            <div className="flex flex-1 items-stretch">
              <input type="text" placeholder="9.34234221" className="flex-1 bg-[#181818] px-3 border-0" />
              <div className="flex items-end p-2">Long</div>
            </div>
          </div>
          <input type='submit' value='+' className="btn_sty1 !font-extrabold !text-2xl !px-6 rounded-md !bg-btnprimary/40 !text-btnprimary !border-btnprimary/10" />
        </div>
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
    <div className="flex gap-4 ">
      <div className="leading-3 flex-1 flex gap-3 p-4 rounded-xl bg-[#202022] ">
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
      <div className="flex-1 flex flex-col gap-6">
        <APIToken />
        <ApiDetail />
        <Cards />
      </div>
      <div className="">
        <BillingHistory />
      </div>
    </div>
  )
}

export default OnDemand;
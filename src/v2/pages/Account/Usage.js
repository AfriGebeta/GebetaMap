import React from "react";
import ApiDetail from "../../components/Account/ApiDetail";
import APIToken from "../../components/Account/ApiToken";
import APIUsage from "../../components/Account/ApiUsage";
import BillingHistory from "../../components/Account/BillingHistory";
import DocCard from "../../components/Account/DocCard";


function Cards() {
  const objs = [
    {
      package: 'ONM',
      calls: 1002
    },
    {
      package: 'Matrix',
      calls: 1002
    },
    {
      package: 'Direction',
      calls: 1002
    },
    {
      package: 'Tss',
      calls: 1002
    }
  ]
  return (
    <div className="flex gap-10 items-center flex-wrap">
      <DocCard />

      <div className="flex-1 flex flex-wrap gap-7 justify-evenly">
        {
          objs.map((data,i) => (
            <div key={i} className="p-4 bg-[#202022] flex-1  text-[#777] rounded-xl flex justify-between">
              <div className="leading-3">
                <h2 className="p-0 m-0">{data.package}</h2>
                <p className="m-0 p-0">endpoint</p>
              </div>
              <div className="flex items-end">
                <h1 className="m-0">{data.calls}</h1>
                <span>Calls</span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

function Usage() {
  return (
    <div className="w-full text-[#ccc] text-child flex flex-wrap gap-4">
      <div className="flex-1 flex flex-col gap-6">
        <APIToken />
        <ApiDetail />
        <Cards />
        <APIUsage />
      </div>
      <div className="">
        <BillingHistory />
      </div>
    </div>
  )
}

export default Usage;
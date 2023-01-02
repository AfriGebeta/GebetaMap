import React from "react";
import {ReactComponent as DirectionIcon} from '../../../assets/icons/direct.svg';
import {ReactComponent as SettingsIcon} from '../../../assets/icons/settings.svg';
import ApiDetail from "../../components/Account/ApiDetail";
import DocCard from "../../components/Account/DocCard";
import APIToken from "../../components/Account/ApiToken";
import APIUsage from "../../components/Account/ApiUsage";
import BillingHistory from "../../components/Account/BillingHistory";


function Cards() {
  return (
    <div className="flex gap-10 items-center flex-wrap">
      <DocCard />

      <div className="flex-1">
        <div className="p-6 bg-[#202022]  text-[#777] rounded-xl">
          <div className="flex gap-4 items-center px-5 py-2">
            <SettingsIcon className="" fill="#777" />
            <h2 className="m-0 uppercase">Business Pac.</h2>
            <DirectionIcon />
          </div>
          <div className="leading-3 py-3">
            <h2>
              Tikus D.
            </h2>
            <span className="!m-0 !p-0 ">Standard Client</span>
          </div>
        </div>
      </div>

      <div className="flex-1 ">
        <div className="p-6 bg-[#202022]  text-[#777] rounded-xl">
          <div className="flex gap-4 items-center px-5 py-2">
            <SettingsIcon className="" fill="#777" />
            <h2 className="m-0 uppercase">23,000.00 <tiny>calls</tiny></h2>
            <DirectionIcon />
          </div>
          <div className="leading-3 py-3">
            <h2>
              25,000.00 <tiny>calls</tiny>
            </h2>
            <span className="!m-0 !p-0 ">98.00%</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function Dashboard() {
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

export default Dashboard;
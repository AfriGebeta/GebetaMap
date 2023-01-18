import React from "react";
import ApiDetail from "../../components/Account/ApiDetail";
import APIToken from "../../components/Account/ApiToken";
import BillingHistory from "../../components/Account/BillingHistory";
import DocCard from "../../components/Account/DocCard";
import {ReactComponent as ListIcon} from '../../../assets/icons/Polygon-icon.svg';
import { StarFilled } from "@ant-design/icons";


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
    <div className="flex gap-6 items-stretch flex-wrap">
      <DocCard />

      <div className="flex-1 flex flex-wrap gap-7 justify-evenly">
        {
          objs.map((data,i) => (
            <div key={i} className="p-4 bg-[#202022] flex-wrap flex-1 min-w-[200px] text-[#777] rounded-md flex justify-between">
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
function Plan({data}) {
  if(!data) return null;
  return (
    <div className={"card flex-1 py-8 px-4 rounded-md flex flex-col gap-4 text-white min-w-[200px] max-w-[300px] "+
    (data.status !== 'current' ? "bg-[#202022]" : "bg-[#f2994a]/20")
    }>
      <div className="flex-1">
        <h3>{data.name}</h3>
        <div className="flex gap-2 items-end">
          <div className="self-stretch pt-2">
            <sup className=" ">$</sup>
          </div>
          <h1 className="m-0 inline-block">
            {data.price}
          </h1>
          <small className="text-[12px]">per 1000 calls</small>
        </div>
        <hr className="border-gray-500" />
        <p className="max-w-[300px]">
          {data.description}
        </p>
      </div>
      <div className="flex-1 mb-10 min-h-[170px]">
        <h2 className="!font-normal">Core Features</h2>
        <h4>{data.name}</h4>
        {data.features.map((feature,i) => (
          <li className="flex list-none items-center gap-3" key={i}><ListIcon />{feature}</li>
        ))}
      </div>
      <div >
        {data.status === 'current' ? 
          <button className="border-white p-4 py-2 w-full flex items-center justify-center gap-2">Current Plan <StarFilled /></button>
          : 
          <button className="border-white p-4 py-2 w-full">Select Plan </button>
        }
      </div>
    </div>
  )
}
function Plans() {
  const list = [
    {
      name: 'Starter',
      price: '2.00',
      description: 'GebetaMap’s Starter plan if your API usage is 0 - 100000 API calls.',
      features: [
        'Geocoding Endpoint','Direction Endpoint','Matrix Endpoint','Route Optimization'
      ]
    },
    {
      name: 'Business',
      price: '1.75',
      description: 'GebetaMap’s Business plan if your API usage is 100001 - 500000 API calls.',
      features: [
        'Geocoding Endpoint','Direction Endpoint','Matrix Endpoint','Route Optimization'
      ]
    },
    {
      name: 'Professional',
      price: '1.50',
      description: 'GebetaMap’s Professional plan if your API usage is 500001 - 1000000 API calls.',
      features: [
        'Geocoding Endpoint','Direction Endpoint','Matrix Endpoint','Route Optimization'
      ],
      status: 'current'
    },
    {
      name: 'Premium',
      price: '1.00',
      description: 'GebetaMap’s Premium plan if your API usage is 1000001 - 5000000 API calls.',
      features: [
        'Geocoding Endpoint','Direction Endpoint','Matrix Endpoint','Route Optimization'
      ]
    }

  ]
  return (
    <div className="flex gap-6 flex-wrap ">
      {list.map((data,i) => (
        <Plan data={data} key={i} />
      ))}
    </div>
  )
}
function PricePlans() {
  return (
    <div className="w-full text-[#ccc] text-child flex flex-wrap gap-4">
      <div className="flex-1 flex flex-col gap-6 max-w-full">
        <APIToken />
        <ApiDetail />
        <Cards />
        <Plans />
      </div>
      <div className="flex w-full items-start md:w-auto">
        <BillingHistory />
      </div>
    </div>
  )
}

export default PricePlans;
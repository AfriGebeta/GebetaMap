import React from "react";
import { useState } from "react";


function ApiDetail() {
  const [detail] = useState(
    {
      status: 'active',
      type: 'pay-as-you-go',
      nextbilling: 'Feb 28,2022',
      totalusage: '23,127 Calls',
      maxusage: {
        directionEP: '78%'
      },
      minusage: {
        matrixEP: '3%'
      }
    }
  );
  return (
    <div className="flex flex-wrap md:flex-nowrap gap-10 items-center px-4 py-3 bg-[#202022] ">
      <div className="leading-3 flex flex-row-rev flex-wrap items-center gap-2 ">
        <h4 className="m-0">API Token Status</h4>
        <span className="text-green-500">{detail.status}</span>
      </div>
      <div className="leading-3 flex flex-row-rev flex-wrap items-center gap-2 ">
        <h4 className="m-0">Subscription Type</h4>
        <span className="text-green-500">{detail.type}</span>
      </div>
      <div className="leading-3 flex flex-row-rev flex-wrap items-center gap-2 ">
        <h3 className="!text-secondary m-0">{detail.nextbilling}</h3>
        <h4 className="m-0">Next Billing</h4>
      </div>
      <div className="leading-3 flex flex-row-rev flex-wrap items-center gap-2 ">
        <h3 className="!text-secondary m-0">{detail.totalusage}</h3>
        <h4 className="m-0">Total Usage</h4>
      </div>
      <div className="leading-3 flex flex-row-rev flex-wrap items-center gap-2 ">
        <h3 className="!text-secondary m-0">Direction Endpoint - {detail.maxusage.directionEP}</h3>
        <h4 className="m-0">Max Usage</h4>
      </div>
      <div className="leading-3 flex flex-row-rev flex-wrap items-center gap-2 ">
        <h3 className="!text-secondary m-0">Matrix Endpoint - {detail.minusage.matrixEP}</h3>
        <h4 className="m-0">Min Usage</h4>
      </div>
    </div>
  )
}

export default ApiDetail;
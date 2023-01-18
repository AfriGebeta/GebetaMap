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
    <div className="flex gap-10 items-center px-4 py-3 bg-[#202022] overflow-x-auto snap-x scroll-shadow">
      <div className="leading-4 pl-2 flex flex-row-rev flex-wrap items-center whitespace-nowrap snap-start">
        <h4 className="m-0 pr-2">API Token Status</h4>
        <span className="text-green-500">{detail.status}</span>
      </div>
      <div className="leading-4 pl-2 flex flex-row-rev flex-wrap items-center whitespace-nowrap snap-start">
        <h4 className="m-0 pr-2">Subscription Type</h4>
        <span className="text-green-500">{detail.type}</span>
      </div>
      <div className="leading-4 pl-2 flex flex-row-rev flex-wrap items-center whitespace-nowrap snap-start">
        <h4 className="!text-secondary m-0 pr-2">{detail.nextbilling}</h4>
        <h4 className="m-0">Next Billing</h4>
      </div>
      <div className="leading-4 pl-2 flex flex-row-rev flex-wrap items-center whitespace-nowrap snap-start">
        <h4 className="!text-secondary m-0 pr-2">{detail.totalusage}</h4>
        <h4 className="m-0">Total Usage</h4>
      </div>
      <div className="leading-4 pl-2 flex flex-row-rev flex-wrap items-center whitespace-nowrap snap-start">
        <h4 className="!text-secondary m-0 pr-2">Direction Endpoint - {detail.maxusage.directionEP}</h4>
        <h4 className="m-0">Max Usage</h4>
      </div>
      <div className="leading-4 pl-2 flex flex-row-rev flex-wrap items-center whitespace-nowrap snap-start">
        <h4 className="!text-secondary m-0 pr-2">Matrix Endpoint - {detail.minusage.matrixEP}</h4>
        <h4 className="m-0">Min Usage</h4>
      </div>
    </div>
  )
}

export default ApiDetail;
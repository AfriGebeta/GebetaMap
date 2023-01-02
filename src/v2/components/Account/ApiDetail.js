import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { format, add } from "date-fns";

function ApiDetail() {
  const { userData } = useSelector((state) => state.user);
  const { metrics } = useSelector((state) => state.metrics);
  console.log("the matrix", metrics);
  const [detail] = useState({
    status: "active",
    type: "pay-as-you-go",
    nextbilling: "Feb 28,2022",
    totalusage: "23,127 Calls",
    maxusage: {
      directionEP: "78%",
    },
    minusage: {
      matrixEP: "3%",
    },
  });

  const getMaximumMetrics = () => {
    return Object.keys(metrics).reduce((a, b) =>
      metrics[a] > metrics[b] ? a : b
    );
  };

  const getMinimumMetrics = () => {
    return Object.keys(metrics).reduce((a, b) =>
      metrics[a] < metrics[b] ? a : b
    );
  };

  const getTotalUsage = () => {
    let result = 0;
    for (let p in metrics) {
      result += metrics[p];
    }
    return result;
  };

  const getNextPaymentDate = () => {
    try {
      const result = format(
        add(new Date(userData.purchasedDate), { days: 30 }),
        "yyyy/MM/dd"
      );
      return result;
    } catch (err) {
      return "";
    }
  };
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
        <h3 className="!text-secondary m-0">{getNextPaymentDate()}</h3>
        <h4 className="m-0">Next Billing</h4>
      </div>
      <div className="leading-3 flex flex-row-rev flex-wrap items-center gap-2 ">
        <h3 className="!text-secondary m-0">{getTotalUsage()}</h3>
        <h4 className="m-0">Total Usage</h4>
      </div>
      <div className="leading-3 flex flex-row-rev flex-wrap items-center gap-2 ">
        <h3 className="!text-secondary m-0">
          {getMaximumMetrics()} - {metrics[getMaximumMetrics()]}
        </h3>
        <h4 className="m-0">Max Usage</h4>
      </div>
      <div className="leading-3 flex flex-row-rev flex-wrap items-center gap-2 ">
        <h3 className="!text-secondary m-0">
          {getMinimumMetrics()} - {metrics[getMinimumMetrics()]}
        </h3>
        <h4 className="m-0">Min Usage</h4>
      </div>
    </div>
  );
}

export default ApiDetail;

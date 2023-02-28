import React from "react";
import { useSelector } from "react-redux";

function CurrentPlan() {
  const { metrics } = useSelector((state) => state.metrics);

  const Total = metrics.onm + metrics.direction + metrics.matrix + metrics.tss;

  const list = [
    {
      name: "Starter",
      status: Total >= 0 && (Total <= 100000) ? 'current' : ''
    },
    {
      name: "Business",
      status: Total >= 100001 && (Total <= 500000) ? 'current' : ''
    },
    {
      name: "Professional",
      status: Total >= 500001 && (Total <= 1000000) ? 'current' : ''
    },
    {
      name: "Premium",
      status: Total >= 1000001 && (Total <= 5000000) ? 'current' : ''
    },
  ];
  
  return (
    <>
      {list.find((obj) => obj.status === 'current').name} Account
    </>
  )

}

export {CurrentPlan};
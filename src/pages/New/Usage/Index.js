import { DatePicker, Select } from "antd";
import React from "react";


const {Option} = Select;
const {RangePicker} = DatePicker;

function Index() {
  return (
    <div className="sw py-4 flex flex-col gap-10">
      <div>
        <h2 className="text-white">Usage Statistics</h2>
        <div className="flex items-center text-white gap-3">
          <Select defaultValue="All Api Keys" className="btn-sty1 !rounded-full">
            <Option value="All Api Keys">All Api Keys</Option>
            <Option value="Free Public Keys">Free Public Keys</Option>
          </Select>
          <span>For</span>
          <Select defaultValue="Last Month">
            <Option value="Last Week">Last Week</Option>
            <Option value="Last Month">Last Month</Option>
            <Option value="Last Year">Last Year</Option>
          </Select>
          <span>From</span>
          <RangePicker  />
        </div>
      </div>
      <div className="text-white">
        <h2 className="text-white mb-0">Sep, 09 - 22 2022</h2>
        <span className="lowercase mb-4 inline-block">ALL DATES START AT 00:00 ETHIOPIAN LT</span>
        <div className="border border-dashed rounded-md border-white p-10 flex items-center justify-center">
          <h3 className="text-white">
            You don't have any account activity for the selected period and API key.
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Index;
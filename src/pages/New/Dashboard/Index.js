import { CopyOutlined, DeleteFilled, SyncOutlined } from "@ant-design/icons";
import { Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";


const {TextArea} = Input;

function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col gap-3 text-white min-w-[200px] ">
      <div className="flex  justify-between">
        <div>
          <h3 className="text-white m-0">Account</h3>
          <small>username</small>
        </div>
        <Link to="/">Edit Account</Link>
      </div>

      <div className="flex justify-between">
        <div>
          <h3 className="text-white m-0">Price Plan</h3>
          <small>
            pay as you go
            <br />
            <Link to="/">View pricing plans</Link>
          </small>
        </div>
        <Link to="/">Premium Plan</Link>
      </div>
    </div>
  )
}
function ApiDoc() {
  return (
    <div className="card2 uppercase">
      <h2 className="text-white ">
        <span className="text-primary">Gebeta</span>Maps
        <br />
        Routing & Direction API
      </h2>
      <Link to="/documentation" className="btn-sty1 my-2">Api Documentation</Link>
    </div>
  )
}
function Plan() {
  return (
    <div className="card2 uppercase child-text-white">
      <h3>Tikus</h3>
      <h3>Current Plan : <span className="text-[#00AF3C]">Premium</span></h3>
      <h3>Remaining Request : <span className="text-[#00AF3C]">49877</span></h3>
      <h3>Status : <span className="text-[#00AF3C]">Granted</span></h3>
    </div>
  )
}
function ApiKeys(props) {
  return (
    <div className={"card2  uppercase "+props.className}>
      <div className="flex flex-col">
        <h2 className="text-white">Api Keys</h2>
        <Link to="/" className="btn-sty1 self-start my-6">+ Create Tokens</Link>
        <div>
          <div className="flex justify-between">
            <h3 className="text-white">Current Token</h3>
            <div className="flex gap-3">
              <SyncOutlined className="!text-blue-500 cursor-pointer" />
              <DeleteFilled className="!text-red-600 cursor-pointer" />
            </div>
          </div>
        </div>
        <Input placeholder="API Key"
          value="pk.eyJ1IjoidGhvdGlhbmEiLCJhIjoiY2w5aWFsb3A1MDFtMjN2bGxjY2Ezc2poMyJ9.2Jqd5dWr-swO3iS0HlmqwQ"
          className="resize-none rounded-md"
          suffix={<CopyOutlined className="cursor-pointer" />}
          autoSize
        />
      </div>
    </div>
  )
}
function Boards() {
  return (
    <div className="flex-1">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ApiDoc />
        <Plan />
        <ApiKeys className='md:col-span-2' />
      </div>
    </div>
  )
}
function Index() {
  return (
    <div className="sw py-4">
      <div className="flex gap-10">
        <Boards />
        <Sidebar />
      </div>
    </div>
  )
}

export default Index;
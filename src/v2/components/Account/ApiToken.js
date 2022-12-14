import React from "react";
import { CopyOutlined, DeleteFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { createRef } from "react";
import { useSelector } from "react-redux";


function APIToken() {
  const { userData } = useSelector((state) => state.user);
  const input = createRef();

  function copyToClipboard() {
    input.current.select();
    document.execCommand('copy');
    input.current.blur();
  }
  return (
    <div className="flex gap-4 items-center bg-[#202022] px-4 py-3 text-[#aaa] text-child">
      <h4 className="m-0 px-4">API Token</h4>
      <input type='text' ref={input} value={userData.token} className="bg-transparent p-1 flex-1" />
      <div className="flex gap-6">
        <EyeInvisibleFilled className="cursor-pointer" />
        <CopyOutlined className="cursor-pointer" onClick={copyToClipboard}/>
        <DeleteFilled className="cursor-pointer" />
      </div>
    </div>
  )
}

export default APIToken;
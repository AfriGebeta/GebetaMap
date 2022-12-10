import React, { createContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import TextLogo from '../../../assets/images/logowithtext.png';
import Icon, {BellOutlined,MenuOutlined,HomeOutlined,MailOutlined,EditFilled,UserOutlined,SecurityScanOutlined,DollarCircleFilled} from '@ant-design/icons';
import avatar from '../../../assets/images/maleavatar.png';


const LinkContext = createContext('linkDisp');

function SideLink({label,iconComp,to,active}) {
  return (
    <LinkContext.Consumer>
      {
        (type) => (
          <Link to={to} className="flex gap-1 items-center mt-2 !text-secondary hover:!text-[#ffa81d] relative w_hvr">
            {active ? <div className="border-0 h-full border-r-[5px] !drop-shadow-lg !shadow-black rounded-r-md border-[#FF971D]"></div> 
            : <div className="border-r-[6px]"></div>}
            <Icon component={iconComp} className=" px-[5px] py-3" />
            <span className={"inline-block pr-5"+(type==='hidden'?' hvr_trgt p-0 absolute left-12 shadow-xl shadow-black whitespace-nowrap bg-[#1e1e1e] ':'')}>{label}</span>
          </Link>
        )
      }
    </LinkContext.Consumer>
  )
}
function SideBar() {
  const [type,setType] = useState('hidden');

  function handleMenu() {
    setType(type === 'hidden'?'':'hidden');
  }
  return (
    <div className="bg-[#1e1e1e] ">
      <div className="flex flex-col ">
        <div className="flex items-center text-white text-child border-b border-gray-700 shadow-md py-2 z-0">
          <div className="flex items-center w-52 ">
            <MenuOutlined className="py-2 px-4 cursor-pointer" onClick={handleMenu}/>
            <Link to="/v2"> <img src={TextLogo} alt='Gebeta Maps' className="" /></Link>
          </div>
          <div className="flex-1 flex items-center">
            <h3 className="flex-1 px-4 m-0">
              Dashboard
            </h3>
          </div>
          <div className="flex items-center ">
            <div className="flex gap-4">
              <span><BellOutlined /></span>
              <span><MailOutlined /></span>
            </div>
            <div className="flex items-center  mx-10">
              <div className="w-10 h-10 overflow-hidden rounded-full ">
                <img src={avatar} alt='profile' className="w-full h-full" />
              </div>
              <div className="leading-3">
                <span className="!m-0 !p-0 ">Tikus Tikus</span>
                <small className="text-secondary m-0 p-0 block">Standard Client</small>
              </div>
            </div>
          </div>
        </div>

        <LinkContext.Provider value={type}>
        <div className="flex relative">
          {/* SideBar */}
          <div className="h-screen flex flex-col pr-2 sticky top-0 shadow-xl shadow-black z-10 bg-[#1e1e1e] py-5">
            <SideLink label='Dashboard' iconComp={HomeOutlined} to="/v2/account" active={true} />
            <SideLink label='Usage' iconComp={UserOutlined} to="/v2/account/usage"/>
            <SideLink label='Account & Security' iconComp={SecurityScanOutlined} to="/v2/account/tokens"/>
            <SideLink label='Edit Profile' iconComp={EditFilled} to="/v2/account/profile"/>
            <SideLink label='Price Plan' iconComp={DollarCircleFilled} to="/v2/account/plans"/>
            <SideLink label='Contact Us' iconComp={MailOutlined} to="/v2/account/contact"/>

          </div>
          <div className=" flex-1 overflow-hidden p-5 flex justify-center">
            <Outlet />
          </div>
        </div>
        </LinkContext.Provider>
      </div>
    </div>
  )
}

export default SideBar;
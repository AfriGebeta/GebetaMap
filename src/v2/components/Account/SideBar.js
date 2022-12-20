import React, { createContext, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import TextLogo from '../../../assets/images/logowithtext.png';
import Icon, {BellOutlined,MenuOutlined,HomeOutlined,MailOutlined,EditFilled,UserOutlined,SecurityScanOutlined,DollarCircleFilled} from '@ant-design/icons';
import avatar from '../../../assets/images/maleavatar.png';
import '../../../v2.css';


const LinkContext = createContext('linkDisp');

function SideLink({label,iconComp,to,active}) {
  return (
    <LinkContext.Consumer>
      {
        (type) => (
          <Link to={to} className={"flex gap-1 items-center mt-2 text-white hover:!text-[#ffa81d] relative w_hvr "+(active?'!text-secondary':'')}>
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
  const location = useLocation();
  const url = (location.pathname.split("/")[3] || "dashboard").toLowerCase();


  function handleMenu() {
    setType(type === 'hidden'?'':'hidden');
  }
  return (
    <div className="!bg-dark ">
      <div className="flex flex-col min-h-screen ">
        <div className="flex items-center text-white text-child border-b border-gray-700 shadow-md py-2 z-0">
          <div className="flex items-center w-56 ">
            <MenuOutlined className="py-2 px-4 cursor-pointer" onClick={handleMenu}/>
            <Link to="/v2"> <img src={TextLogo} alt='Gebeta Maps' className="" /></Link>
          </div>
          <div className="flex-1 flex items-center">
            <h3 className="flex-1 px-4 m-0 capitalize">
              {url}
            </h3>
          </div>
          <div className="flex items-center ">
            <div className="flex gap-4">
              <span><BellOutlined /></span>
              <span><MailOutlined /></span>
            </div>
            <div className="flex items-center  mx-10">
              <div className="w-12 h-12 overflow-hidden rounded-full ">
                <img src={avatar} alt='profile' className="w-full h-full" />
              </div>
              <div className="leading-4">
                <span className="!m-0 !p-0 ">Tikus Tikus</span>
                <small className="text-secondary m-0 p-0 block">Standard Client</small>
              </div>
            </div>
          </div>
        </div>

        <LinkContext.Provider value={type}>
        <div className="flex relative ">
          {/* SideBar */}
          <div className="h-full min-h-screen flex flex-col pr-2 sticky top-0 shadow-xl shadow-black z-10 bg-dark py-5">
            <SideLink label='Dashboard' iconComp={HomeOutlined} to="/v2/account" active={url === 'dashboard'} />
            <SideLink label='Usage' iconComp={UserOutlined} to="/v2/account/usage" active={url === 'usage'}/>
            <SideLink label='Account & Security' iconComp={SecurityScanOutlined} to="/v2/account/tokens" active={url === 'tokens'}/>
            <SideLink label='Edit Profile' iconComp={EditFilled} to="/v2/account/profile" active={url === 'profile'}/>
            <SideLink label='Price Plan' iconComp={DollarCircleFilled} to="/v2/account/plans" active={url === 'plans'}/>
            <SideLink label='Contact Us' iconComp={MailOutlined} to="/v2/account/contact" active={url === 'contact'}/>

          </div>
          <div className="flex-1 overflow-hidden relative">
            <div className="p-5 flex flex-col items-center">
              <Outlet />
            </div>
            <div className="bg-[#222] p-1 px-4 flex gap-6 w-full bottom-0 text-[#ddd] text-child">
              <Link to="/"><small>Privacy Policy</small></Link>
              <Link to="/"><small>Terms of Use</small></Link>
            </div>
          </div>
        </div>
        </LinkContext.Provider>
      </div>
    </div>
  )
}

export default SideBar;
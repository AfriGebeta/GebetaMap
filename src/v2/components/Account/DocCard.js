import React from 'react';
import {ReactComponent as Logo} from '../../../assets/images/maplogo.svg';
import {ReactComponent as LocTargetIcon} from '../../../assets/icons/locTarget.svg';


function DocCard() {
  return (
    <div className="p-6 bg-[#202022] text-[#777] rounded-xl max-w-full overflow-clip  ">
      <div className="flex gap-4 items-center px-5 py-2">
        <Logo className="" fill="#777" />
        <h2 className="m-0 uppercase">Api<br /> Documentation</h2>
        <LocTargetIcon />
      </div>
      <div className="leading-3 py-3">
        <span className="!m-0 !p-0 ">powered by</span>
        <h2>
          GebetaMaps
        </h2>
      </div>
    </div>
  )
}

export default DocCard;
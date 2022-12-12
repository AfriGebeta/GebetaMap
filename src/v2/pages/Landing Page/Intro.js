import React from "react";
import {ReactComponent as Running} from '../../../assets/images/running.svg';
import vidPic from '../../../assets/images/vidpic.png';


function Intro() {
  return (
    <div className="flex justify-center w-full">
      <div className="flex sw lg:justify-center text-white text-child ">
        <div className=" flex flex-col gap-10 py-10  justify-center min-w-[400px]">
          <div>
            <h1 className="m-0">GebetaMaps</h1>
            <h1 className="m-0">Routing, Direction</h1>
            <h1 className="m-0">and Map API Service</h1>
            <p className="uppercase text-[#8476AA] m-0">Let us find your way</p>
          </div>
          <div className="flex gap-4 ">
            <button className="btn_sty2">Learn More</button>
            <button className="btn_sty1">Get Started</button>
          </div>
          <div className="flex items-center ">
            <img src={vidPic} className="" alt='Preview' />
            <div className="px-2 flex-1">
              <p className="capitalize m-0 text-[#8476AA]">
                Geo-Coding, Matrix Endpoint
                Direction Endpoint, One-to-many Endpoint
              </p>
              <p className=" m-0 p-0">Watch Preview</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 max-h-full flex justify-center">
          <Running className="min-w-[800px] object-cover"/>
        </div>
      </div>
    </div>
  )
}

export default Intro;
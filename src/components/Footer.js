import { FacebookFilled, LinkedinFilled, TwitterSquareFilled } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <div className="py-10 my-10">
      <h2 className="mr-6 self-start m-0">
        <span className="text-secondary font-black">gebeta</span>
        <span className="text-white font-black">maps</span>
      </h2>
      <div className="flex justify-between color_inherit text-slate-300">
        <div className="flex flex-col">
          <h3 className="uppercase">Products</h3>
          <Link to="/#">Route Optimzation API</Link>
          <Link to="/#">Direction API</Link>
          <Link to="/#">Matrix Endpoint</Link>
          <Link to="/#">One-to-many Endpoint</Link>
          <Link to="/#">Geocoding Endpoint</Link>
        </div>
        <div className="flex flex-col ">
          <h3 className="uppercase">Company</h3>
          <Link to="/contact">Contact Us</Link>
          <Link to="/about" >About</Link>
          <Link to="/contact" >Leave Feedback</Link>
        </div>
      </div>
      <div className="flex gap-10 justify-center py-4 color_inherit text-white">
        <Link to="facebook.com/gebetamaps"><FacebookFilled className="text-[20px] " /></Link>
        <Link to="linkedin.com/gebetamaps"><LinkedinFilled className="text-[20px] " /></Link>
        <Link to="twitter.com/gebetamaps"><TwitterSquareFilled className="text-[20px] " /></Link>
      </div>
    </div>
  )
}

export default Footer;
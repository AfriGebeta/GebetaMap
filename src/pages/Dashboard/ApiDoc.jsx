import React , {useEffect , useState} from "react";
import { Link } from "react-router-dom";
import { Polygon } from "./../../features/Object/Polygon";
import {ReactComponent as MyLocation} from './../../assets/icons/My location.svg';
import { useSelector, useDispatch } from "react-redux"

export default function ApiDoc() {
  return (
    <div>
      <div className="flex flex-col mx-[5%]  ">
        <div className="card">
          <h2 className=""><span className="text-primary">Gebeta</span>Maps Routing  API</h2>
          <p>Proudly Made In Ethiopia By Proud Ethiopians</p>
          <br />
          <Link to="/documentation" className="btn inline-block">API DOCUMENATION</Link>
        </div>
      </div>
    </div>
  )
}

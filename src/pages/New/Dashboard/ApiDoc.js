import React , {useState , useEffect} from "react";
import { Link } from "react-router-dom";
import {url} from "./../../../data/url"
import ClipLoader from "react-spinners/ClipLoader";



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

export default ApiDoc;
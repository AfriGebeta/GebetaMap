import { tss } from "../../data/index";
import React, { useState, useEffect } from "react";
import ApiDetail from "../../components/Account/ApiDetail";
import APIToken from "../../components/Account/ApiToken";
import { v4 as uuid } from 'uuid';
import DocCard from "../../components/Account/DocCard";
import L from "leaflet";
import axios from "axios";
import "./phonestyle.css"
import socketIO from "socket.io-client";
import {socket} from "./../../socket/socket"

import {
  MapContainer,
  TileLayer,
  useMap,
  Polyline,
  useMapEvents,
  Marker,
  Popup,
  Polygon,
  FeatureGroup,
  EditControl,
} from "react-leaflet";
const uuidv4 = require("uuid").v4;

function OneTimeSms() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const [time, setTime] = React.useState("fetching");
  const [default_latitude, setDefaultLatitude] = React.useState(9.02151);
  const [default_longitude, setDefaultLongitude] = React.useState(38.80115);
  const [gpslatitude, setGpsLatitude] = React.useState(null);
  const [gpslongitude, setGpsLongitude] = React.useState(null);
  const [uniquetoken , setUniqueToken] = React.useState(null)
  const [phone , setPhone] = React.useState("")
  
  const baseurl = "http://localhost:8080"
  // //const baseurl = "https://sms.gebeta.app"
  // const socket = socketIO.connect(baseurl);
   

  const RedIcon = L.icon({
    iconUrl: require("./../../components/Documentation/red.png"),
    iconRetinaUrl: require("./../../components/Documentation/red.png"),
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [35, 35],
    className: "leaflet-venue-icon",
  });



  //get token from localstrage if expired dont update uniquetoken
  useEffect(()=>{
      console.log(uniquetoken)
      socket.on( 'sendLatLng', function( data ) {
        console.log(data)
          if(data.status == "success"){
            if(data.token == uniquetoken){
              setGpsLatitude(data.latitude)
              setGpsLongitude(data.longitude)
         
              socket.close()
            }else{
              console.log('the socket')
              console.log(data.token)
              console.log(uniquetoken)

            }
          }
      })
    
  
    
  }, [uniquetoken]);

  const sendtophone = () => {
    console.log("sending sms")
    //generate uuid and send it with the phone
    const unique_id = uuid();
    const small_id = unique_id.slice(0,10)

    socket.emit('sendsms' , {
    
      phone: phone  ,
      token: small_id
     
    })

    localStorage.setItem('token', JSON.stringify({id : small_id , createdAt : Date.now()}));
    setUniqueToken(small_id)
    console.log(small_id)  
    // axios.post(`${baseurl}/sendsms`, {
    //   phone: phone  ,
    //   token: small_id
    // })
    // .then((response) => {
    
      
    // }, (error) => {
    //   alert("can not send")
    // });



    

  }
  const handlephone = (e) => {
    e.preventDefault()
    setPhone(e.target.value)

  }

  return (
    <div className="w-full text-[#ccc] text-child flex flex-wrap gap-6">
      <div className="flex-1 flex flex-col gap-6 max-w-full">
        <APIToken />
        <ApiDetail />
        <div className="flex flex-col gap-6">
          <div className="flex gap-6 items-stretch flex-wrap">
            <DocCard />
          </div>
          <div className="w-full">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row w-[50%] ">
                <div class="input-box mr-[2%]">
                  <span className="prefix">+251</span>
                  <input type="tel" placeholder="969136582" onChange={handlephone} className="rounded-md text-black"/>
                </div>
                <button class="w-[40%] h-[45px] px-6 text-white bg-[#ff971e] rounded-md " onClick={(e)=>{
                  e.preventDefault()
                  sendtophone()
                  }
                }>Send</button>
         
                 </div>
                 
              <div className="flex flex-col bg-white"></div>
            </div>
          </div>

          {/* Manual Entry */}
          <div className=" w-full">
            <div className=" w-full h-[600px] bg-red-200 mx-auto">
              <div className="leaflet-container">
                <MapContainer
                  center={[default_latitude, default_longitude]}
                  zoom={12}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  />

                  {gpslatitude != null && gpslongitude != null ? (
                    <Marker
                      icon={RedIcon}
                      position={[default_latitude, default_longitude]}
                    />
                  ) : (
                    ""
                  )}
                </MapContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneTimeSms;

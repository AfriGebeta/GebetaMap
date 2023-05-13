import { tss } from "../../data/index";
import React, { useState, useEffect ,useRef } from "react";
import ApiDetail from "../../components/Account/ApiDetail";
import APIToken from "../../components/Account/ApiToken";
import { v4 as uuid } from 'uuid';
import DocCard from "../../components/Account/DocCard";
import L from "leaflet";
import axios from "axios";
import "./phonestyle.css"
import socketIO from "socket.io-client";
import {socket} from "./../../socket/socket"
import { useSelector , useDispatch } from "react-redux";
import TextPath from "react-leaflet-textpath";
import { setLatLng } from "./../../redux/reducers/latlng"
import SmsMap from "./SmsMap";
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
  const dispatch = useDispatch();

  const [time, setTime] = React.useState("fetching");

  const [uniquetoken , setUniqueToken] = React.useState(null)
  const [phone , setPhone] = React.useState("")

  
  const baseurl = "http://localhost:8080"
  // //const baseurl = "https://sms.gebeta.app"
  // const socket = socketIO.connect(baseurl);

  //get token from localstrage if expired dont update uniquetoken
  useEffect(()=>{
     
      socket.on( 'sendLatLng', function( data ) {
        try{
     
          let internalToken = localStorage.getItem('token')
     
          if(internalToken != null){
    
            let jsondata = JSON.parse(internalToken)
         
             if(data.status == "success"){

                 

                  if(data.token.trim() == jsondata.id.trim()){
                    console.log("setting the latitude and longitude")
                    console.log(data)
                    console.log(jsondata.id)
                    dispatch(
                      setLatLng({
                        latitude: data.latitude,
                        longitude: data.longitude,
                        date: Date.now(),
                       
                      })
                    );
                   
                    //destroy the localstorage
                    localStorage.removeItem("token")
                  }else{
                    // console.log('the socket')
                  }
              }
          }
          
         
          
        }catch(err){
          console.log(err)
        }
         
      })
    
  
    
  }, []);

  const sendtophone = () => {
    console.log("sending sms and setting localstorage filess")
    //generate uuid and send it with the phone
    const unique_id = uuid();
    const small_id = unique_id.slice(0,10)
    setUniqueToken(small_id)
    localStorage.setItem('token', JSON.stringify({id : small_id , createdAt : Date.now()}));
    socket.emit('sendsms' , {
      phone: phone  ,
      token: small_id
    })
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

          <div className=" w-[90%] h-[500px] mb-[50px] bg-red-200">
          <SmsMap/>  
        </div>
           
        </div>
      </div>
    </div>
  );
}




export default OneTimeSms;






  // 
    
   
    // axios.post(`${baseurl}/sendsms`, {
    //   phone: phone  ,
    //   token: small_id
    // })
    // .then((response) => {
    
      
    // }, (error) => {
    //   alert("can not send")
    // });

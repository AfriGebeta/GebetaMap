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
import {
    MapContainer,
    TileLayer,

    Marker,
    Popup,

  } from "react-leaflet";
  const uuidv4 = require("uuid").v4;


delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});





function SmsMap(props){

    const { latlng } = useSelector((state) => state.latlng);
    const [default_latitude, setDefaultLatitude] = React.useState(9.02151);
    const [default_longitude, setDefaultLongitude] = React.useState(38.80115);
  
    const [gpslatitude, setGpsLatitude] = React.useState(null);
    const [gpslongitude, setGpsLongitude] = React.useState(null);
  
  
    useEffect(()=> {
  
      console.log("the state is sdafasfsdfasdf " , latlng)
    } , [latlng])


    return (



            <div className="leaflet-container">
                <MapContainer
                    center={[default_latitude, default_longitude]}
                    zoom={10}>
                    <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />

                    {
                      (latlng.latitude != null) ?
                      <CustomMarker phone={props.phone} data={{ position: [latlng.latitude , latlng.longitude] }}  /> :
                      ("")
                    }
        
                   
            
                </MapContainer>
            </div>
    
   
    )
}



const CustomMarker = ({ phone, data }) => {

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
  
    return (
      <Marker  position={data.position}>
        <Popup>
          <p>0{phone}</p>
          <p>{data.position[0]}, {data.position[1]}</p>
        
        </Popup>
      </Marker>





    );
  };


export default SmsMap
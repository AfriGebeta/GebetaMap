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


function SmsMap(){

    const { latlng } = useSelector((state) => state.latlng);
    const [default_latitude, setDefaultLatitude] = React.useState(9.02151);
    const [default_longitude, setDefaultLongitude] = React.useState(38.80115);
  
    const [gpslatitude, setGpsLatitude] = React.useState(null);
    const [gpslongitude, setGpsLongitude] = React.useState(null);
  
  
    useEffect(()=> {
  
      console.log("the state is sdafasfsdfasdf " , latlng)
    } , [latlng])


    return (
    <div className=" w-full">

      <div className=" w-full h-[600px]  mx-auto">
            <div className="leaflet-container">
                <MapContainer
                    center={[default_latitude, default_longitude]}
                    zoom={10}>
                    <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
        
                    <CustomMarker  data={{ position: [default_latitude , default_longitude] }}  /> 
            
                </MapContainer>
            </div>
      </div>
    </div>
    )
}



const CustomMarker = ({  data }) => {

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
      <Marker icon={RedIcon} position={data.position}>
        <Popup>
          <p>{data.position[0]}</p>
          <p>{data.position[1]}</p>
        </Popup>
      </Marker>





    );
  };


export default SmsMap
import { MapContainer, TileLayer, Polyline , useMapEvents , Marker , Popup , Polygon , FeatureGroup , EditControl} from 'react-leaflet';
import { useState } from 'react';
import L from 'leaflet';
import concaveman from 'concaveman';
import red from './red.png';
import green from './green.png';
const default_latitude = 9.02151;
const default_longitude = 38.80115;


function AddMarkerToClick() {

    const [markers, setMarkers] = useState([]);
    const [pos, setPos] = useState([]);
    const [l1, setL1] = useState("");
    const [lo1, setLO1] = useState("");
    const [position, setPosition] = useState(-1);
    const VenueLocationIcon = L.icon({
      iconUrl: position == 0 ? require('./green.png') : require('./red.png'), 
      iconRetinaUrl: position == 0 ? require('./green.png') : require('./red.png'),  
      iconAnchor: null,
      shadowUrl: null,
      shadowSize: null,  
      shadowAnchor: null,
      iconSize: [35, 35],
      className: 'leaflet-venue-icon'
    });


  const map = useMapEvents({
    click(e) {
      const newMarker = e.latlng
     
         let _gmarker = [];
          _gmarker.push(e.latlng);
          setMarkers(_gmarker);
       
        const url = "https://mapapi.gebeta.app/api/v1/route/driving/isodistance/?lat=" + newMarker.lat + "&lng=" + newMarker.lng 
        fetch(url)
          .then(response =>  response.json() )
          .then(data => setPos(data.places));
      
         
    },
  })
  
  //const jk = concaveman(pos)
  return (
    
      <div>
          {markers.map(marker => 
        <Marker position={marker} icon={ VenueLocationIcon }>
          <Popup>Marker is at {marker}</Popup>
        </Marker>
      )}
    

       { <FeatureGroup>
            <Polygon fillOpacity={0.4} stroke = {0} fillColor='green'  opacity={1} positions = {pos.length > 0 ? concaveman(pos) : []}  />;  
        </FeatureGroup>  } 
      
      </div>
    
    
  )
}



function ISODistance() {

  
  return (
    <div className='leaflet-container'>
      <MapContainer center={[default_latitude, default_longitude]} zoom={18}>
          <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <AddMarkerToClick/>


    </MapContainer>
    </div>
        

  );
}

export default ISODistance;

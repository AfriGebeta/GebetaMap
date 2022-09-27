import { MapContainer, TileLayer, Polyline , useMapEvents , Marker , Popup , Polygon , FeatureGroup , EditControl} from 'react-leaflet';
import { useState } from 'react';
import L from 'leaflet';
import { oneToMany } from './../../data/index';
const default_latitude = 9.02151;
const default_longitude = 38.80115;



function AddMarkerToClick(props) {

  const [rmarker, redMarker] = useState([]);
  const [gmarker, greenMarker] = useState([]);
  const [sets , Setter] = useState(false)
  const [l1, setL1] = useState("");
  const [lo1, setLO1] = useState("");
  const [endPoints, setEndPoints] = useState([])
  const [pos , setPos] = useState([])

  const RedIcon = L.icon({
  iconUrl:  require('./red.png'), 
  iconRetinaUrl:  require('./red.png'),  
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,  
  shadowAnchor: null,
  iconSize: [35, 35],
  className: 'leaflet-venue-icon'
  });
  

const GreenIcon = L.icon({
  iconUrl: require('./green.png') , 
  iconRetinaUrl:  require('./green.png') ,  
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,  
  shadowAnchor: null,
  iconSize: [35, 35],
  className: 'leaflet-venue-icon'
  });
  
  
  async function callOnm(start , gmarker) {
    try {
    
      const data = await oneToMany(start,gmarker, "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjb21wYW55bmFtZSI6ImdlYmV0YSIsImlkIjoiYjAxOWYzOTEtMGU3OS00YTI0LWJjZjktZDc2NzM1YmQ4ZTdiIiwidXNlcm5hbWUiOiJnZWJldGEifQ.zZJxoBCU5oqOuS7ozsKC-_jECnKtqLzKuJtOLYOCyZM")
 
      setPos(data.directions)
    } catch (err) {
      console.log(err)
    } 
       
     
  }
  const map = useMapEvents({
    click(e)  {
      const newMarker = e.latlng
      
      if (props.start && props.stop != true) {
      
          setL1(newMarker.lat);
          setLO1(newMarker.lng);  
          let _gmarker = [];
          _gmarker.push(e.latlng);
          greenMarker(_gmarker);
      }
      
      if (props.stop && props.start != true) {
        
        rmarker.push(e.latlng);
        Setter(!sets)
         
      }
    
    },
  })

  if (props.calculate) {
    callOnm({lat : l1 , lon : lo1} ,  rmarker);
      
  }
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

  return (
    
      <div>
          {rmarker.map(marker => 
        <Marker position={marker} icon={ RedIcon }>
          <Popup>Marker is at {marker}</Popup>
        </Marker>
      )} 

        {gmarker.map(marker => 
        <Marker position={marker} icon={ GreenIcon }>
          <Popup>Marker is at {marker}</Popup>
        </Marker>
      )}

      
       {pos.map(position => 
         <Polyline positions={position.direction} color={ getRandomColor()} />
      )}
       
      
      </div>
    
    
  )
}


function OneToMany(props) {




  return (
        <div className='leaflet-container relative'>
            <MapContainer center={[default_latitude, default_longitude]} zoom={18}>
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
            <AddMarkerToClick key={0} start={props.start} stop={props.stop} calculate={props.calculate}/>
            </MapContainer>
        </div>     
  );
}

export default OneToMany;

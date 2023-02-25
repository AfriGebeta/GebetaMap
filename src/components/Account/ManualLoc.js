import { SearchOutlined } from "@ant-design/icons";
import { Select } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { geocoding } from "../../data/index";
import { setTssData } from "../../redux/reducers/tssData";

const ManualLoc = (props) => {
  const dispatch = useDispatch();
  const { tssData } = useSelector((state) => state.tssData);
  const [locationsData, setLocationData] = useState([]);
  const { userData } = useSelector((state) => state.user);
  const [searchValue] = useState(null);
  const [lat,setLat] = useState(null);
  const [long,setLong] = useState(null);
  const [placeName,setPlaceName] = useState(null);
  //import tssData

  let handleTssData = (e, index, type) => {
    let newIndex = returnIndex(index);

    const newData = [...tssData];
    const ds = {
      id: newData[newIndex].id,
      longitude:
        type !== "longitude" ? newData[newIndex].longitude : e.target.value,
      latitude:
        type !== "latitude" ? newData[newIndex].latitude : e.target.value,
      placename:
        type !== "placename" ? newData[newIndex].placename : e.target.value,
    };
    newData[newIndex] = ds;

    dispatch(setTssData(newData));
  };

  let handleDelete = (index) => {
    let newIndex = returnIndex(index);

    const newData = [...tssData];

    newData.splice(newIndex - 1, 1);
    dispatch(setTssData(newData));
  };

  // let returnPlaceName = (id) => {
  //   for (let i = 0; i < tssData.length; i++) {
  //     if (tssData[i].id == id) {
  //       return tssData[i].placename;
  //     }
  //   }

  //   return "";
  // };

  // let returnLatitude = (id) => {
  //   for (let i = 0; i < tssData.length; i++) {
  //     if (tssData[i].id == id) return tssData[i].latitude;
  //   }

  //   return "";
  // };

  // let returnLongitude = (id) => {
  //   for (let i = 0; i < tssData.length; i++) {
  //     if (tssData[i].id == id) return tssData[i].longitude;
  //   }

  //   return "";
  // };

  let returnIndex = (id) => {
    for (let i = 0; i < tssData.length; i++) {
      if (tssData[i].id === id) return i;
    }
  };

  let handleSearch = () => {
    geocoding(searchValue, userData.token).then((data) => {
      if (data.msg === "ok") {
        setLocationData(data.data);
      }
    });
  };

  const geoLocChange = async (value) => {
    const obj = (locationsData.find(obj => obj.value === value));
    setPlaceName(obj.value);
    setLat(obj.lat)
    setLong(obj.long)
    searchValue(value);
    
  };
  const geoLocSearch = async(value) => {
    // const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjb21wYW55bmFtZSI6ImdlYmV0YSIsImlkIjoiZDIyOWU3YWQtMTkxYS00ODU0LWE4MmEtNmM3NWI1Zjk2MzkwIiwidXNlcm5hbWUiOiJnZWJldGF1c2VyIn0.DCviuf0-xKaHNG8gwlKH6mRbYnzW-NHHj6psK8KWXrg';
    await geocoding(value, userData.token).then((data) => {
      if (data.msg === "ok") {
        let obj = data.data;
        // console.log("data: ",obj)
        let temp = [];
        obj.map((data) => {
          temp.push(
            {value: data.name,label: data.name,lat: data.latitude,long: data.longitude}
          )
          return null
        })
        setLocationData(temp);
      }
    });
  }
  return (
    <div className="flex gap-6 flex-wrap">
      <div className="leading-3 flex flex-1 sm:min-w-[50%] flex-wrap  gap-3 p-4 rounded-md bg-[#202022] max-w-full">
        <div className="">
          <h2 className="p-0 m-0 uppercase ">Geocoding</h2>
          <p className="m-0 p-0">endpoint</p>
        </div>
        <div className="flex flex-1 items-stretch">
          <Select
            showSearch
            placeholder="enter location name"
            // optionFilterProp="children"
            onChange={geoLocChange}
            onSearch={geoLocSearch}
            value={searchValue}
            // filterOption={(input, option) => {
            //   setSearchValue(input);
            //   (option?.name ?? "").toLowerCase().includes(input.toLowerCase());
            // }}
            className="flex-1 bg-[#181818] px-3 py-2 border-0 placeholder:text-white"
            style={{ backgroundColor: "#181818" }}
            options={locationsData}
          />
          {/* <input type="text" placeholder="enter location name" className="flex-1 bg-[#181818] px-3 py-2 border-0" /> */}
          <span className="flex items-center bg-[#181818] px-3">
            <SearchOutlined onClick={handleSearch} />
          </span>
        </div>
      </div>
      <div className="leading-3 flex flex-1 flex-wrap sm:min-w-[47%] gap-3 p-4 rounded-md bg-[#202022] max-w-full">
        <div className="">
          <h2 className="p-0 m-0 uppercase ">Place</h2>
          <p className="m-0 p-0">Name</p>
        </div>

        <input
          type="text"
          value={placeName}
          // value={returnPlaceName(props.index)}
          onChange={(e) => {
            handleTssData(e, props.index, "placename");
          }}
          placeholder=""
          className="flex-1 bg-[#181818] px-3 border-0 !min-w-[40px]"
        />
      </div>

      <div className="leading-3 flex-1 flex-wrap flex gap-3 p-4 rounded-md bg-[#202022] min-w-[47%]">
        <div className="">
          <h2 className="p-0 m-0 uppercase ">Manual</h2>
          <p className="m-0 p-0">entry</p>
        </div>
        <div className="flex flex-1 items-stretch max-w-[100%]">
          <input
            type="text"
            value={lat}
            // value={returnLatitude(props.index)}
            onChange={(e) => {
              handleTssData(e, props.index, "latitude");
            }}
            placeholder="22.3423421"
            className="flex-1 bg-[#181818] px-3 border-0 !min-w-[40px]"
          />
          <div className="flex items-end p-2">Lat</div>
        </div>
      </div>

      <div className="leading-3 flex-1 flex-wrap flex gap-3 p-4 rounded-md bg-[#202022]">
        <div className="">
          <h2 className="p-0 m-0 uppercase ">Manual</h2>
          <p className="m-0 p-0">entry</p>
        </div>
        <div className="flex flex-1 items-stretch">
          <input
            type="text"
            placeholder="38.238890"
            value={long}
            // value={returnLongitude(props.index)}
            onChange={(e) => {
              handleTssData(e, props.index, "longitude");
            }}
            className="flex-1 bg-[#181818] px-3 border-0"
          />
          <div className="flex items-end p-2">Long</div>
        </div>
      </div>
      <div className="leading-3 flex-2 flex-wrap flex gap-3 p-4 ">
        <input
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            handleDelete(props.index);
          }}
          value="Remove"
          className="btn_sty1 flex-1 !text-2xl font-bold !bg-btnprimary/40 !text-btnprimary !border-btnprimary/10"
        />
      </div>

      <hr className="w-full border-secondary/40" />
    </div>
  );
};

export default ManualLoc;
import { SearchOutlined } from "@ant-design/icons";
import { Select } from "antd";
import { geocoding, tss } from "../../data/index";
import React, { useState, useEffect } from "react";
import ApiDetail from "../../components/Account/ApiDetail";
import APIToken from "../../components/Account/ApiToken";
import BillingHistory from "../../components/Account/BillingHistory";
import DocCard from "../../components/Account/DocCard";
import { useSelector, useDispatch } from "react-redux";
import { setTssData } from "./../../redux/reducers/tssData";
import Notify from "./../../components/Notify";
import { jsPDF } from "jspdf";
import url from "../../data/url";

const ManualLoc = (props) => {
  const dispatch = useDispatch();
  let { tssData } = useSelector((state) => state.tssData);
  const [locationsData, setLocationData] = useState([]);
  const { userData } = useSelector((state) => state.user);
  const [searchValue, setSearchValue] = useState(null);
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [placeName, setPlaceName] = useState("");
  //import tssData

  let handleTssData = (e, index, type) => {
    let newIndex = returnIndex(index);

    let newData = tssData.map((obj) => ({
      ...obj,
    }));
    const ds = {
      id: newData[newIndex].id,
      longitude:
        type != "longitude" ? newData[newIndex].longitude : e.target.value,
      latitude:
        type != "latitude" ? newData[newIndex].latitude : e.target.value,
      placename:
        type != "placename" ? newData[newIndex].placename : e.target.value,
    };
    newData[newIndex] = ds;
    dispatch(setTssData(newData));
  };

  let handleDelete = (index) => {
    let newIndex = returnIndex(index);

    let newData = tssData.map((obj) => ({
      ...obj,
    }));
    newData.splice(newIndex - 1, 1);
    dispatch(setTssData(newData));
  };

  let returnPlaceName = (id) => {
    for (let i = 0; i < tssData.length; i++) {
      if (tssData[i].id == id) {
        return tssData[i].placename;
      }
    }

    return "";
  };

  let returnLatitude = (id) => {
    for (let i = 0; i < tssData.length; i++) {
      if (tssData[i].id == id) return tssData[i].latitude;
    }

    return "";
  };

  let returnLongitude = (id) => {
    for (let i = 0; i < tssData.length; i++) {
      if (tssData[i].id == id) return tssData[i].longitude;
    }

    return "";
  };

  let returnIndex = (id) => {
    for (let i = 0; i < tssData.length; i++) {
      if (tssData[i].id == id) return i;
    }
  };

  let handleSearch = () => {
    geocoding(searchValue, userData.token).then((data) => {
      if (data.msg == "ok") {
        setLocationData(data.data);
      }
    });
  };

  const geoLocChange = async (e, value) => {
    //const obj = locationsData.find((obj) => obj.value === value);
    console.log(value.value);
    setPlaceName(value.value);
    setLat(value.lat);
    setLong(value.long);
    // searchValue(value);

    try {
      console.log(tssData);
      let newIndex = returnIndex(props.index);

      let newArray = tssData.map((obj) => ({
        ...obj,
      }));

      newArray[newIndex].longitude = value.long;
      newArray[newIndex].latitude = value.lat;
      newArray[newIndex].placename = value.value;

      dispatch(setTssData(newArray));
    } catch (err) {
      console.log(err);
    }
  };
  const geoLocSearch = async (value) => {
    await geocoding(value, userData.token).then((data) => {
      if (data.msg == "ok") {
        let obj = data.data;

        let temp = [];
        obj.map((data) => {
          temp.push({
            value: data.name,
            label: data.name,
            lat: data.latitude,
            long: data.longitude,
          });
        });
        setLocationData(temp);
      }
    });
  };
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
            onChange={(e, i) => {
              geoLocChange(e, i);
            }}
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

function OnDemand() {
  const { tssData } = useSelector((state) => state.tssData);
  const [notify, setNotify] = useState({ visible: false });
  const [driverName, setDriverName] = useState("Unknown Driver");
  const { userData } = useSelector((state) => state.user);
  const [bestOrder, setBestOrder] = useState(null);
  const [totalTime, setTotalTime] = useState(null);
  const [totalDistance, setTotalDistance] = useState(null);
  const [selectedGenerated, setSelectedGenerated] = useState("Pdf");
  const dispatch = useDispatch();

  const handleDriverName = (e) => setDriverName(e.target.value);

  let addLocation = () => {
    if (tssData.length < 10) {
      const newData = [...tssData];
      const ds = {
        id: Date.now(),
        longitude: "",
        latitude: "",
        placename: "",
      };
      newData.push(ds);

      dispatch(setTssData(newData));
    } else {
      setNotify({
        visible: true,
        msg: "Sorry can not create more",
        type: "Sorry can not create more",
      });
    }
  };

  let handleCalculate = async () => {
    if (tssData.length < 2) {
      setNotify({
        visible: true,
        msg: "Please Enter More Amount",
        type: "Sorry can not create more",
      });
    } else {
      let error = false;
      for (let i = 0; i < tssData.length; i++) {
        if (
          tssData[i].latitude.trim() == "" ||
          tssData[i].longitude.trim() == ""
        ) {
          error = true;
        }
      }
      if (error) {
        setNotify({
          visible: true,
          msg: "Invalid Input",
          type: "Sorry can not create more",
        });
      } else {
        let gmarker = [];
        for (let i = 0; i < tssData.length; i++) {
          gmarker.push({
            lat: tssData[i].latitude,
            lng: tssData[i].longitude,
          });
        }
        //call tss

        tss(gmarker, userData.token).then((n) => {
          console.log(n);
          // timetaken
          // totalDistance
          setTotalTime(n.timetaken);
          setTotalDistance(n.totalDistance);
          setBestOrder(n);
        });
      }
    }
  };

  var generateData = function () {
    var result = [];
    let best = bestOrder.bestorder;
    for (let i = 0; i < best.length; i++) {
      var data = {
        placename: "placename",
        latitude: "latitude",
        longitude: "longitude",
      };
      data.id = (i + 1).toString();
      data.placename = tssData[best[i]].placename;
      data.latitude = tssData[best[i]].latitude;
      data.longitude = tssData[best[i]].longitude;
      result.push(Object.assign({}, data));
    }

    return result;
  };

  function createHeaders(keys) {
    var result = [];
    for (var i = 0; i < keys.length; i += 1) {
      result.push({
        id: keys[i],
        name: keys[i],
        prompt: keys[i],
        width: 65,
        align: "center",
        padding: 0,
      });
    }
    return result;
  }

  let handleGenerate = () => {
    var headers = createHeaders(["id", "placename", "latitude", "longitude"]);
    const doc = new jsPDF({ putOnlyUsedFonts: true, orientation: "portrait" });
    doc.text("Driver Name", 10, 40);
    doc.text(driverName, 60, 40);
    doc.text("Total Distance", 10, 60);
    doc.text(totalDistance.toString(), 60, 60);
    doc.table(10, 80, generateData(), headers, { autoSize: true });

    doc.save("tss.pdf");
  };
  return (
    <div className="w-full text-[#ccc] text-child flex flex-wrap gap-6">
      <div className="flex-1 flex flex-col gap-6 max-w-full">
        <APIToken />
        <ApiDetail />
        <div className="flex flex-col gap-6">
          <div className="flex gap-6 items-stretch flex-wrap">
            <DocCard />
            <Notify value={notify} />
            <div className="flex-1 flex flex-col  gap-7 text-[#777] max-w-full ">
              <div className="gap-4 flex h-1/2 text-[#777]  max-w-full ">
                <div className="leading-3 flex-1 flex flex-wrap gap-3 p-4 rounded-md bg-[#202022] max-w-full">
                  <div className="">
                    <h2 className="p-0 m-0 uppercase ">Upload File</h2>
                    <p className="m-0 p-0">CSV</p>
                  </div>
                  <div className="flex flex-1 items-stretch">
                    <input
                      type="text"
                      placeholder="enter path"
                      className="flex-1 bg-[#181818] px-3 py-2 border-0"
                    />
                    <input
                      type="submit"
                      value="Browse"
                      className="btn_sty1  font-bold !bg-btnprimary/40 !text-btnprimary !border-btnprimary/10"
                    />
                  </div>
                </div>
              </div>
              <div className="leading-3 h-1/2 flex gap-3 p-4  rounded-md bg-[#202022] ">
                <div className="">
                  <h2 className="p-0 m-0 uppercase ">Driver</h2>
                  <p className="m-0 p-0">optional</p>
                </div>
                <div className="flex flex-1 items-stretch">
                  <input
                    type="text"
                    value={driverName}
                    onChange={(e) => handleDriverName(e)}
                    className="flex-1 bg-[#181818] px-3 border-0"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Manual Entry */}
          <div className="flex gap-4 items-start flex-wrap">
            <div className="flex flex-1 gap-4 items-start flex-wrap">
              <div className="flex flex-col flex-1 gap-4">
                {tssData.map((n, i) => (
                  <ManualLoc Key={n.id} index={n.id} />
                ))}
              </div>
              <input
                type="submit"
                value="+"
                onClick={addLocation}
                className="btn_sty1 self-end !font-extrabold self-end !text-2xl !px-6 rounded-md !bg-btnprimary/40 !text-btnprimary !border-btnprimary/10"
              />
            </div>
          </div>
          <div className="flex gap-4 flex-wrap">
            <div className="leading-3 flex-1  flex gap-3 p-4 rounded-md bg-[#202022] ">
              <div className="">
                <h2 className="p-0 m-0 uppercase ">Export</h2>
                <p className="m-0 p-0">Type</p>
              </div>
              <input
                type="submit"
                value="PDF"
                onClick={() => {
                  setSelectedGenerated("Pdf");
                }}
                className={
                  selectedGenerated == "Pdf"
                    ? "btn_sty1 !bg-btnprimary !border-btnprimary"
                    : "btn_sty1 !bg-[#181818] !border-[#181818]"
                }
              />
              <input
                type="submit"
                value="CSV"
                disabled
                onClick={() => {
                  setSelectedGenerated("Csv");
                }}
                className={
                  selectedGenerated == "Csv"
                    ? "btn_sty1 !bg-btnprimary !border-btnprimary"
                    : "btn_sty1 !bg-[#181818] !border-[#181818]"
                }
              />
              <input
                type="submit"
                value="JSON"
                disabled
                onClick={() => {
                  setSelectedGenerated("Json");
                }}
                className={
                  selectedGenerated == "Json"
                    ? "btn_sty1 !bg-btnprimary !border-btnprimary"
                    : "btn_sty1 !bg-[#181818] !border-[#181818]"
                }
              />
            </div>

            <input
              type="submit"
              onClick={handleCalculate}
              value="Calculate"
              className="btn_sty1 flex-1 !text-2xl font-bold !bg-btnprimary/40 !text-btnprimary !border-btnprimary/10"
            />
            <input
              type="submit"
              onClick={handleGenerate}
              value="Generate"
              className="btn_sty1 flex-1 !text-2xl font-bold !bg-btnprimary/40 !text-btnprimary !border-btnprimary/10"
            />
          </div>
        </div>
      </div>
      <div className="flex w-full items-start md:w-auto">
        <BillingHistory />
      </div>
    </div>
  );
}

export default OnDemand;

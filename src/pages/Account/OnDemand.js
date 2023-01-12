import { SearchOutlined } from "@ant-design/icons";
import { Select } from "antd";
import { tss, geocoding } from "../../data/index";
import React, { useState, useEffect } from "react";
import ApiDetail from "../../components/Account/ApiDetail";
import APIToken from "../../components/Account/ApiToken";
import BillingHistory from "../../components/Account/BillingHistory";
import DocCard from "../../components/Account/DocCard";
import { useSelector, useDispatch } from "react-redux";
import { setTssData } from "./../../redux/reducers/tssData";
import Notify from "./../../components/Notify";
import { jsPDF } from "jspdf";

const ManualLoc = (props) => {
  const dispatch = useDispatch();
  const { tssData } = useSelector((state) => state.tssData);
  const [locationsData, setLocationData] = useState([]);
  const { userData } = useSelector((state) => state.user);
  const [searchValue, setSearchValue] = useState("");
  //import tssData

  let handleTssData = (e, index, type) => {
    let newIndex = returnIndex(index);

    const newData = [...tssData];
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

    const newData = [...tssData];

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

  const handleChange = (value) => {
    console.log(value);
  };
  return (
    <div className="flex gap-4 flex-wrap">
      <div className="leading-3 flex flex-1 min-w-[50%] flex-wrap  gap-3 p-4 rounded-xl bg-[#202022] max-w-full">
        <div className="">
          <h2 className="p-0 m-0 uppercase ">Geocoding</h2>
          <p className="m-0 p-0">endpoint</p>
        </div>
        <div className="flex flex-1 items-stretch">
          <Select
            showSearch
            placeholder="enter location name"
            optionFilterProp="children"
            // onChange={handleChange}
            value={searchValue}
            filterOption={(input, option) => {
              setSearchValue(input);
              (option?.name ?? "").toLowerCase().includes(input.toLowerCase());
            }}
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
      <div className="leading-3 flex flex-1 flex-wrap  gap-3 p-4 rounded-xl bg-[#202022] max-w-full">
        <div className="">
          <h2 className="p-0 m-0 uppercase ">Place</h2>
          <p className="m-0 p-0">Name</p>
        </div>

        <input
          type="text"
          value={returnPlaceName(props.index)}
          onChange={(e) => {
            handleTssData(e, props.index, "placename");
          }}
          placeholder=""
          className="flex-1 bg-[#181818] px-3 border-0"
        />
      </div>

      <div className="leading-3 flex-1 flex-wrap flex gap-3 p-4 rounded-xl bg-[#202022]">
        <div className="">
          <h2 className="p-0 m-0 uppercase ">Manual</h2>
          <p className="m-0 p-0">entry</p>
        </div>
        <div className="flex flex-1 items-stretch">
          <input
            type="text"
            value={returnLatitude(props.index)}
            onChange={(e) => {
              handleTssData(e, props.index, "latitude");
            }}
            placeholder="22.3423421"
            className="flex-1 bg-[#181818] px-3 border-0"
          />
          <div className="flex items-end p-2">Lat</div>
        </div>
      </div>

      <div className="leading-3 flex-1 flex-wrap flex gap-3 p-4 rounded-xl bg-[#202022]">
        <div className="">
          <h2 className="p-0 m-0 uppercase ">Manual</h2>
          <p className="m-0 p-0">entry</p>
        </div>
        <div className="flex flex-1 items-stretch">
          <input
            type="text"
            placeholder="38.238890"
            value={returnLongitude(props.index)}
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

      <hr className="w-full border-[#333]" />
    </div>
  );
};

function OnDemand() {
  const { tssData } = useSelector((state) => state.tssData);
  const [notify, setNotify] = useState({ visible: false });
  const [driverName, setDriverName] = useState("Unknown Driver");
  const { userData } = useSelector((state) => state.user);
  const [bestOrder, setBestOrder] = useState([]);
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
      }
    }
  };

  var generateData = function () {
    var result = [];
    var data = {
      placename: "placename",
      latitude: "latitude",
      longitude: "longitude",
    };
    for (var i = 0; i < tssData.length; i++) {
      var data = {
        placename: "placename",
        latitude: "latitude",
        longitude: "longitude",
      };
      data.id = (i + 1).toString();
      data.placename = tssData[i].placename;
      data.latitude = tssData[i].latitude;
      data.longitude = tssData[i].longitude;
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
    doc.table(10, 50, generateData(), headers, { autoSize: true });
    doc.save("tss.pdf");
  };
  return (
    <div className="w-full text-[#ccc] text-child flex flex-wrap gap-4">
      <div className="flex-1 flex flex-col gap-6 max-w-full">
        <APIToken />
        <ApiDetail />
        <div className="flex flex-col gap-4">
          <div className="flex gap-10 items-center flex-wrap">
            <DocCard />
            <Notify value={notify} />
            <div className="flex-1 flex flex-col flex-wrap gap-7  text-[#777] max-w-full ">
              <div className="gap-4 flex-1 flex text-[#777]  max-w-full ">
                <div className="leading-3 flex-1 flex flex-wrap gap-3 p-4 rounded-xl bg-[#202022] max-w-full">
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
              <div className="leading-3 flex gap-3 p-4 rounded-xl bg-[#202022] ">
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
            <div className="leading-3 flex-1  flex gap-3 p-4 rounded-xl bg-[#202022] ">
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
              onClick={handleGenerate}
              value="Generate"
              className="btn_sty1 flex-1 !text-2xl font-bold !bg-btnprimary/40 !text-btnprimary !border-btnprimary/10"
            />
            <input
              type="submit"
              onClick={handleCalculate}
              value="Calculate"
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

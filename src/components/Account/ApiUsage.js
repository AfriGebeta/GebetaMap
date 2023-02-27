import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { url } from "./../../data/url";
import { Line } from "react-chartjs-2";
import { format } from "date-fns";

function APIUsage() {
  const { userData } = useSelector((state) => state.user);

  const [labels, setLabels] = useState([]);
  const [data, setData] = useState([]);
  const [selectedGraph, setSelected] = useState("All");

  function sortWithIndeces(toSort) {
    for (var i = 0; i < toSort.length; i++) {
      toSort[i] = [toSort[i], i];
    }
    toSort.sort(function (left, right) {
      return left[0] < right[0] ? -1 : 1;
    });
    let sortIndices = [];
    for (var j = 0; j < toSort.length; j++) {
      sortIndices.push(toSort[j][1]);
      toSort[j] = toSort[j][0];
    }

    return sortIndices;
  }

  useEffect(() => {
    fetch(
      `${url}/api/v2/route/apicalls/getMonthlyApiCallForGraph?userid=${userData.id}`
    )
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        if (data.msg == "ok") {
          let _data = [];
          let _label = [];

          for (let i = 0; i < data.data.length; i++) {
            try {
              _label.push(
                format(new Date(parseInt(data.data[i][0])), "YYY-MM-dd")
              );
              _data.push(data.data[i][1]);
            } catch (err) {}
          }

          let index = sortWithIndeces(_label);

          const output = index.map((i) => _data[i]);

          setLabels(_label);
          setData(output);
        }
      });
  }, []);

  function changeFilter(ev) {
    setSelected(ev.target.value);
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        display: false,
      },
      title: {
        display: true,
        text: "Api Usage Graph",
      },
    },
  };

  const datas = {
    labels: labels,
    datasets: [
      {
        // label: "First dataset",
        data: data,
        fill: true,
        backgroundColor: "rgba(222,117,1,0.2)",
        borderColor: "rgba(222,117,0,1)",
      },
    ],
  };

  return (
    <div className="rounded-md px-4 py-3 bg-[#202022] ">
      <div className="flex justify-between items-center w-full sm:!sw">
        <div>
          <h2 className="m-0">API Usage</h2>
          <span>Track your api usage here</span>
        </div>
        <div className="flex gap-4 items-center ">
        </div>
      </div>
      <div>
      </div>
      <div className="text-white  ">
        <div className="border border-dashed rounded-md border-white p-10 flex items-center justify-center sm:h-[200px] md:h-[200px] lg:h-[600px]">
          {data.length > 0 ? (
            <Line options={options} data={datas} className="!w-full" />
          ) : (
            <h3 className="text-white">
              You don't have any account activity for the selected period and
              API key.
            </h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default APIUsage;

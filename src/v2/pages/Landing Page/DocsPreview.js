import React from "react";
import { Link } from "react-router-dom";


function DirectionEndPoint() {
  return (
    <div className="p-4 flex gap-3">
      <div className="flex-1 grow">
        <div className="bg-white w-[400px] h-52"></div>
        <h3 className="bg-[#19191a] p-2 !text-gray-400 border border-gray-800">
          Direction Endpoint
        </h3>
      </div>
      <div className="max-w-[400px] p-10">
        <p className='text-white'>
          You can find directions to your destination using the Gebeta Directions API. Using the Directions API, you can determine the best route to take.
        </p>
        <Link to="/documentation" className="btn_sty1">Documentation</Link>
      </div>
    </div>
  )
}
function GeoCodingEndPoint() {
  return (
    <div className="p-4 flex flex-row-reverse gap-3">
      <div className="flex-1 grow">
        <div className="bg-white w-[400px] h-52"></div>
        <h3 className="bg-[#19191a] p-2 !text-gray-400 border border-gray-800">
          GeoCoding Endpoint
        </h3>
      </div>
      <div className="max-w-[400px] p-10">
        <p className='text-white'>
        You can forward geocode using the Gebeta Geocoding API, which converts text queries like "Bole Edna Mall" into longitude and latitude coordinates.
        </p>
        <Link to="/documentation" className="btn_sty1">Documentation</Link>
      </div>
    </div>
  )
}
function RouteOptimization() {
  return (
    <div className="p-4 flex gap-3">
      <div className="flex-1 grow">
        <div className="bg-white w-[400px] h-52"></div>
        <h3 className="bg-[#19191a] p-2 !text-gray-400 border border-gray-800">
          Route Optimization Endpoint
        </h3>
      </div>
      <div className="max-w-[400px] p-10">
        <p className='text-white'>
          The Gebeta Optimization API returns a path between the input coordinates that is optimized. Planning the route for delivery in a city is a common use case for the Optimization API.
        </p>
        <Link to="/documentation" className="btn_sty1">Documentation</Link>
      </div>
    </div>
  )
}
function MatrixEndPoint() {
  return (
    <div className="p-4 flex flex-row-reverse gap-3">
      <div className="flex-1 grow">
        <div className="bg-white w-[400px] h-52"></div>
        <h3 className="bg-[#19191a] p-2 !text-gray-400 border border-gray-800">
          Matrix Endpoint
        </h3>
      </div>
      <div className="max-w-[400px] p-10">
        <p className='text-white'>
          By using the Gebeta Matrix API, you may choose the most efficient path between several places.
        </p>
        <Link to="/documentation" className="btn_sty1">Documentation</Link>
      </div>
    </div>
  )
}


function DocsPreview() {
  return (
    <div className="">
      <div className="flex flex-col bg1 items-center">
        <div className="sw flex justify-center text-white text-child">
          <div className="flex flex-col  gap-44">
            <DirectionEndPoint />
            <GeoCodingEndPoint />
            <RouteOptimization />
            <MatrixEndPoint />
          </div>
        </div>
      </div>
      <div className="p-4 flex justify-center gap-3">
        <div className="sw relative bg_locVector h-[350px]">
          {/* <img src={LocVector} className="inline-flex !w-full !h-full" alt='Location Vector' /> */}
        </div>
      </div>
    </div>
)
}

export default DocsPreview;
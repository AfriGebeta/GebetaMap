// import { Box, Slider } from '@mui/material';
import { Slider } from 'antd';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';



function Plans() {
  const [marks,setMarks] = useState({});
  const minMark = 0, maxMark = 200000;

  useEffect(() => {
    let marks = {};
    
    for(let i=minMark;i<=maxMark;i+=parseInt(maxMark/4)) {
      marks[i] = {
        style: {
          color: 'white'
        },
        label: <span className='text-white'>{i}</span>
      };
      // marks.push({
      //   value: i,
      //   style: {
      //     color: 'red'
      //   },
      //   label: <span classNme='text-white'>{i}</span>
      // })
    }
    console.log(marks)
    setMarks(marks)
  },[null])

  return (
    <div className='sw py-10 text-white'>
      <div className='flex justify-around'>
        <div className='flex-1'>
          <h3 className='text-white'>Price Plans</h3>
        </div>
        <div className='w-[86px] flex justify-center'>
          <h3 className='text-white'>COST</h3>
        </div>
      </div>

      {/* Plans */}
      
      <hr className=' border-gray-500' />
      <div className='flex flex-wrap '>
        <div className='w-full md:flex-1  flex flex-col gap-3 py-3 pb-6'>
          <div className='flex gap-2 items-center'>
            <h2 className='text-white uppercase my-auto !self-center'>Starter Package</h2>
            <Link to="/documentation#" className='btn-sty2'>Doc</Link>
          </div>
          <div className='flex gap-2'>
            <div className='text-white border-l-2 border-white p-2'>
              <span>ETB80 PER Thousand Calls</span>
            </div>
            <Link to="/" className='btn-sty2'>Choose Plan</Link>
          </div>
        </div>

        {/* Range */}
        <div className='flex-1 flex items-center px-4 gap-3'>
          <Slider included={false} marks={marks} defaultValue={1000000} min={minMark} max={maxMark} className="w-full" />
          <div className='grow px-6 text-center'>
            123123 <br />
            API_CALLS
          </div>
        </div>

        <div className='bg-[#252B43] flex items-center justify-center p-8 w-[86px]'>
          ETB_123123
        </div>
      </div>

      <hr className=' border-gray-500' />
      <div className='flex'>
        <div className='flex-1 flex flex-col gap-3 py-3 pb-6'>
          <div className='flex gap-2 items-center'>
            <h2 className='text-white uppercase my-auto !self-center'>Business Package</h2>
            <Link to="/documentation#" className='btn-sty2'>Doc</Link>
          </div>
          <div className='flex gap-2'>
            <div className='text-white border-l-2 border-white p-2'>
              <span>ETB68 PER Thousand Calls</span>
            </div>
            <Link to="/" className='btn-sty2'>Choose Plan</Link>
            <Link to="/" className='btn-sty2 !bg-green-500'>15% OFF</Link>
          </div>
        </div>

        {/* Range */}
        <div className='flex-1 flex items-center px-4 gap-3'>
          <Slider included={false} marks={marks} defaultValue={1000000} min={minMark} max={maxMark} className="w-full" />
          <div className='grow px-6 text-center'>
            123123 <br />
            API_CALLS
          </div>
        </div>

        <div className='bg-[#252B43] flex items-center justify-center p-8 w-[10%]'>
          ETB_123123
        </div>
      </div>

      <hr className=' border-gray-500' />
      <div className='flex'>
        <div className='flex-1 flex flex-col gap-3 py-3 pb-6'>
          <div className='flex gap-2 items-center'>
            <h2 className='text-white uppercase my-auto !self-center'>Professional Package</h2>
            <Link to="/documentation#" className='btn-sty2'>Doc</Link>
          </div>
          <div className='flex gap-2'>
            <div className='text-white border-l-2 border-white p-2'>
              <span>ETB52 PER Thousand Calls</span>
            </div>
            <Link to="/" className='btn-sty2'>Choose Plan</Link>
            <Link to="/" className='btn-sty2 bg-green-500'>30% OFF</Link>
          </div>
        </div>

        {/* Range */}
        <div className='flex-1 flex items-center px-4 gap-3'>
          <Slider included={false} marks={marks} defaultValue={1000000} min={minMark} max={maxMark} className="w-full" />
          <div className='grow px-6 text-center'>
            123123 <br />
            API_CALLS
          </div>
        </div>

        <div className='bg-[#252B43] flex items-center justify-center p-8 w-[10%]'>
          ETB_123123
        </div>
      </div>

      <hr className=' border-gray-500' />
      <div className='flex'>
        <div className='flex-1 flex flex-col gap-3 py-3 pb-6'>
          <div className='flex gap-2 items-center'>
            <h2 className='text-white uppercase my-auto !self-center'>Premium Package</h2>
            <Link to="/documentation#" className='btn-sty2'>Doc</Link>
          </div>
          <div className='flex gap-2'>
            <div className='text-white border-l-2 border-white p-2'>
              <span>ETB 40 PER Thousand Calls</span>
            </div>
            <Link to="/" className='btn-sty2'>Choose Plan</Link>
            <Link to="/" className='btn-sty2 bg-green-500'>50% OFF</Link>
          </div>
        </div>

        {/* Range */}
        <div className='flex-1 flex items-center px-4 gap-3'>
          <Slider included={false} marks={marks} defaultValue={1000000} min={minMark} max={maxMark} className="w-full" />
          <div className='grow px-6 text-center'>
            123123 <br />
            API_CALLS
          </div>
        </div>

        <div className='bg-[#252B43] flex items-center justify-center p-8 w-[10%]'>
          ETB_123123
        </div>
      </div>
    </div>
  )
}

export default Plans;
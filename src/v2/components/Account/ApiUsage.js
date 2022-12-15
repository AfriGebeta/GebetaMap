import React from 'react';


function APIUsage() {
  return (
    <div className="rounded-xl px-4 py-3 bg-[#202022] ">
      <div className='flex justify-between items-center w-full sm:!sw'>
        <div>
          <h2 className='m-0'>API Usage</h2>
          <span>Track your api usage here</span>
        </div>
        <div className='flex gap-4 items-center '>
          <label className='flex items-center gap-2'><input type='radio' name='filter' className='' value='all' /> All</label>
          <label className='flex items-center gap-2'><input type='radio' name='filter' className='' value='all' /> ONM</label>
          <label className='flex items-center gap-2'><input type='radio' name='filter' className='' value='all' /> Direction</label>
          <label className='flex items-center gap-2'><input type='radio' name='filter' className='' value='all' /> Tss</label>
          <label className='flex items-center gap-2'><input type='radio' name='filter' className='' value='all' /> Matrix</label>
        </div>
      </div>
      <div>
        <div className='bg-[#ff971d] rounded-lg px-6 py-2 my-4 inline-block'>
          <select className='text-white bg-[#ff971d]'>
            <option>Monthly (Oct)</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default APIUsage;
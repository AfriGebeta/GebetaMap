import { Input } from 'antd';
import React from 'react'
import Nav from './Nav';


function Profile() {
  return (
    <div className='sw py-10'>
      <div className='flex gap-4'>
        <Nav url='profile' />
        <div className='flex-1 flex flex-col items-center text-white'>
          <form className='card2 flex flex-col gap-3 w-2/3'>
            <h3 className='text-white'>Profile</h3>
            Organization
            <Input placeholder="Enter your organization's name" />
            Email
            <Input placeholder="Enter your organization's email" />
            <div className='py-5'>
              <input type='submit' className='btn-sty1 w-24 theme-light' value='Save' />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Profile;
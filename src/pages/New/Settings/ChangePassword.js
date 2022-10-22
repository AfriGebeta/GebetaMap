import { Input } from 'antd';
import React from 'react'
import Nav from './Nav';


function ChangePassword() {
  return (
    <div className='sw py-10'>
      <div className='flex gap-4'>
        <Nav url='password' />
        <div className='flex-1 flex flex-col items-center text-white'>
          <form className='card2 flex flex-col gap-3 w-2/3'>
            <h3 className='text-white'>Change Password</h3>
            Current Password
            <Input placeholder="Enter your current password" />
            New Password
            <Input placeholder="Enter a new password" />
            Confirm New Password
            <Input placeholder="Confirm your new password" />
            <div className='py-5'>
              <input type='submit' className='btn-sty1 w-24 theme-light' value='Save' />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ChangePassword;
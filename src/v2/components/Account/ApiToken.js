import React, { useState } from "react";
import { CopyOutlined, DeleteFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { createRef } from "react";
import { useSelector, useDispatch } from "react-redux"
import {url} from "./../../../data/url"
import { setUser } from "./../../../redux/reducers/user"
import Modal from "../../../features/Modal";


function APIToken() {
  const input = createRef();

  const { userData } = useSelector((state) => state.user)
  const [showTokenModal, setTokenModal] = useState(false)
  const [showLoading, setShowLoading] = useState(false)
  const [errorMessage , setErrorMessage] = useState("")
  const [description, setDescription] = useState("")
  const handleDescription = (event) => {
      setDescription(event.target.value)
    }
  const dispatch = useDispatch();


  const tokenView = () => {
      return (
         <div className="bg-[#aaa] shadow w-[300px] rounded-lg  divide-gray-200">
    <div className="px-5 py-7">
      <p className="text-red-600">{ errorMessage}</p>
      <label className="font-semibold text-sm text-black pb-1 block">description</label>       
      <input type="text" className="border  px-3 py-2 mt-1 mb-5 text-sm w-full text-black" value={description} onChange={handleDescription} />
  
       <div className=' py-7'>
       {
       showLoading ?
  
       <button type="button" className="w-[270px]  rounded-md bg-orange-200 text-black  py-2 mt-1 mb-5 transition duration-200 bg-blue-500 hover:bg-orange-500  focus:ring-opacity-50 text-white  py-2.5  text-sm shadow-sm hover:shadow-md font-semibold"
                        disabled
                                    onClick={(event) => {
                                      event.preventDefault()
                                       updateToken() 
                                    }}
                                  >
                                    <span className="inline-block ">Sign In</span>
  
                                </button>
                                :
       <button type="button" className="w-[270px]  rounded-md  text-white  py-2 mt-1 mb-5 transition duration-200 bg-[#1A1F32]  focus:ring-opacity-50 text-white  py-2.5  text-sm shadow-sm hover:shadow-md font-semibold "
                   onClick={(event) => {
                     event.preventDefault()
                       
                        updateToken() 
                   }}
                 >
                  Add
  
               </button>
  
  
       }
  
  
     
    </div>
    </div>
    
  
     
  </div>
    )
  }


//function to delete apiKey
const deleteToken = () => {
  try{
    setShowLoading(true)
    fetch(`${url}/api/v1/users/setToken` , {
               method: 'PUT',
               headers: {
                  'Content-type': 'application/json; charset=UTF-8' // Indicates the content
              },
              body: JSON.stringify({ id : userData.id , token  : "token"})

          }).
          then((data) => { return data.json() })
          .then((data) => {
                  dispatch(setUser(data.data))
                  })
                    setShowLoading(false)
  }catch(err){
    setShowLoading(false)
  }

}


const updateToken = () => {
  
  try{
  setShowLoading(true)
   fetch(`${url}/api/v1/users/setToken` , {
               method: 'PUT',
               headers: {
                  'Content-type': 'application/json; charset=UTF-8' // Indicates the content
              },
              body: JSON.stringify({ id : userData.id , email : description})

          }).
          then((data) => { return data.json() })
          .then((data) => {
              if (data.msg == "ok") {
                  dispatch(setUser(data.data))
                  setTokenModal(false)
              } else {
                  alert("failed")
                  setTokenModal(false)
                 }
                  })


    setShowLoading(false)

  } catch (err) {
      console.log(err)
              setShowLoading(false)
           }

}

function copyToClipboard() {
  input.current.select();
  document.execCommand('copy');
  input.current.blur();
}


  return (
    <div className="flex gap-4 items-center bg-[#202022] px-4 py-3 text-[#aaa] text-child">
    <Modal open={showTokenModal} close={() => { setTokenModal(false) }} 
      elem={tokenView()}>
    </Modal>

      <button className="btn-sty1 self-start my-6 bg-black/60 text-[#aaa] " onClick={() => setTokenModal(true)}>+ API Token</button>
      <input disabled type='text' ref={input} value={userData.token || ""} className="bg-transparent p-1 flex-1" />
      <div className="flex gap-6">
        <EyeInvisibleFilled className="cursor-pointer" />
        <CopyOutlined className="cursor-pointer" onClick={copyToClipboard}/>
        <DeleteFilled className="!text-red-600 cursor-pointer" onClick={(event) => { event.preventDefault(); deleteToken() }} />
      </div>
    </div>
  )
}

export default APIToken;
import React , {useState , useEffect} from 'react'

import { Link, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { setUser } from "./../redux/reducers/user"
import {url} from "./../data/url"
import ClipLoader from "react-spinners/ClipLoader";
export default function Profile() {

 const [username, setUserName] = useState("")
 const [password, setPassword] = useState("")
 const [companyname , setCompanyName] = useState("")
 const [email , setEmail] = useState("")
 const [message , setMessage] = useState("")
 const [showLoading , setShowLoading] = useState(false)
 const { userData } = useSelector((state) => state.user)
 const dispatch = useDispatch();

  const handleCompanyName  = (event) => {
    setCompanyName(event.target.value)
  }

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }
  const handleUsername = (event) => {
      setUserName(event.target.value)
  }

    const handlePassword = (event) => {
      setPassword(event.target.value)
    }
    const  empty = (str) =>
    {
        if (typeof str == 'undefined' || !str || str.length === 0 || str === "" || !/[^\s]/.test(str) || /^\s*$/.test(str) || str.replace(/\s/g,"") === "")
            return true;
        else
            return false;
    }


    const submit = () => {

    try{
     setShowLoading(true)


    let data = { id :  userData.id}
            if(!empty(username)){
                Object.assign(data, {"username":username})
            }
            if(!empty(password)){
                Object.assign(data, {"password":password})
            }
            if(!empty(companyname)){
                Object.assign(data, {"companyname":companyname})
            }
            if(!empty(email )){
                Object.assign(data, {"email":email})
                let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (!regEmail.test(email)) {
                        setMessage('Invalid Email Address')
                         throw 'Parameter is not a number!'
                }
            }
            fetch(`${url}/api/v1/users/updateprofile` , {
                         method: 'PUT',
                         headers: {
                            'Content-type': 'application/json; charset=UTF-8' // Indicates the content
                        },
                        body: JSON.stringify(data)

                    }).
                    then((data) => { return data.json() })
                    .then((data) => {
                    if(data.msg == "ok"){
                            dispatch(setUser(data.data))
                    }else{

                        setMessage(data.msg)
                    }

                            })
 setShowLoading(false)
    }catch(err){
        setShowLoading(false)
    }




    }




  return (

  showLoading ?
  <div class="grid h-screen place-items-center">  <ClipLoader color="#36d7b7" /></div>

   :
    <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="w-[50%] h-[70%] mt-[5%]">

             <div className="grid w-[90%] place-items-center">
                  <p className="text-red-600">{message}</p>
             </div>
            <div className="flex flex-row justify-between ">

                <div className=" w-[50%] mx-[2%]">
                    <label className="font-semibold text-sm  pb-1 block font-bold">username </label>
                     <input type="text" className="border  px-3 py-2 mt-1 mb-5 text-sm w-full text-black" value={username} onChange={handleUsername} />
                </div>
                <div className=" w-[50%] mx-[2%] ">
                    <label className="font-semibold text-sm  pb-1 block font-bold">Company Name</label>
                    <input type="text" className="border px-3 py-2 mt-1 mb-5 text-sm w-full text-black" value={companyname} onChange={handleCompanyName}/>
                </div>
            </div>
            <div className="flex flex-row justify-between mt-[5%]">
                    <div className=" w-[50%] mx-[2%]">
                                <label className="font-semibold text-sm  pb-1 block font-bold">Email</label>
                                 <input type="email" className="border  px-3 py-2 mt-1 mb-5 text-sm w-full text-black" value={email} onChange={handleEmail} />
                    </div>
                    <div className="w-[50%] mx-[2%]">
                                <label className="font-semibold text-sm  pb-1 block font-bold">Password</label>
                                <input type="text" className="border px-3 py-2 mt-1 mb-5 text-sm w-full text-black" value={password} onChange={handlePassword}/>
                    </div>

            </div>
        </div>
        <button type="button" className=" mt-[10%] px-[5%] py-2 mt-1 mb-5 transition duration-200 bg-black  text-white  py-2  text-sm shadow-sm font-semibold text-center inline-block"
                    onClick={(event) => {
                      event.preventDefault()
                      submit()
                    }}>
                    <span className="inline-block ">Save Changes</span>

                </button>
    </div>
  )
}



















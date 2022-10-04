import React , {useEffect , useState} from "react";
import { Link, Navigate } from "react-router-dom";
import { Polygon } from "./../../features/Object/Polygon";
import {ReactComponent as MyLocation} from './../../assets/icons/My location.svg';
import { useSelector, useDispatch } from "react-redux"
import { setUser } from "./../../redux/reducers/user"
import {url} from "./../../data/url"
import ClipLoader from "react-spinners/ClipLoader";
import Modal from "./../../features/Modal/index";
export default function Token() {
     const { userData } = useSelector((state) => state.user)
    const dispatch = useDispatch();
    const [showTokenModal, setTokenModal] = useState(false)
    const [showLoading, setShowLoading] = useState(false)
    const [errorMessage , setErrorMessage] = useState("")
    const [description, setDescription] = useState("")
    const handleDescription = (event) => {
    setDescription(event.target.value)
  }
    
  
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

    const tokenView = () => {
        return (
           <div className="bg shadow w-[300px] rounded-lg  divide-gray-200">
      <div className="px-5 py-7">
        <p className="text-red-600">{ errorMessage}</p>
        <label className="font-semibold text-sm text-gray-600 pb-1 block">description</label>       
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
         <button type="button" className="w-[270px]  rounded-md bg-orange-200 text-black  py-2 mt-1 mb-5 transition duration-200 bg-blue-500 hover:bg-orange-500  focus:ring-opacity-50 text-white  py-2.5  text-sm shadow-sm hover:shadow-md font-semibold "
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
  return (
   showLoading ?
    <div className="    mx-[2%]">  <div className="card flex justify-center"><ClipLoader color="#36d7b7" /></div></div>

     :
     <div className=" col-span-2    mx-[2%]">
          <div className="card ">
              <div className="flex justify-between w-full">
                      <p className="font-bold">Manage your API Key</p>
                      <Modal open={showTokenModal} close={() => { setTokenModal(false) }} elem={
                          
                         tokenView()
                      }>
              
                    </Modal>
                  {/*  */}
                    
                      <button type="button"
                          onClick={() => setTokenModal(true)}
                           className=" w-[150px] rounded-md bg-orange-200 text-black px-3 py-2 mt-1 mb-5 transition duration-200 bg-blue-500 hover:bg-orange-500  focus:ring-opacity-50 text-white w-full py-2.5  text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                  <span className="inline-block ">Add Api Key</span>
                  </button>
              </div>
              <div className="flex justify-between">
                  <p className="font-bold text-xl">apikey</p>
                  <p className="font-bold text-xl">options</p>
              </div>
            { userData.token != null ?  <div className="flex justify-between">
                  <p className="w-[80%] overflow-x-scroll px-[2%]">{ userData.token}</p>
                  <button onClick={(event) => { event.preventDefault();  deleteToken()}} type="button" className=" w-[150px] rounded-md bg-orange-200 text-black px-3 py-2 mt-1 mb-5 transition duration-200 hover:bg-orange-500 text-white w-full py-2.5  text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                  <span className="inline-block ">Delete</span>
                  </button>
              </div> : ""}
             
          </div>
          </div>
  )
}

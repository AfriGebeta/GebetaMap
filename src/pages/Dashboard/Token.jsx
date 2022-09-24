import React , {useEffect , useState} from "react";
import { Link, Navigate } from "react-router-dom";
import { Polygon } from "./../../features/Object/Polygon";
import {ReactComponent as MyLocation} from './../../assets/icons/My location.svg';
import { useSelector, useDispatch } from "react-redux"
import { setUser} from "./../../redux/reducers/user"
export default function Token() {
     const { userData } = useSelector((state) => state.user)
    const dispatch = useDispatch();
  
    const deleteToken = () => {
        
            fetch(`http://localhost:8080/api/v1/users/setToken` , {
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
    }


     const updateToken = () => {
       
         fetch(`http://localhost:8080/api/v1/users/setToken` , {
             method: 'PUT',
             headers: {
                'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
            },
            body: JSON.stringify({ id : userData.id})
            
        }).
        then((data) => { return data.json() })
        .then((data) => {
                dispatch(setUser(data.data))
                })
    }
  return (
     <div className="   col-span-2  mx-[2%]">
          <div className="card ">
              <div className="flex justify-between w-full">
                  <p className="font-bold">Manage your API Key</p>
                  <button type="button" onClick={(event) => { event.preventDefault();  updateToken()}} className=" w-[150px] rounded-md bg-orange-200 text-black px-3 py-2 mt-1 mb-5 transition duration-200 bg-blue-500 hover:bg-orange-500  focus:ring-opacity-50 text-white w-full py-2.5  text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
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

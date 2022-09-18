import React , {useState , useEffect} from "react";
import { useSelector, useDispatch } from "react-redux"

import { setUser } from "./../redux/reducers/user"
import { useNavigate } from 'react-router-dom';

function Signin({ footer }) {
  
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setMessage] = useState("")
  const { userData } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  useEffect(() => {
    console.log("the user is " , userData)
  } , [])
  
  const handleUsername = (event) => {
    setUserName(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }
   
  const submit = async  () => {

       try {
            const login = await fetch(`http://localhost:8080/api/v1/user/login` , {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username : username,
                    password : password
                })
            
            })

            if (login.status != 200) {
                const data = await login.json()
                setMessage(data.msg)
              
            }
            else {
                const data = await login.json()
                dispatch(setUser(data))   
                navigate('/dashboard');
            }
      } catch (err) {
            setMessage("Error Occured Please Try Again")
      }
 
  }
  return (

     <div className="bg shadow w-full rounded-lg  divide-gray-200">
      <div className="px-5 py-7">
        <p className="text-red-600">{ errorMessage}</p>
        <label className="font-semibold text-sm text-gray-600 pb-1 block">username</label>
        <input type="text" className="border  px-3 py-2 mt-1 mb-5 text-sm w-full text-black" value={username} onChange={handleUsername} />
        <label className="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
        <input type="password" className="border px-3 py-2 mt-1 mb-5 text-sm w-full text-black" value={password} onChange={handlePassword}/>
        
         <div className=' py-7'>
          <button type="button" className="px-3 py-2 mt-1 mb-5 transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5  text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
            onClick={(event) => {
              event.preventDefault()
              submit()
            }}
          >
            <span className="inline-block ">Sign In</span>
            
        </button>
        <span className="text-black">{footer}</span>
      </div>
      </div>
      

       
    </div>
    
  )
}

export default Signin;


 
 
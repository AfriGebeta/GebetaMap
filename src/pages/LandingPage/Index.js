import React , {useState} from "react";
import {ReactComponent as Logo} from '../../assets/images/mapslogo.svg';
import {ReactComponent as MapsLogo} from '../../assets/images/mapslogo.svg';
import {ReactComponent as Hamburger} from "./../../assets/icons/hamburger.svg"
import {Link} from 'react-router-dom';

import Signup from "./../../components/Signup";
import Signin from "./../../components/Signin";

import Modal from "./../../features/Modal"
function Index() {

  const [sidebarShow , setSideBarShow] = useState(false)
  const [signupModal,setSignupModal] = useState(false);
  const [signinModal,setSigninModal] = useState(false);
  return (
    <div className="w-full min-h-screen  overflow-hidden ">

<div className="flex gap-4 ">
            <Modal open={signupModal} close={() => {setSignupModal(false)}} elem={<Signup 
              footer={
                <div className="px-10 p-2">
                  <Link to="#" onClick={() => {setSigninModal(true); setSignupModal(false)}}>Already have an account? <span className="text-primary">Login</span></Link>
                </div>
              }
            
            />}>
         
            </Modal>
            <Modal open={signinModal} close={() => setSigninModal(false)} elem={<Signin
              footer={
                <div className="px-10 p-2">
                  <Link to="#" onClick={() => {setSigninModal(false); setSignupModal(true)}}>Dont Have an account? <span className="text-primary">Create One</span></Link>
                </div>
              }
            />}>

            </Modal>
          </div>

              {/* <h1 className="translatee-x-1/2 h-[70%] "> */}
                <img className="absolute h-full h-[20%] w-[20%] md:h-[50%] md:w-[20%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src={require('../../assets/images/comp.png')} alt='be' />
              {/* </h1> */}
              <div class="text-center">
  
</div>


<div 
 class={  
  sidebarShow ?
  " fixed z-40 h-screen p-4 overflow-y-auto bg-white w-80 dark:bg-gray-800 right-0 border border-l-[#1A1F32] " :
  " fixed z-40 h-screen p-4 overflow-y-auto bg-white w-80 dark:bg-gray-800  hidden" }

  

tabindex="-1" aria-labelledby="drawer-right-label">
   <button type="button" onClick={()=>{setSideBarShow(!sidebarShow)}} data-drawer-dismiss="drawer-right-example" aria-controls="drawer-right-example" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
      <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      <span class="sr-only">Close menu</span>
   </button>

   <div className="flex  flex-col  mt-[20%] space-y-3 text-center ">
        <a href='/#' className="text-xl font-bold">Contact Us</a>
        <a href='/#' className="text-xl font-bold">Documentation</a>
        <a href='/#' className="text-xl font-bold">Features</a>
        <a href='/#' className="text-xl font-bold">Pricing</a> 
            
                      
      <button onClick={() => {
        setSideBarShow(false)
        setSigninModal(true)}} class="  text-white font-bold py-2 px-4 rounded-full px-[5%] ">
          Sign In
      </button>
      
       {/* <button onClick={() => {
         setSideBarShow(false)
        setSignupModal(true)}} class="bg-blue  text-white font-semibold hover:text-white py-2 px-4 border border-white  rounded-full px-[5%] ">
          Sign Up
      </button>  */}

   </div>
   
  
</div>
      <div className="w-full min-h-screen flex font-bold">

        {/* Gebeta Kitchens */}
        {/*  bg-full-back */}
        <div className="w-[50%] flex flex-col justify-between text-[#1A1F32]    ">
          {/* <img src={require('../../assets/images/full.jpg')} className="w-full h-full "/> */}
        

  <div className=" flex px-10 py-7 w-full justify-between">
              <div className=" flex gap-3 items-center">
                <Logo className="w-5 h-6" />
            
                <span className="border-[#1A1F32] border h-full"></span>
                <img className='h-5' src={require('../../assets/images/logotext.png')} alt='logo' /> 
            </div>
            <p></p>
                <a href='/#' className="hidden md:flex text-[#1A1F32] text-lg ml-[5%]  ">Contact Us</a>
                  <a href='/#' className="hidden md:flex text-[#1A1F32] text-lg mx-[5%] ">Documentation</a>
          
          </div>   
      
           <div className="  text-right  flex justify-end items-center mr-[25%] mt-[35%] md:mt-[5%]">
                <span className="sm:text-4xl md:text-7xl tracking-[.2em] tracking-wide ">GE</span>
          </div> 

           <div className=" pl-10  flex flex-col space-y-5 mb-[5%]   ">
              <div className=" flex flex-col  ">
                <h3 className=" text-xl md:text-4xl  lg:text-7xl font-bold ">
                  GEBETA<span className="text-[#F29D38]">MAPS</span> <br /></h3>
            
                  <h3 className="text-md md:text-xl  lg:text-2xl">
                  <b className="text-black">GEOLOCATION</b><br />
                     ROUTING & MAP API SERVICE
                </h3>
                
              
              </div>
              <div className="">
                    <a href="/#" onClick={() => setSignupModal(true)}  className="btn theme-light px-[5%] py-[3%] border border-[#ccc]">GET STARTED</a>
                </div>

          </div> 
         
          

        
        </div>

        {/* other side */}

        <div className="w-[50%] flex flex-col justify-between  bg-[#1A1F32] text-white">
          {/* <img src={require('../../assets/images/full.jpg')} className="w-full h-full "/> */}
          <div className="hidden md:flex px-10 py-7 w-full justify-between">
               
               <a href='/#' className="text-white text-lg">Features</a>
                 <a href='/#' className="text-white text-lg">Pricing</a>
                 <a href='/#'></a>

                 <button onClick={() => setSigninModal(true)} class="bg-transparent text-white hover:bg-transparent hover:text-white border border-white   font-bold py-2 px-4 rounded-full px-[5%] lg:ml-[5%]">

                      SIGN IN
                 </button>
              

             
              
     
     </div> 
     <div className=" w-full md:hidden flex justify-between">
            <div></div>
        
                <span onClick={()=>{setSideBarShow(!sidebarShow)}} className="text-white mr-[5%] md:hidden">Menu</span>
            
          </div>


          
      
           <div className="  text-right  flex justify-start items-center ml-[25%] text-white mt-[35%] md:mt-[5%]">
                <span className="sm:text-4xl md:text-7xl tracking-[.2em] tracking-wide ">TA</span>
          </div> 

           <div className=" pl-10  flex flex-col space-y-5   mb-[5%]">
              <div className=" flex flex-row-reverse gap-5 px-10 py-7 list-none   ">
              <li><a href='https://twitter.com/GebetaApp?t=NVJ-T3z3jm0Jn74Pnou9iQ&s=35'>
                  <img className="w-10 h-10" src={require('../../assets/icons/social/twitter.png')} alt='twitter' />
                </a></li>
                <li><a href='https://www.linkedin.com/company/gebetaapp/'>
                  <img className="w-10 h-10" src={require('../../assets/icons/social/linkedIn.png')} alt='linkedin' />
                </a></li>
              
              </div>
              <div className="">
                </div>

          </div> 
         
          

        
        </div>


        {/* Gebeta Maps */}
{/*    
        <div className="w-[50%]  flex flex-col justify-between bg-[#1A1F32] text-white">
           <div className="hidden md:flex px-10 py-7 w-full justify-between">
               
                    <a href='/#' className="text-white text-lg">Features</a>
                      <a href='/#' className="text-white text-lg">Pricing</a>
                      <a href='/#'></a>

                      <button onClick={() => setSigninModal(true)} class="bg-transparent text-white hover:bg-transparent hover:text-white border border-white   font-bold py-2 px-4 rounded-full px-[5%] lg:ml-[5%]">

                           SIGN IN
                      </button>
                   

                      {/* <button onClick={() => setSignupModal(true)}  class="bg-transparent hover:bg-white hover:text-[#1A1F32]  text-white font-semibold hover:text-white py-2 px-4 border border-white  rounded-full px-[5%] lg:mr-[15%]">
                          SIGN UP
                      </button> 
                   
          
          </div> 
          <div className="hiddne w-full flex justify-between">
            <div></div>
            {/* <h1  class="text-white justify-end w-[20%] md:hidden text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2" > */}
                {/* <img src={require("./../../assets/icons/hamburger.png")} className="text-white w-10 h-5" /> 
                <span onClick={()=>{setSideBarShow(!sidebarShow)}} className="text-white mr-[5%] md:hidden">Menu</span>
            {/* </h1> 
          </div>
          

          <div className=" h-[50%] text-right  flex justify-start items-center mt-[40%] md:mt-[10%] pl-4   ml-[25%]">
          <span className="sm:text-4xl md:text-7xl  tracking-[.2em] text-white">TA</span>
          </div>

         

          <div className="flex flex-row-reverse gap-5 px-10 py-7 list-none mb-[5%]">
                <li><a href='https://twitter.com/GebetaApp?t=NVJ-T3z3jm0Jn74Pnou9iQ&s=35'>
                  <img className="w-10 h-10" src={require('../../assets/icons/social/twitter.png')} alt='twitter' />
                </a></li>
                <li><a href='https://www.linkedin.com/company/gebetaapp/'>
                  <img className="w-10 h-10" src={require('../../assets/icons/social/linkedIn.png')} alt='linkedin' />
                </a></li>
                {/* <li><a href='https://www.facebook.com/profile.php?id=100069915782189'>
                  <img className="w-10 h-10" src={require('../../assets/icons/social/facebook.png')} alt='facebook' />
                </a></li> 
          </div>

        
        </div> */}
    

      </div>
    </div>
  )
}

export default Index;

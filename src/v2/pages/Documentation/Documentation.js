import { ConfigProvider, Popover, Steps, Switch } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from '../../../assets/images/maplogo.svg';
import {ReactComponent as LocTargetIcon} from '../../../assets/icons/locTarget.svg';
import DirectionEndPoint from "./DirectionEndPoint";
import MatrixEndPoint from "./MatrixEndPoint";
import RouteEndPoint from "./RouteEndPoint";
import GeoCodingAPI from "./GeocodingAPI";
import ONMEndPoint from "./ONMEndPoint";
import TrackVisibility from "react-on-screen";
import { DownOutlined } from "@ant-design/icons";


const {Step} = Steps;

const customDot = (dot, { status, index }) => (
  <Popover>
    <span className={"w-full h-full inline-block rounded-full m-0 p-0 "+(status === 'process' || status === 'finish' ? 'bg-secondary' : 'bg-white')}></span>
  </Popover>
);


const ScreenView = ({children,setItems,setCurrentView}) => {
  useEffect(() => {
    let temp = [];
    children.map((elem) => {
      temp.push({title: elem.props.title || 'API'});
      // console.log(elem.props.title);
    })  
    setItems(temp);
  },[])
  return (
    <div>
      {children.map((child,i) => (
        <TrackVisibility partialVisibility>
          {({isVisible}) => (
            <ScreenChange visible={isVisible} index={i} setCurrentView={setCurrentView}>{child}</ScreenChange>
          )}
        </TrackVisibility>
      ))}
    </div>
  )
}

function ScreenChange({children,visible,index,setCurrentView}) {
  useEffect(() => {
    if(visible)
      setCurrentView(index);
    console.log(visible);
  },[visible])
  return children;
}


function Documentation() {
  const itemsx = [
    {title: 'Direction API'},
    {title: 'Matrix API'},
    {title: 'Route Optimization API'},
    {title: 'Geocoding API'},
    {title: 'Add tooltips'}
  ];
  const [items,setItems] = useState([]);
  const [currentView,setCurrentView] = useState(0);

  return (
    <div className="bg-dark min-h-screen flex justify-center">
      <div className="sw flex gap-4 py-6">
        <div className="flex flex-col gap-3 sticky top-5 h-screen">
          <div className="p-6 bg-[#202022] text-[#777] rounded-xl">
            <div className="flex gap-4 items-center px-5 py-2 text-child">
              <Logo className="" fill="#777" />
              <h2 className="m-0 uppercase">Api<br /> Documentation</h2>
              <LocTargetIcon />
            </div>
            <div className="leading-3 py-3">
              <Link to="/v2/" className="btn_sty1 float-right bg-secondary/40 hover:text-secondary">Home</Link>
            </div>
          </div>

          <div className="flex flex-col gap-4 py-4 mt-2 text-[#aaa] text-child">
            <h3 className="">Getting Started</h3>
              <Link to="/#Intro">Introduction</Link>
            <div className="flex ">
              <DownOutlined className="mt-1 mr-4" />
              <Link to="/#Intro">Get Started</Link>
            </div>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: '#f0000b',
                },
              }}
            >
              <Steps progressDot={customDot} current={currentView} direction="vertical"  className="!text-white" >
                {items.map((item) => <Step title={item.title} className="!text-[#aaa] text-child force" />)}
              </Steps>
            </ConfigProvider>
          </div>
        </div>


        <div className="flex-1 flex flex-col gap-4 p-10 card rounded-md bg-[#202022]">
          <div>
            <h2 className="m-0 text-[#aaa]">Introduction</h2>
            <p>With the GebetaMaps Directions API you can integrate A-to-B route planning, turn-by-turn navigation, route optimization, isochrone calculations, and other tools in your application.</p>
            <div className="py-3 flex gap-4 items-center">
              <Link to="/#" className="btn_sty1 sml bg-secondary/40">Routing API</Link>
              <Link to="/#" className="btn_sty1 sml ">Matrix API</Link>
              <Link to="/#" className="btn_sty1 sml ">Route Optimization API</Link>
              <Link to="/#" className="btn_sty1 sml ">Geocoding API</Link>
            </div>
          </div>
          <hr className="border-[#555] my-1" />
          <div>
            <h2 className="m-0 text-[#aaa]">Getting Started</h2>
            <div className="py-3 flex gap-4 items-center">
              <Link to="/#" className="btn_sty1 sml bg-secondary/40">Signup for gebeta maps</Link>
              <Link to="/#" className="btn_sty1 sml ">Create an API key</Link>
            </div>
            <p>
              Each API part has its own documentation. Jump to the desired API part and learn about the API through the given examples and tutorials. In addition, for each API there are specific sample requests that you can send via Insomnia or Postman to see what the requests and responses look like.
            </p>
          </div>
          <ScreenView setItems={setItems} setCurrentView={setCurrentView} className="flex flex-col gap-24">
            <DirectionEndPoint title="Direction EndPoint" />
            <MatrixEndPoint title="Matrix EndPoint" />
            <RouteEndPoint title="Routing EndPoint" />
            <GeoCodingAPI title="Geocoding API" />
            <ONMEndPoint title="One To Many " />
          </ScreenView>
        </div>
      </div>
    </div>
  )
}



export default Documentation;
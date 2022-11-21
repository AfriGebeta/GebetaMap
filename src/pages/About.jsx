import React from "react"
import gebetaLogo from '../assets/images/gebetalogo.png';
import Footer from "../components/Footer";


const Vision = ({title,children,className}) => {
	return (
		<div className={"rounded-lg border border-slate-400 w-full sm:w-[60%] p-6 "+className}>
			<h3 className="uppercase">{title}</h3>
			{children}
		</div>
	)
}
const About = () => {
	return (
		<div className="sw py-4 textwhite text-white">
			<div className="flex gap-1 sm:gap-10 justify-center flex-wrap mb-8 ">
				<div className="p-10 justify-center flex flex-col items-center min-w-[50px] w-[30%]">
					<img src={gebetaLogo} className="w-10 h-12" alt='gebeta' />
					<h1 className=""><span className="text-secondary">GEBETA</span></h1>
				</div>
				<div className=" w-full sm:w-[60%]  ">
					Gebeta was founded by former Addis Ababa Science and Technology University
					students. Having to go through the  challenges of meal accesibilty and quality,
					we decided to do something about it. Originally, Gebeta’s target was to provide an online food ordering and delivery platform just in universities but learning that the challenges run deep in our society, it evolved into targetting everyone especially the middle and low income residents of our city which more often than not could not afford this kinds of service. Now Gebeta provides affordable and quality online food ordering and delivery service powered by our very own powerful Map API, GebetaMaps, to facilitate our logistics.
				</div>
			</div>
			
			<div className="flex flex-col gap-24">
				<Vision title='Vision' className=''>
					Vision Description
				</Vision>
				<Vision title='Vision 2' className='self-end'>
					Vision Description
				</Vision>
				<Vision title='Vision 3'>
					Vision Description
				</Vision>
			</div>

			<Footer />
		</div>
	) 
}


export default About;
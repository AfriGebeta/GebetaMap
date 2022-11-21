import React from "react"


const Contact = () => {
	return (
		<div className="sw py-4 textwhite text-white">
			<div className="">
				<h3>Contact Us</h3>
				<hr />
			</div>
			<div>
				<h3 className="w-full text-center py-5 capitalize">How can we help</h3>
				<div className="flex justify-between flex-wrap gap-24">
					<form action="" method="post" className="flex flex-col gap-4 sty1 flex-1 min-w-[300px] ">
						<div>
							<b className="capitalize">Directly report issue</b>
							<p className="">Briefly state and submit your issue and we will do our very best to resolve it.<br /><br /> </p>
						</div>
						<textarea></textarea>
						<input type='submit' className="self-end" value='Submit' />
					</form>
					<form action="" method="post" className="flex flex-col gap-4 sty1 flex-1 min-w-[300px] ">
						<div>
							<b className="capitalize">Leave a feedback</b>
							<p className="">We always try to improve and provide you the best service, we welcome any comments about your experience and our serivice</p>
						</div>
						<textarea></textarea>
						<input type='submit' className="self-end" value='Submit' />
					</form>
				</div>
			</div>
		</div>
	) 
}


export default Contact;
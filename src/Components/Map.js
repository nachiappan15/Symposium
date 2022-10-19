import React from 'react'
import {MdOutlineShareLocation} from "react-icons/md"


const Map = () => {
  return (
    <div className='w-full lg:w-1/2 flex flex-col gap-1'>
      <h1 className='text-xl text-highlight font-semibold mb-4 flex gap-3 items-center mt-3' >
        College Location
        <MdOutlineShareLocation />
      </h1>
      <iframe className='h-80  w-full  rounded-lg' src="https://maps.google.com/maps?width=540&amp;height=400&amp;hl=en&amp;q=Velammal Engineering College Ambattur Red Hills Rd, Velammal Nagar, Surapet, Chennai, Tamil Nadu 600066&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

    </div>
  )
}

export default Map
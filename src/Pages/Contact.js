import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io"
import { MdEmail } from "react-icons/md"
import { AiTwotonePhone } from "react-icons/ai"

// Components
import Map from '../Components/Map'
import GlassBg from '../Components/GlassBg'

const Contact = () => {
    return (
        <div className=' grow w-full  px-5 lg:px-10 py-5 lg:py-10'>

            <h1 className='text-xl lg:text-3xl font-bold underline text-center text-headline '>
                Contact Us
            </h1>

            <p className='text-center text-xs lg:text-base font-semibold text-paragraph mb-3 lg:mb-6'>
                Any Queries ? We are here to help You
            </p>

            <div className='flex flex-col lg:flex-row lg:gap-16 gap-8' >

                <Map />

                <div className='lg:h-80 w-full lg:w-1/2  mt-2 flex flex-col gap-4 '>

                    <div className='  flex flex-col p-4 rounded-2xl justify-center items-center relative'>
                        <GlassBg />

                        <h1 className='text-xl text-selected font-semibold mb-4 flex gap-3 items-center ' >
                            Whatsapp <IoLogoWhatsapp size={35} />
                        </h1>

                        <div className='h-full w-full lg:w-2/3  px-2 flex flex-col gap-4 ml-6'>
                            <p className='text-paragraph font-semibold border-b-2 border-paragraph flex justify-between items-center'>+91 7397299843<AiTwotonePhone size={25} /></p>
                            <p className='text-paragraph font-semibold border-b-2 border-paragraph flex justify-between items-center'>+91 7397299843 <AiTwotonePhone size={25} /></p>
                            <p className='text-paragraph font-semibold border-b-2 border-paragraph flex justify-between items-center'>+91 7397299843 <AiTwotonePhone size={25} /></p>
                            <p className='text-paragraph font-semibold border-b-2 border-paragraph flex justify-between items-center'>+91 7397299843 <AiTwotonePhone size={25} /></p>
                            <p className='text-paragraph font-semibold border-b-2 border-paragraph flex justify-between items-center'>+91 7397299843 <AiTwotonePhone size={25} /></p>

                        </div>

                    </div>

                    <div className='   mt-2 relative py-2 flex flex-col items-center'>
                        <GlassBg />
                        <h1 className='text-xl text-gray-200 font-semibold mb-4 flex gap-3 items-center  ' >

                            Email <MdEmail size={35} />
                        </h1>
                        <p className=' ml-6 text-paragraph font-semibold border-b-2 border-paragraph'>naachiappan15@gmail.com</p>

                    </div>


                </div>
            </div>



        </div>
    )
}

export default Contact
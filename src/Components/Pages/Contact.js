import React from 'react'
import Map from '../Map'
import { IoLogoWhatsapp } from "react-icons/io"
import { MdEmail } from "react-icons/md"
import {AiTwotonePhone} from "react-icons/ai"

const Contact = () => {
    return (
        <div
            className=' grow w-full bg-background2 px-5 lg:px-10 py-5 lg:py-10'>
            <h1 className='text-xl lg:text-3xl font-bold underline text-center text-headline '>
                Contact Us
            </h1>
            <p className='text-sm lg:text-base text-center font-semibold text-paragraph mt-1 lg:mt-2'>
                Any Queries ? We are here to help You
            </p>
            <div className='flex flex-col lg:flex-row lg:gap-16 gap-8' >
                <Map />

                <div className='lg:h-80 w-2/3 lg:w-1/2  mt-2 flex flex-col gap-4'>
                    <div className=''>
                        <h1 className='text-xl text-selected font-semibold mb-4 flex gap-3 items-center mt-3' >
                            Whatsapp <IoLogoWhatsapp size={35} />
                        </h1>
                        <div className='h-full w-full lg:w-2/3  px-2 flex flex-col gap-4 ml-6'>
                            <p className='text-paragraph font-semibold border-b-2 border-paragraph flex justify-between items-center'>+91 7397299843<AiTwotonePhone size={25}/></p>
                            <p className='text-paragraph font-semibold border-b-2 border-paragraph flex justify-between items-center'>+91 7397299843 <AiTwotonePhone size={25}/></p>
                            <p className='text-paragraph font-semibold border-b-2 border-paragraph flex justify-between items-center'>+91 7397299843 <AiTwotonePhone size={25}/></p>
                            <p className='text-paragraph font-semibold border-b-2 border-paragraph flex justify-between items-center'>+91 7397299843 <AiTwotonePhone size={25}/></p>
                            <p className='text-paragraph font-semibold border-b-2 border-paragraph flex justify-between items-center'>+91 7397299843 <AiTwotonePhone size={25}/></p>

                        </div>
                    </div>
                    <div className=' w-full lg:w-2/3  mt-2'>
                        <h1 className='text-xl text-gray-200 font-semibold mb-4 flex gap-3 items-center mt-3' >
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
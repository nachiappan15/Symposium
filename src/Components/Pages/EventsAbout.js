import React, { useState } from 'react'
import { Technical } from '../../Data/EventsData'
import {
    useParams
} from "react-router-dom";

const EventsAbout = () => {
    let { id } = useParams();
   var event={}

    Technical.map(i=>{
        if(i.routes == id){
           event ={...i}
        }
    })

    return (
        <div className='w-full h-min-full grow p-4 lg:px-20 lg:py-6 '>
            <div className='h-full w-full   flex flex-col '>
                <h1 className='text-xl lg:text-3xl font-semibold underline text-headline text-center'>{event.Name}</h1>
                <h1 className='text-xl font-semibold text-highlight  flex-none '>Rules and Regulations</h1>
                <p className='text-paragraph font-semibold mt-1 ml-4 text-sm lg:text-base '>{ event.rules.map(i=> {
                    return <p >{i}</p>
                })}</p>
                <div className='w-full  text-sm mt-4'>
                    <h1 className='text-base  font-bold text-selected'>Event Co-ordinators</h1>
                    <div className='flex flex-col gap-1 text-paragraph font-semibold ml-4'>
                        <div className='flex gap-6'>
                            <p>NAme</p>
                            <p>+919999999999</p>
                        </div>
                        <div className='flex gap-6'>
                            <p>NAme</p>
                            <p>+919999999999</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-center mt-2'>
                        <button className="text-white bg-gray-900 p-2 lg:px-4 lg:py-2 rounded-md font-semibold hover:scale-110">Register Now</button>


                    </div>


                </div>
            </div>
        </div>
    )
}

export default EventsAbout
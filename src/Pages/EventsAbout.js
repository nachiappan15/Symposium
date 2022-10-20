import React, { useState } from 'react'
import { useParams, Link } from "react-router-dom";

// Data
import EventsData from '../Data/EventsData'
import hackathon from "../images/hackathon.jpg"
import coding from "../images/coding.jpeg"
import pcgaming from "../images/pcgaming.jpg"
import sharktank from "../images/sharktank.png"
import workshop from "../images/workshop.jpeg"
import quizmovieimg from "../images/quizmovie.jpg"
import quizanime from "../images/quizanime.png"
import musicfest from "../images/musicfest.png"
import paperpresentation from "../images/paperpresentation.jpeg"
import murdermystery from "../images/murdermystery.png"
import adzap from "../images/adzap.png"
import screwit from "../images/screwit.jpeg"
import meme from "../images/meme.jpeg"

// Components
import GlassBg from '../Components/GlassBg';

const EventsAbout = () => {

    // images
    const images={
        sharktank:sharktank,
        hackathon:hackathon,
        screwit:screwit,
        paperpresentation:paperpresentation,
        techons:hackathon,
        coding:coding,
        workshop:workshop,
        musicfest:musicfest,
        pcgaming:pcgaming,
        quizmovie:quizmovieimg,
        memetic:meme,
        quizanime:quizanime,
        adzap:adzap,
        murdermystery:murdermystery ,


    }

    
    let { id } = useParams();
    var event = {}

    EventsData.map(i => {
        if (i.route == id) {
            event = { ...i }
        }
    })

    return (
        <div className='w-full h-min-full grow p-4 lg:px-20 lg:py-6 '>
            <div className='h-full w-full   flex flex-col  justify-center items-center'>

                <h1 className='text-xl lg:text-3xl font-semibold underline text-headline text-center mb-2'>{event.Name}</h1>
                <div className=' flex-col flex lg:flex-row-reverse lg:gap-4 gap-2'>
                    <div className='lg:w-2/5 p-2 rounded-lg overflow-hidden'>
                        <img src={`${images[event.route]}`} className='rounded-lg'/>
                        
                    </div>
                    <div className='lg:w-1/2  flex justify-center flex-col  p-2 relative'>
                        <GlassBg />
                        {/* <h1 className='text-xl font-semibold text-highlight  flex-none ml-2 '>What is {event.Name}   </h1> */}
                        <p className='text-paragraph font-semibold mt-1 ml-4 text-sm lg:text-base  '>
                            {event.descrp.map(i => { return <p >{i}</p> })}
                            {event.addinfo && <p className='grad_text font-bold mt-4'>{`(`}{event.addinfo}{`)`}</p>}
                        </p>
                    </div>
                </div>

                <div className='lg:w-2/3 mt-4  relative p-4 flex gap-4 items-center '>
                    <GlassBg />
                    <h1 className='text-base font-semibold text-highlight  flex-none ml-2 '>Event Start Time</h1>
                    { event.timing && <p className='text-paragraph font-semibold mt-1 ml-4 text-sm lg:text-base '>{event.timing}</p>}

                </div>

                {event.rules &&
                <div className='lg:w-2/3 mt-4  relative p-2 '>
                    <GlassBg />
                    <h1 className='text-xl font-semibold text-highlight  flex-none ml-2 '>Rules and Regulations</h1>
                       <p className='text-paragraph font-semibold mt-1 ml-4 text-sm lg:text-base '>{event.rules.map(i => {
                        return <p >{i}</p>
                    })}</p>

                </div>}

                <div className='lg:w-1/2  text-sm mt-4 flex flex-col p-2 relative'>
                    <GlassBg />
                    <h1 className='text-base  font-bold text-selected ml-2'>Event Co-ordinators</h1>
                    <div className='flex flex-col gap-1 text-paragraph font-semibold ml-4'>
                        {
                            event.phone.map(i => {
                                return <div className='flex gap-6'>
                                    <p>{i.Name}</p>
                                    <p>{i.phoneNumber}</p>
                                </div>
                            })
                        }

                    </div>



                </div>
                <div className='flex items-center justify-center mt-2'>
                    <Link to="/register"><button className="text-white bg-gray-900 p-2 lg:px-4 lg:py-2 rounded-md font-semibold hover:scale-110">Register Now</button></Link>


                </div>
            </div>
        </div>
    )
}

export default EventsAbout
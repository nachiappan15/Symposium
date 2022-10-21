import React from 'react'
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";


// Data
import EventsData from '../Data/EventsData'

// images
import sharktank from "../images/sharktank.png"//sharktank
import hackathon from "../images/hackathon.jpg"//hackathon
import screwit from "../images/screwit.jpeg"//screwit
import paperpresentation from "../images/paperpresentation.jpeg"//paper presentation
import techon from "../images/techon.png"//techon
import coding from "../images/coding.jpeg"// coding and Debugging
import workshop from "../images/workshop.jpeg"//Workshop

import musicfest from "../images/musicfest.png"//music fest
import pcgaming from "../images/pcgaming.jpg"//pc gaming
import mobilegaming from "../images/mobilegaming.jpg"//mobile gaming
import quizmovieimg from "../images/quizmovie.jpg"//Movie Quiz
import meme from "../images/meme.jpeg"//MEME
import quizanime from "../images/quizanime.jpg" //Quiz anime
import adzap from "../images/adzap.png"//adzap
import murdermystery from "../images/murdermystery.png"//Murder Mystery



// Components
import GlassBg from '../Components/GlassBg';

const EventsAbout = () => {

    // images
    const images = {
        sharktank: sharktank,
        hackathon: hackathon,
        screwit: screwit,
        paperpresentation: paperpresentation,
        techons: techon,
        coding: coding,
        workshop: workshop,

        musicfest: musicfest,
        pcgaming: pcgaming,
        mobilegaming:mobilegaming,
        quizmovie: quizmovieimg,
        memetic: meme,
        quizanime: quizanime,
        adzap: adzap,
        murdermystery: murdermystery,


    }


    let { id } = useParams();
    var event = {}

    EventsData.map(i => {
        if (i.route === id) {
            event = { ...i }
        }
        return 0
    })

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} className='w-full h-min-full grow  lg:px-20 lg:py-6 '>
            <div className='h-full w-full  flex flex-col p-4 justify-center '>

                <h1 className='text-xl lg:text-3xl font-semibold underline text-headline text-center mb-2'>{event.Name}</h1>
                <div className=' flex-col flex lg:flex-row-reverse lg:gap-4 gap-2 p-2'>
                    <div className='  lg:w-2/5 p-2 rounded-lg overflow-hidden'>
                        <img src={`${images[event.route]}`} className=' rounded-lg' alt="" />

                    </div>
                    <div className='lg:w-1/2 w-full  flex items-center justify-center flex-col p-2  relative'>
                        <GlassBg />
                        {/* <h1 className='text-xl font-semibold text-highlight  flex-none ml-2 '>What is {event.Name}   </h1> */}
                        <p className='text-paragraph font-semibold mt-1  text-sm lg:text-base  '>
                            {event.descrp.map(i => { return <p >{i}</p> })}
                            {event.addinfo !== [``] &&
                                event.addinfo.map(i => { return <p className='grad_text font-bold mt-4'>{i}</p> })}
                        </p>
                    </div>
                </div>

                {event.timing && <div className='lg:w-2/3 mx-auto flex items-center justify-center lg:items-start mt-4 flex-col p-2  relative  '>
                    <GlassBg />
                    <h1 className='text-base font-semibold text-highlight  lg:ml-2'>Event Timings</h1>
                    {event.timing.map(i => {
                        return <p className='text-paragraph font-semibold mt-1  text-sm lg:text-base lg:ml-4'>{i}</p>
                    })}

                </div>}

                {event.rules &&
                    <div className='lg:w-2/3 mx-auto flex items-center justify-center lg:items-start mt-4 flex-col p-2  relative  '>
                        <GlassBg />
                        <h1 className='text-xl font-semibold text-highlight  flex-none lg:ml-2 '>Rules and Regulations</h1>
                        <p className='text-paragraph font-semibold mt-1  text-sm lg:text-base lg:ml-4 '>{event.rules.map(i => {
                            return <p >{i}</p>
                        })}</p>

                    </div>}
                {
                    event.grpLink && 
                    <a className='w-full flex items-center justify-center mt-2' href={event.grpLink.link} target={`_blank`}>  <button className="text-white bg-selected p-2 lg:px-4 lg:py-2 rounded-md font-semibold hover:scale-110">Join on {event.grpLink.mode} </button></a>
                    
                }
                <div className='flex items-center justify-center mt-2'>
                    <Link to="/register"><button className="text-white bg-gray-900 p-2 lg:px-4 lg:py-2 rounded-md font-semibold hover:scale-110">Register Now</button></Link>


                </div>

                <div className=' lg:w-2/3 mx-auto flex items-center justify-center lg:items-start mt-4 flex-col p-2  relative '>
                    <GlassBg />
                    <h1 className='text-base  font-bold text-selected lg:ml-2'>Event Co-ordinators</h1>
                    <div className='flex flex-col gap-1 text-paragraph font-semibold lg:ml-4'>
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

            </div>
        </motion.div>
    )
}

export default EventsAbout
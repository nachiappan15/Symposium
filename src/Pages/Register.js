import React from 'react'
import { motion } from "framer-motion";

import EventsData from '../Data/EventsData'
import GlassBg from '../Components/GlassBg'





const Register = () => {
    return (
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}} className='h-full grow w-full   lg:px-32'>

            <div className='h-full w-full mt-5 lg:mt-5 flex flex-col gap-1 p-3'>
                <h1 className='text-center text-xl lg:text-3xl font-semibold underline text-headline'>
                    REGISTER
                </h1>

                <p className='text-center text-xs lg:text-base font-semibold text-paragraph mb-3 lg:mb-6'>
                    Register here to participate in the events
                </p>

                <div className='lg:w-2/3 mx-auto flex flex-col items-center lg:items-start relative   lg:px-4 px-1 py-4 rounded-md mb-3 '>
                    <GlassBg />
                    <h1 className='text-xl font-semibold text-headline mb-2 ml-2 text-center '>
                        Information To be Noted For Registeration
                    </h1>
                    <p className='text-paragraph font-semibold ml-6 flex flex-col gap-2'>
                        <p>
                            1. Every student should Register <span className='grad_text'>INDIVIDUALLY</span> even for team events.
                        </p>
                        <p>2. Registration fees is &#8377; 150.</p>
                        <p>3. Registration fees will be &#8377; 300 for workshop.</p>
                        <p>4. Every individual is allowed to participate in max 3 events.</p>
                        <p>5. Food will be provided as compliment</p>
                        <p>6. The 3 events include both Technical and NonTechnical.</p>
                        <p>7. It is adviced to check the event timings to avoid clashes.</p>
                        <p>8. ID card is mandatory for entry.</p>

                    </p>

                </div>
               <a className='w-full flex items-center justify-center' href='https://forms.gle/6PmfvHWCMk4NKpn1A' target={`_blank`}> <button className='  border-2 h-fit my-auto px-2 py-1 rounded-md mb-3 border-highlight text-headline bg-highlight hover:text-highlight hover:bg-card '>Click Here To Register</button></a>

                <div className='flex flex-col lg:flex-row gap-8 items-center justify-between'>
                    <div className='w-full lg:w-1/3 relative py-2 pr-2'>
                        <GlassBg />
                        <h1 className='text-lg lg:text-2xl font-semibold text-selected  ml-2'>
                            Technical Events
                        </h1>
                        <div className='flex flex-col gap-3 mt-2 ml-8 '>
                            {
                                EventsData.map((i) => {
                                    if (i.type === "technical") {
                                        return <>
                                            <p className='text-sm lg:text-base text-paragraph font-semibold border-b-2 border-paragraph'>{i.Name}</p>
                                        </>
                                    }
                                    return<></>
                                })
                            }

                        </div>


                    </div>


                    <div className='w-full lg:w-1/3  relative py-2 pr-2'>
                        <GlassBg />
                        <h1 className='text-lg lg:text-2xl font-semibold text-selected ml-2'>
                            Non Technical Events
                        </h1>
                        <div className='flex flex-col gap-3 mt-2 ml-8 '>
                            {
                                EventsData.map((i) => {
                                    if (i.type === "nontechnical") {
                                        return <>
                                            <p className='text-sm lg:text-base text-paragraph font-semibold border-b-2 border-paragraph'>{i.Name}</p>
                                        </>
                                    }
                                        return<></>
                                })
                            }

                        </div>

                    </div>

                </div>
            </div>

        </motion.div>
    )
}

export default Register